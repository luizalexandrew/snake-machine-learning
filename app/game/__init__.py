from flask_socketio import SocketIO, send, emit
import random

class Game:

    def __init__(self, gamesocket):
        self.gamesocket = gamesocket 
        self.state = {} 

    def startGame(self):
        self.state = {
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
            },
            "point": 0
        }

    def send(self):
        self.gamesocket(self.state) 

    def start(self):
        self.startGame()
        self.send()
