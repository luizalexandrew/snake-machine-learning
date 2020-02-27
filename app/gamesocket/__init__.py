from flask_socketio import SocketIO, send, emit

class GameSocket:

    def __init__(self, emit):
        self.emit = emit 

    def __call__(self, data):
        self.send(data)

    def send(self, data):
        self.emit('update-screen', data)
