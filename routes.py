from flask import Flask, jsonify, render_template, request
from datetime import datetime, timedelta
import sqlite3

app = Flask(__name__)

def get_recent_data():
    conn = sqlite3.connect('network_activity3.db')
    cursor = conn.cursor()

    # Calculate the timestamp for 10 minutes ago
    ten_minutes_ago = datetime.now() - timedelta(minutes=120)
    ten_minutes_ago_str = ten_minutes_ago.strftime('%Y-%m-%d %H:%M:%S')

    # Fetch recent data from destination_data table
    cursor.execute('''
        SELECT country, COUNT(destination_ip) AS ip_count
        FROM destination_data
        WHERE timestamp > ?
        GROUP BY country
    ''', (ten_minutes_ago_str,))
    country_ip_count = cursor.fetchall()

    # Create dictionary for country and count of IPs
    country_ip_dict = {country: count for country, count in country_ip_count}

    # Fetch recent data from traffic_data table
    cursor.execute('''
        SELECT sender_ip, destination_ip, protocol, timestamp
        FROM traffic_data
        WHERE timestamp > ?
        ORDER BY timestamp DESC
    ''', (ten_minutes_ago_str,))
    raw_traffic_data = cursor.fetchall()

    # Aggregate packet counts by combining duplicate entries
    traffic_mapping = {}
    for sender_ip, destination_ip, protocol, timestamp in raw_traffic_data:
        key = (sender_ip, destination_ip, protocol)
        if key not in traffic_mapping:
            traffic_mapping[key] = {'sender_ip': sender_ip, 'destination_ip': destination_ip, 'protocol': protocol, 'packet_count': 0, 'timestamp': timestamp}
        traffic_mapping[key]['packet_count'] += 1

    # Create list for traffic data
    traffic_data_list = list(traffic_mapping.values())
    
    # Fetch devices where MAC address is not 'Unknown'
    cursor.execute('''
        SELECT device_ip, mac_address
        FROM devices
        WHERE mac_address != ?
    ''', ("Unknown",))
    devices = cursor.fetchall()

    # Create a dictionary to store packet counts for each MAC address
    mac_address_packet_counts = {}

    # Map IP addresses to MAC addresses
    ip_to_mac = {device_ip: mac_address for device_ip, mac_address in devices}

    # Count packets for devices
    for sender_ip, destination_ip, protocol, timestamp in raw_traffic_data:
        if sender_ip in ip_to_mac:
            mac_address = ip_to_mac[sender_ip]
            if mac_address not in mac_address_packet_counts:
                mac_address_packet_counts[mac_address] = 0
            mac_address_packet_counts[mac_address] += 1
        if destination_ip in ip_to_mac:
            mac_address = ip_to_mac[destination_ip]
            if mac_address not in mac_address_packet_counts:
                mac_address_packet_counts[mac_address] = 0
            mac_address_packet_counts[mac_address] += 1

    conn.close()
    return country_ip_dict, traffic_data_list, mac_address_packet_counts

def get_country_data(country_name):
    conn = sqlite3.connect('network_activity3.db')
    cursor = conn.cursor()

    # Fetch data for the specified country
    cursor.execute('''
        SELECT destination_ip, protocol, timestamp
        FROM destination_data
        WHERE country = ?
    ''', (country_name,))
    raw_data = cursor.fetchall()

    # Aggregate packet counts by destination IP and protocol
    packet_counts = {}
    for destination_ip, protocol, timestamp in raw_data:
        print(raw_data)
        key = (destination_ip, protocol)
        if key not in packet_counts:
            packet_counts[key] = {'destination_ip': destination_ip, 'protocol': protocol, 'packet_count': 0, 'timestamp': timestamp}
        packet_counts[key]['packet_count'] += 1

    conn.close()
    return list(packet_counts.values())

@app.route('/')
def index():
    country_ip_dict, traffic_data_list, mac_addr_packet_counts = get_recent_data()
    print(mac_addr_packet_counts)
    return render_template('index.html', country_ip_dict=country_ip_dict, traffic_data_list=traffic_data_list)

@app.route('/country/', methods=['GET'])
def findCountry():
    country_name = request.args.get('id')  # Extract the 'id' query parameter

    if not country_name:
        return jsonify({"error": "Country name is required"}), 400

    data = get_country_data(country_name)
    
    # Return data as JSON response
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)