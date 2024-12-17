from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app)

@app.route('/api/stations-data', methods=['GET'])
def get_external_data():
    url = 'https://gbfs.bcycle.com/bcycle_madison/station_status.json'
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        stations = data.get('data', {}).get('stations', [])
        return jsonify(stations), 200
    else:
        return jsonify({'error': 'Failed to retrieve data'}), response.status_code

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
