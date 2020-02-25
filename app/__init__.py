from flask import Flask
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit


app = Flask(__name__)
app.config.from_object('config')
socketio = SocketIO(app)

@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)

@socketio.on('connect')
def handle_my_custom_event():
    print('received json: ')

from app.controllers import default
