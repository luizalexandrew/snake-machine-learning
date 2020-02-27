
const screen = document.getElementById('screen')


let game = {
    width: 35, 
    height: 35, 
    pixelsPerFields: 5,
    player: {
        name: 'teste',
        x: 5,
        y: 5,
        color: '#0D47A1'
    },
    fruit: {
        x: 15,
        y: 15
    }
}

setupScreen(screen, game)























let count = 0

const socket = io()




socket.on('connect', () => {


    socket.emit('start')
    



    // const playerId = socket.id
    // // console.log(`Player connected on Client with id: ${playerId}`)
    // // console.log('socket', socket)

    // const screen = document.getElementById('screen')
    // const scoreTable = document.getElementById('score-table')
    
    // setupScreen(screen, game)
    // renderScreen(screen, scoreTable, game, requestAnimationFrame, playerId)
})

socket.on('disconnect', () => {

    console.log("Saindo manoooww")

    // console.log('Unsubscribing All')
    // keyboardListener.unsubscribeAll();
})

socket.on('update-screen', (data) => {
    renderScreen(screen, data)
})

// socket.on('setup', (state) => {
//     const playerId = socket.id
//     game.setState(state)

//     keyboardListener.registerPlayerId(playerId)
//     keyboardListener.subscribe(game.movePlayer)
//     keyboardListener.subscribe((command) => {
//         socket.emit('move-player', command)
//     })
// })

// socket.on('add-player', (command) => {
//     // console.log(`Receiving ${command.type} -> ${command.playerId}`)
//     game.addPlayer(command)
// })

// socket.on('remove-player', (command) => {
//     // console.log(`Receiving ${command.type} -> ${command.playerId}`)
//     game.removePlayer(command)
// })

// socket.on('move-player', (command) => {
//     // console.log(`Receiving ${command.type} -> ${command.playerId}`)

//     const playerId = socket.id

//     if (playerId !== command.playerId) {
//         game.movePlayer(command)
//     }
// })

// socket.on('add-fruit', (command) => {
//     // console.log(`Receiving ${command.type} -> ${command.fruitId}`)
//     game.addFruit(command)
// })

// socket.on('remove-fruit', (command) => {
//     // console.log(`Receiving ${command.type} -> ${command.fruitId}`)
//     game.removeFruit(command)
// })