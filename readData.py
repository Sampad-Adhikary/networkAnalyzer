import sqlite3
from prettytable import PrettyTable

# Database connection
conn = sqlite3.connect('network_activity.db')
cursor = conn.cursor()

def fetch_and_display_data():
    # Fetch destination data
    cursor.execute('SELECT destination_ip, protocol, country, timestamp FROM destination_data')
    destination_data = cursor.fetchall()

    # Fetch traffic data
    cursor.execute('SELECT sender_ip, destination_ip, protocol, packet_count, timestamp FROM traffic_data')
    traffic_data = cursor.fetchall()

    # Display destination data
    print("Destination Data")
    destination_table = PrettyTable(['Destination IP', 'Protocol', 'Country', 'Timestamp'])
    for row in destination_data:
        destination_table.add_row(row)
    print(destination_table)

    # Display traffic data
    print("\nTraffic Data")
    traffic_table = PrettyTable(['Sender IP', 'Destination IP', 'Protocol', 'Packet Count', 'Timestamp'])
    for row in traffic_data:
        traffic_table.add_row(row)
    print(traffic_table)

fetch_and_display_data()

# Close the database connection
conn.close()
