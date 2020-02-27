from flask_socketio import SocketIO, send, emit
from app.game.state import GameState
import json

class Game:

    def __init__(self, gamesocket):
        self.gamesocket = gamesocket 
        self.state = None
        self.started = False 

    def startGame(self):
        self.state = GameState()
        self.started = True
        self.run()

    def send(self):
        self.gamesocket(json.dumps(self.state.__dict__)) 

    def __call__(self):
        if(self.started):
            self.run()
        else:
            self.startGame()
            self.run()

    def run(self):
        self.state.x += 1 
        self.send()
       

        