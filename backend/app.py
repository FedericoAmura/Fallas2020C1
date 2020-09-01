from flask import Flask, request, jsonify, send_from_directory
import json
import os
import subprocess

command = 'Rscript'
test = 'rutineGenerator.R'

app = Flask(__name__, static_folder='../frontend/build')

@app.route('/routine', methods=['GET'])
def generateRutine():
    query_parameters = request.args
    sex = query_parameters.get('sex')
    goal = query_parameters.get('goal')
    weight = query_parameters.get('weight')
    height = query_parameters.get('height')

    cmd = [command, test, sex, goal, weight, height]
    x = subprocess.check_output(cmd, universal_newlines=True)
    rutine = json.loads(x)

    return jsonify(rutine)

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
