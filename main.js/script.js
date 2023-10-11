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
    if (gameOver===true){
        return;
}
    }
    setInterval(activateTile, 1000);
    setInterval(setTimer, 1000);
    setTimeout(endGame, 10000);
   
    

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
    if (gameOver===true)
        return;
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
    if (gameOver===false){
        document.getElementById("timer").style.visibility = "visible";
    timer += 1;
    document.getElementById("timer").innerText= "TIMER: " + timer.toString() + "s";}
    if (gameOver===true){
     document.getElementById("timer").style.visibility = "hidden";
     timer=0;}
}

// Game over screen 

function endGame() {
   gameOver = true;
     if(gameOver === true){
       activeTile.innerHTML = "";
      document.getElementById("topM").innerText = "GAME OVER";
      document.getElementById("playButton").style.visibility = "visible";
      document.getElementById("playButton").addEventListener("click", reverseGame);
      document.getElementById("playButton").addEventListener("click", noButton);
      document.getElementById("playButton").addEventListener("click", resetGamestate);
      document.getElementById("playButton").addEventListener("click", resetTop);
      document.getElementById("playButton").addEventListener("click", resetScore);
     }   
    }

//reverse gameOver
function reverseGame (){
    gameOver = false;
}
//reset the score
function resetScore(){
    document.getElementById("score").innerHTML= 0;
}

//reset the title
function resetTop(){
    document.getElementById("topM").innerText = "Whack a Mole";
}

//function reset gamestate timer//
function resetGamestate(){
setTimeout(endGame, 10000)
}

//win condition
// place in endGame function
//if (score >= 400){document.createElement("h4")}

