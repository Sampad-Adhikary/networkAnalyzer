from flask import render_template
from app import app
from app.sniff import start_sniffing, ip_country_mapping, device_user_mapping

@app.route('/')
def index():
    start_sniffing()
    print(ip_country_mapping)
    print(device_user_mapping)
    return render_template('index.html', ip_country_mapping=ip_country_mapping, device_user_mapping=device_user_mapping)
