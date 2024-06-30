from scapy.all import sniff, IP
import requests
import sqlite3
from datetime import datetime

# Database setup
conn = sqlite3.connect('network_activity.db')
cursor = conn.cursor()

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
    packet_count INTEGER,
    timestamp TEXT
)''')

# In-memory data storage
ip_country_mapping = {}
traffic_mapping = {}

def get_country_from_ip(ip):
    try:
        response = requests.get(f"http://ip-api.com/json/{ip}")
        return response.json().get("country", "Unknown")
    except Exception as e:
        return "Unknown"

def process_packet(packet):
    if packet.haslayer(IP):
        src_ip = packet[IP].src
        dst_ip = packet[IP].dst
        protocol = packet.proto  # Protocol number (TCP/UDP/ICMP etc.)

        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        # Destination IP and country table
        if dst_ip not in ip_country_mapping:
            country = get_country_from_ip(dst_ip)
            ip_country_mapping[dst_ip] = country
            
            print(dst_ip, protocol, country, timestamp)
            
            cursor.execute('''
                INSERT INTO destination_data (destination_ip, protocol, country, timestamp)
                VALUES (?, ?, ?, ?)
            ''', (dst_ip, protocol, country, timestamp))

        # Traffic data table
        key = (src_ip, dst_ip, protocol)
        if key not in traffic_mapping:
            traffic_mapping[key] = 0
        
        traffic_mapping[key] += 1
        
        cursor.execute('''
            INSERT INTO traffic_data (sender_ip, destination_ip, protocol, packet_count, timestamp)
            VALUES (?, ?, ?, ?, ?)
        ''', (src_ip, dst_ip, protocol, traffic_mapping[key], timestamp))

        conn.commit()

def start_sniffing():
    sniff(prn=process_packet, store=0)

start_sniffing()

# Close the database connection when done
conn.close()
