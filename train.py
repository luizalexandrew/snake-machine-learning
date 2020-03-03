from gamesample import getState

if(__name__ == '__main__'):
    teste = getState()
    print(teste.get('x'))
    print(teste.get('y'))
    print(teste.get('game')[teste.get('y')][teste.get('x')])


    


