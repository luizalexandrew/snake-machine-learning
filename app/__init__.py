from flask import Flask
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit
from app.gamesocket import GameSocket
from app.game import Game



app = Flask(__name__)
app.config.from_object('config')
socketio = SocketIO(app)

gamesocket = GameSocket(emit)
game = Game(gamesocket)
import time

@socketio.on('hello')
def handle_message(message):
    print('Hello MyBabe: ' + message)

@socketio.on('connect')
def handle_my_custom_event():
    print("*********** connect")

@socketio.on('start')
def handle_my_custom_event():
    print("*********** connect")

    game()
    
from app.controllers import default
