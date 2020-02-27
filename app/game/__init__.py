from flask_socketio import SocketIO, send, emit
import random



class Game:

    def __init__(self, emit):
        self.emit = emit

    def send(self):
        self.emit('update-screen', {
            "width": 100, 
            "height": 100, 
            "pixelsPerFields": 5,
            "player": {
                "name": 'teste',
                "x": random.randint(0,34),
                "y": random.randint(0,34),
                "color": '#0D47A1'
            },
            "fruit": {
                "x": random.randint(0,34),
                "y": random.randint(0,34)
            }
        })
