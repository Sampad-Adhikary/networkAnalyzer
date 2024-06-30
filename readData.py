import sqlite3
from prettytable import PrettyTable

# Database connection
conn = sqlite3.connect('network_activity4.db')
cursor = conn.cursor()

def fetch_and_display_data():
    # Fetch destination data
    cursor.execute('SELECT destination_ip, protocol, country, timestamp FROM destination_data')
    destination_data = cursor.fetchall()

    # Fetch traffic data
    cursor.execute('SELECT sender_ip, destination_ip, protocol, port, application_protocol, timestamp, flag FROM traffic_data')
    traffic_data = cursor.fetchall()

    # Fetch devices data
    cursor.execute('SELECT device_ip, mac_address, hostname, last_seen FROM devices')
    devices_data = cursor.fetchall()

    # Display destination data
    print("Destination Data")
    destination_table = PrettyTable(['Destination IP', 'Protocol', 'Country', 'Timestamp'])
    for row in destination_data:
        destination_table.add_row(row)
    print(destination_table)

    # Display traffic data
    print("\nTraffic Data")
    traffic_table = PrettyTable(['sender_ip', 'destination_ip', 'protocol', 'port', 'application_protocol', 'timestamp', 'flag'])
    for row in traffic_data:
        traffic_table.add_row(row)
    print(traffic_table)

    # Display devices data
    print("\nDevices Data")
    devices_table = PrettyTable(['Device IP', 'MAC Address', 'Hostname', 'Last Seen'])
    for row in devices_data:
        devices_table.add_row(row)
    print(devices_table)

fetch_and_display_data()

# Close the database connection
conn.close()
