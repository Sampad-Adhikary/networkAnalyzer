from flask import Flask, jsonify, render_template, request
from datetime import datetime, timedelta
import sqlite3

app = Flask(__name__)

def get_recent_data(last_minutes=60):
    conn = sqlite3.connect('network_activity4.db')
    cursor = conn.cursor()

    # Calculate the timestamp for 10 minutes ago
    ten_minutes_ago = datetime.now() - timedelta(minutes=last_minutes)
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
        SELECT sender_ip, destination_ip, port, protocol, application_protocol, timestamp, flag
        FROM traffic_data
        WHERE timestamp > ?
        ORDER BY timestamp DESC
    ''', (ten_minutes_ago_str,))
    raw_traffic_data = cursor.fetchall()

    # Aggregate packet counts by combining duplicate entries
    traffic_mapping = {}
    for sender_ip, destination_ip, port, protocol, application_protocol, timestamp, flag in raw_traffic_data:
        key = (sender_ip, destination_ip, protocol)
        if key not in traffic_mapping:
            traffic_mapping[key] = {'sender_ip': sender_ip, 'destination_ip': destination_ip, 'packet_count': 0, 'timestamp': timestamp, 'port':port, 'application_protocol':application_protocol, 'flag':flag}
        traffic_mapping[key]['packet_count'] += 1

    # Create list for traffic data
    traffic_data_list = list(traffic_mapping.values())
    
    # Fetch devices where MAC address is not 'Unknown'
    cursor.execute('''
        SELECT device_ip, hostname
        FROM devices
        WHERE mac_address != ?
    ''', ("Unknown",))
    devices = cursor.fetchall()

    # Create a dictionary to store packet counts for each hostname
    mac_address_packet_counts = {}

    # Map IP addresses to hostnames
    ip_to_hostname = {device_ip: hostname for device_ip, hostname in devices}

    # Count packets for hostnames
    for sender_ip, destination_ip, port, protocol, application_protocol, timestamp, flag in raw_traffic_data:
        if sender_ip in ip_to_hostname:
            hostname = ip_to_hostname[sender_ip]
            if hostname not in mac_address_packet_counts:
                mac_address_packet_counts[hostname] = 0
            mac_address_packet_counts[hostname] += 1
        if destination_ip in ip_to_hostname:
            hostname = ip_to_hostname[destination_ip]
            if hostname not in mac_address_packet_counts:
                mac_address_packet_counts[hostname] = 0
            mac_address_packet_counts[hostname] += 1

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

@app.route('/', methods=['GET'])
def index():
    time_limit = request.args.get('id')
    try:
        if time_limit is not None and time_limit != '':
            time_limit = int(time_limit) 
        else:
            time_limit = 60
    except Exception as e:
        time_limit = 60
    country_ip_dict, traffic_data_list, mac_addr_packet_counts = get_recent_data(time_limit)
    # print(mac_addr_packet_counts)
    traffic_volume_labels = list(mac_addr_packet_counts.keys())
    traffic_volume_values = []
    for label in traffic_volume_labels:
        traffic_volume_values.append(mac_addr_packet_counts[label])
    
    popular_countries_coordinates = {
        "United States": [37.0902, -95.7129],
        "China": [35.8617, 104.1954],
        "India": [20.5937, 78.9629],
        "Brazil": [-14.2350, -51.9253],
        "India": [20.5937, 78.9629],
        "United Kingdom": [55.3781, -3.4360],
        "Russia": [61.5240, 105.3188],
        "Japan": [36.2048, 138.2529],
        "Germany": [51.1657, 10.4515],
        "France": [46.6034, 1.8883],
        "Italy": [41.8719, 12.5674],
        "Canada": [56.1304, -106.3468],
        "Australia": [-25.2744, 133.7751],
        "South Korea": [35.9078, 127.7669],
        "Mexico": [23.6345, -102.5528],
        "Indonesia": [-0.7893, 113.9213],
        "Saudi Arabia": [23.8859, 45.0792],
        "Turkey": [38.9637, 35.2433],
        "Argentina": [-38.4161, -63.6167],
        "South Africa": [-30.5595, 22.9375],
        "Colombia": [4.5709, -74.2973],
        "Spain": [40.4637, -3.7038],
        "Nigeria": [9.0820, 8.6753],
        "Poland": [51.9194, 19.1451],
        "Ukraine": [48.3794, 31.1656],
        "Egypt": [26.8205, 30.8025],
        "Vietnam": [14.0583, 108.2772],
        "Thailand": [15.8700, 100.9925],
        "Iran": [32.4279, 53.6880],
        "Kenya": [-1.2921, 36.8219],
        "Sweden": [60.1282, 18.6435],
        "Belgium": [50.8503, 4.3517],
        "Netherlands": [52.3676, 4.9041],
        "Switzerland": [46.8182, 8.2275],
        "Austria": [47.5162, 14.5501],
        "Norway": [60.4720, 8.4689],
        "Denmark": [56.2639, 9.5018],
        "Finland": [61.9241, 25.7482],
        "Singapore": [1.3521, 103.8198],
        "Malaysia": [4.2105, 101.9758],
        "Philippines": [12.8797, 121.7740],
        "New Zealand": [-40.9006, 174.8860],
        "Chile": [-35.6751, -71.5430],
        "Peru": [-9.1900, -75.0152],
        "Iraq": [33.2232, 43.6793],
        "Czech Republic": [49.8175, 15.4730],
        "Portugal": [39.3999, -8.2245],
        "Hungary": [47.1625, 19.5033],
        "Israel": [31.0461, 34.8516],
        "Pakistan": [30.3753, 69.3451],
        "Bangladesh": [23.6858, 90.3563]
    }

     
    return render_template('index.html', country_ip_dict=country_ip_dict, traffic_data_list=traffic_data_list,pie_label=traffic_volume_labels,pie_series=traffic_volume_values, country_code=popular_countries_coordinates)

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