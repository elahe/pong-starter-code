// *** Global Variables ***
const gameBoxNode = document.querySelector("#game-box");

const ballNode = document.createElement("div"); // the ball node is created
ballNode.id = "ball"; // we assign an id to the node, just for styles
gameBoxNode.append(ballNode); // we add the node to the game box

const paddleNode = document.createElement("div"); // the paddle node is created
paddleNode.id = "paddle"; // we assign an id to the node, just for styles
gameBoxNode.append(paddleNode); // we add the node to the game box

const ball = {
    x: 30,
    y: 30,
    w: 20,
    h: 20,
    isMovingRight: true,
    isMovingDown: true
}

ballNode.style.left = `${ball.x}px`
ballNode.style.top = `${ball.y}px`
ballNode.style.width = `${ball.w}px`
ballNode.style.height = `${ball.h}px`

const paddle = {
    x: 100,
    y: 530,
    w: 100,
    h: 20,
}
paddleNode.style.left = `${paddle.x}px`
paddleNode.style.top = `${paddle.y}px`
paddleNode.style.width = `${paddle.w}px`
paddleNode.style.height = `${paddle.h}px`





// *** Game Functions ***
function gameLoop(){
    ballMovement()
    ballWallCollision()
    ballPaddleCollision()
}

function ballMovement(){
    if(ball.isMovingRight){
        ball.x += 1 // for updating js
    ballNode.style.left = `${ball.x}px` // update for dom
    }else{
        ball.x -= 1 // for updating js
    ballNode.style.left = `${ball.x}px` // update for dom
    }

    if(ball.isMovingDown){
        ball.y += 1 // for updating js
    ballNode.style.top = `${ball.y}px` // update for dom
    }else{
        ball.y -= 1 // for updating js
    ballNode.style.top = `${ball.y}px` // update for dom
    }
  
    
}

function ballWallCollision(){
    //check every move
    if(ball.x + ball.w > 400){
        ball.isMovingRight = false
    }
    if(ball.y + ball.h>= 600){
        gameOver()
    }


    if(ball.x <= 0){
        ball.isMovingRight = true
    }
    if(ball.y <= 0){
        ball.isMovingDown =true
    }
}
function ballPaddleCollision(){
    if((ball.y+ ball.h) > paddle.y && ball.x > paddle.x && (ball.x+ ball.w) < (paddle.x + paddle.w)){
        ball.isMovingDown = false
    }
}

function gameOver(){
    alert("game over")
    clearInterval(gameIntervalId)
}

// *** Game Loop Interval ***

let gameIntervalId = setInterval(gameLoop,1000/60) // 60fp sec





// *** Event Listeners ***
document.addEventListener("keydown", (event) => {
    // console.log("nhdhdhhdg")
    if(event.key === "ArrowLeft"){
        paddle.x -= 40
        paddleNode.style.left = `${paddle.x}px`
    }
    if(event.key === "ArrowRight"){
        paddle.x += 40
        paddleNode.style.left = `${paddle.x}px`
    }
})



