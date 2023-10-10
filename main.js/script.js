//Variable
let activeTile;
let score = 0;
let gameOver = false;
let timer = 0 ;
// win condition after testing 400pts.

//render board
window.onload = function() {
    renderGame();   
}
function renderGame(){
    for (let i = 0; i < 9; i++){
    let tile = document.createElement("div");
    tile.id = i.toString();
    document.getElementById("gameboard").appendChild(tile);
    tile.addEventListener("click", clickedTile);
    
    }

    setInterval(activateTile, 1000);
    setInterval(setTimer, 1000);
    setTimeout(endGame, 12000);
}

//Hides button
function noButton(){if (gameOver === false){
    document.getElementById("playButton").style.visibility= 'hidden';
}}
noButton();

//randomly choose tile
function randomTile(){
    let num = Math.floor(Math.random() * 9)
    return num.toString();
}

//place mole on randomly chosen tile
function activateTile() {

    if (activeTile) {
    activeTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "https://imgur.com/Zx1QMtQ.png";
    

    let num = randomTile();
    activeTile = document.getElementById(num);
    activeTile.appendChild(mole);
}   

//generate points when mole clicked, lose points if you miss
function clickedTile(){
    if (this === activeTile){
        score += 10;
        document.getElementById("score").innerHTML=score.toString();
    }
    else {
        score -= 10;
        document.getElementById("score").innerHTML=score.toString();
    }
}

//display timer on screen
function setTimer(){
    timer += 1;
    document.getElementById("timer").innerText= "TIMER: " + timer.toString() + "s";
}

// Game over screen 

function endGame() {
   document.querySelector(gameOver)!= gameOver;
     if(gameOver === "true"){
      document.getElementById("playButton").style.visibility = "visible";
      document.getElementById("playButton").addEventListener("click", renderGame());
      document.getElementById("timer").innerText = 0; 
      document.getElementById("score").innerText = 0;
     }   
    }

//win condition


