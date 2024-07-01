from scapy.all import sniff, ARP, Ether, IP, TCP, UDP, srp
import requests
import sqlite3
from datetime import datetime, timedelta
from collections import defaultdict
import socket

# Initialize ip_country_traffic as a defaultdict
ip_country_traffic = defaultdict(int)
suspicious_ips = set()  # To store suspicious IPs

# Database setup
conn = sqlite3.connect('network_activity4.db')
cursor = conn.cursor()
risky_countries = ["Pakistan","China","Russia"]

# Create tables
cursor.execute('''CREATE TABLE IF NOT EXISTS destination_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    destination_ip TEXT,
    protocol TEXT,
    country TEXT,
    timestamp TEXT
)''')

cursor.execute('''CREATE TABLE IF NOT EXISTS traffic_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender_ip TEXT,
    destination_ip TEXT,
    protocol TEXT,
    port INTEGER,
    application_protocol TEXT,
    timestamp TEXT,
    flag TEXT
)''')

cursor.execute('''CREATE TABLE IF NOT EXISTS devices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    device_ip TEXT UNIQUE,
    mac_address TEXT,
    hostname TEXT,
    last_seen TEXT
)''')

# In-memory data storage
ip_country_mapping = {}
traffic_mapping = {}

def get_hostname(ip):
    try:
        return socket.gethostbyaddr(ip)[0]
    except socket.herror:
        return "Unknown"

def get_mac_address(ip):
    arp_request = ARP(pdst=ip)
    ether_request = Ether(dst="ff:ff:ff:ff:ff:ff")
    packet = ether_request/arp_request
    result = srp(packet, timeout=2, verbose=False)[0]
    if result:
        return result[0][1].hwsrc
    else:
        return "Unknown"

def is_local_ip(ip):
    # Check if IP falls within the common private IP address ranges
    if ip.startswith('192.168.') or ip.startswith('10.') or ip.startswith('172.'):
        second_octet = int(ip.split('.')[1])
        if ip.startswith('172.') and (16 <= second_octet <= 31):
            return True
        elif ip.startswith('172.') and not (16 <= second_octet <= 31):
            return False
        return True
    return False

def get_country_from_ip(ip):
    print("called!")
    try:
        response = requests.get(f"http://ip-api.com/json/{ip}")
        return response.json().get("country", "Unknown")
    except Exception as e:
        return "Unknown"

def identify_application_protocol(packet):
    if packet.haslayer(TCP):
        port = packet[TCP].dport
        if port == 22:
            return "SSH", port, "Unsafe"
        elif port == 80:
            return "HTTP", port, "Safe"
        elif port == 443:
            return "HTTPS", port, "Safe"
        elif port == 25:
            return "SMTP", port, "Safe"
        elif port == 110:
            return "POP3", port, "Safe"
        elif port == 143:
            return "IMAP", port, "Safe"
        elif port == 53:
            return "DNS", port, "Safe"
        elif packet[TCP].payload:
            payload = bytes(packet[TCP].payload)
            if payload.startswith(b'GET') or payload.startswith(b'POST'):
                return "HTTP", port, "Safe"
    elif packet.haslayer(UDP):
        port = packet[UDP].dport
        if port == 53:
            return "DNS", port, "Safe"
        elif port == 123:
            return "NTP", port, "Safe"
    elif packet.haslayer(IP):
        port = packet[IP].dport if hasattr(packet[IP], 'dport') else "Unknown"
        return "Unknown", port, "Safe"
    return "Unknown", "Unknown", "Safe"

def process_packet(packet):
    if packet.haslayer(IP):
        src_ip = packet[IP].src
        dst_ip = packet[IP].dst
        protocol = packet.proto  # Protocol number (TCP/UDP/ICMP etc.)
        
        application_protocol, port, flag = identify_application_protocol(packet)
        
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # Handle devices
        if is_local_ip(src_ip):
            mac_address = get_mac_address(src_ip)
            hostname = get_hostname(src_ip)
            cursor.execute('''
                INSERT OR REPLACE INTO devices (device_ip, mac_address, hostname, last_seen)
                VALUES (?, ?, ?, ?)
            ''', (src_ip, mac_address, hostname, timestamp))

        if is_local_ip(dst_ip):
            mac_address = get_mac_address(dst_ip)
            hostname = get_hostname(dst_ip)
            cursor.execute('''
                INSERT OR REPLACE INTO devices (device_ip, mac_address, hostname, last_seen)
                VALUES (?, ?, ?, ?)
            ''', (dst_ip, mac_address, hostname, timestamp))
        
        country = ""
        suspicious = 0

        # Destination IP and country table
        if dst_ip not in ip_country_mapping:
            # Destination IP and country table
            country = get_country_from_ip(dst_ip)
            ip_country_mapping[dst_ip] = country
        else: 
            country = ip_country_mapping[dst_ip]
        
        print(dst_ip, protocol, country, timestamp)

        # Insert into destination_data table
        cursor.execute('''
            INSERT INTO destination_data (destination_ip, protocol, country, timestamp)
            VALUES (?, ?, ?, ?)
        ''', (dst_ip, protocol, country, timestamp))

        # Traffic data table
        key = (src_ip, dst_ip, protocol, port, application_protocol)
        if key not in traffic_mapping:
            traffic_mapping[key] = []
        
        traffic_mapping[key].append(timestamp)
        
        if ip_country_mapping[dst_ip] in risky_countries:
            flag = "Suspicious destination country"

        # Insert into traffic_data table
        cursor.execute('''
            INSERT INTO traffic_data (sender_ip, destination_ip, protocol, port, application_protocol, timestamp, flag)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (src_ip, dst_ip, protocol, port, application_protocol, timestamp, flag))

        conn.commit()

def start_sniffing():
    sniff(prn=process_packet, store=0)

start_sniffing()

# Close the database connection when done
conn.close()