from flask import Flask
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit
from app.game import Game

app = Flask(__name__)
app.config.from_object('config')
socketio = SocketIO(app)

myGame = Game(emit)


@socketio.on('hello')
def handle_message(message):
    print('Hello MyBabe: ' + message)

@socketio.on('connect')
def handle_my_custom_event():
    print('received json: ')


@socketio.on('start')
def handle_my_custom_event(teste):
    myGame.send()



from app.controllers import default
