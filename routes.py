from flask import Flask, render_template
from datetime import datetime, timedelta
import sqlite3

app = Flask(__name__)

def get_recent_data():
    conn = sqlite3.connect('network_activity.db')
    cursor = conn.cursor()

    # Calculate the timestamp for 10 minutes ago
    ten_minutes_ago = datetime.now() - timedelta(minutes=60)
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
        SELECT sender_ip, destination_ip, protocol, packet_count, timestamp
        FROM traffic_data
        WHERE timestamp > ?
        ORDER BY timestamp DESC
    ''', (ten_minutes_ago_str,))
    traffic_data = cursor.fetchall()

    # Create dictionary for traffic data
    traffic_data_list = [
        {
            'sender_ip': sender_ip,
            'destination_ip': destination_ip,
            'protocol': protocol,
            'packet_count': packet_count,
            'timestamp': timestamp
        } for sender_ip, destination_ip, protocol, packet_count, timestamp in traffic_data
    ]

    conn.close()
    return country_ip_dict, traffic_data_list

@app.route('/')
def index():
    country_ip_dict, traffic_data_list = get_recent_data()
    print(country_ip_dict)
    return render_template('index.html', country_ip_dict=country_ip_dict, traffic_data_list=traffic_data_list)

if __name__ == '__main__':
    app.run(debug=True)