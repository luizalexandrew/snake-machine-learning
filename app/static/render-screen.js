function setupScreen(canvas, game) {
    const {width, height, pixelsPerFields } = game
    canvas.width = width * pixelsPerFields
    canvas.height = height * pixelsPerFields
}

function renderScreen(screen, game) {
    
    const context = screen.getContext('2d')
    context.fillStyle = 'white'
    const { width, height, pixelsPerFields } = game
    context.clearRect(0, 0, width * pixelsPerFields, height * pixelsPerFields)

    drawPlayer(context, game.player, game)
    drawFruit(context, game.fruit, game)        

    // requestAnimationFrame(() => {
    //     renderScreen(screen, game)
    // })
}

function drawPlayer(screenContext, player, game) {
    const { pixelsPerFields } = game

    let eyeAndMouthColors = '#FFFFFF'
   
    let { x, y } = player
    x *= pixelsPerFields
    y *= pixelsPerFields

    // Draw face
    screenContext.fillStyle = player.color
    screenContext.fillRect(x, y, pixelsPerFields, pixelsPerFields)

    // Draw eyes and mouth
    screenContext.fillStyle = eyeAndMouthColors
    screenContext.fillRect(x+1,y+1,1,1)
    screenContext.fillRect(x+3,y+1,1,1)
    screenContext.fillRect(x+1,y+3,3,1)

    screenContext.fillRect(x+1,y+1,1,1)
    screenContext.fillRect(x+3,y+1,1,1)
    screenContext.fillRect(x+1,y+3,3,1)
}

function drawFruit(screenContext, fruit, game) {
    const {pixelsPerFields} = game
    screenContext.globalAlpha = 1
    
    let { x, y } = fruit
    x *= pixelsPerFields
    y *= pixelsPerFields
    
    // Draw strawberry body
    screenContext.fillStyle = '#ff0000'
    screenContext.fillRect(x, y+1, 1, 2)
    screenContext.fillRect(x+4, y+1, 1, 2)
    screenContext.fillRect(x+1, y+1, 1, 3)
    screenContext.fillRect(x+3, y+1, 1, 3)
    screenContext.fillRect(x+2, y+2, 1, 3)
 
    // Draw green leaf
    screenContext.fillStyle = '#00a933'
    screenContext.fillRect(x+1,y,3,1)
    screenContext.fillRect(x+2,y+1,1,1)
    
}


