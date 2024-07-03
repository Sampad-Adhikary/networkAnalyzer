import sqlite3
from datetime import datetime, timedelta

# Establish a connection to the database
conn = sqlite3.connect('network_activity4.db')
cursor = conn.cursor()

# Function to update the flag to "Unsafe" for a specific entry
def update_flag_to_unsafe():
    try:
        cursor.execute('''
            UPDATE traffic_data
            SET flag = 'Unsafe'
            WHERE port == 80
        ''',)

        # Commit the transaction
        conn.commit()

        if cursor.rowcount > 0:
            print("Update successful.")
        else:
            print("No matching rows found.")

    except sqlite3.Error as e:
        print(f"An error occurred: {e}")
    finally:
        cursor.close()
        conn.close()

# Call the function to update the flag
update_flag_to_unsafe()
