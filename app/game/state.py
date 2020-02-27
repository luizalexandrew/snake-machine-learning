from flask_socketio import SocketIO, send, emit
import random

class GameState:

    def __init__(self):
        self.width = 100
        self.height = 100
        self.pixelsPerFields = 5
        self.name = 'teste'
        self.x = random.randint(0,34)
        self.y = random.randint(0,34)
        self.color = '#0D47A1'
        self.fx = random.randint(0,34)
        self.fy = random.randint(0,34)
        self.point = 0
        self.speed = 1
       

   