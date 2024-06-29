from scapy.all import sniff, IP
import requests

# In-memory data storage
ip_country_mapping = {}
device_user_mapping = {}

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

        if dst_ip not in ip_country_mapping:
            country = get_country_from_ip(dst_ip)
            print(dst_ip,country)
            ip_country_mapping[dst_ip] = country

        if packet.src not in device_user_mapping:
            device_user_mapping[packet.src] = "Unknown User"

def start_sniffing():
    sniff(prn=process_packet, store=0)
