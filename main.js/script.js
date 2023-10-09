//Variable
let activeTile;
let score = 0;
let gameOver = false;
let timer = 0 ;


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

    setInterval(activateTile, 2000);
    setInterval(setTimer, 1000);
}

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
    mole.src = "https://imgur.com/CDB6mFC.jpg";
    

    let num = randomTile();
    activeTile = document.getElementById(num);
    activeTile.appendChild(mole);
}   

function clickedTile(){
    if (this === activeTile){
        score += 10;
        document.getElementById("score").innerHTML=score.toString();
    }
}

function setTimer(){
    timer += 1;
    document.getElementById("timer").innerText= "TIMER: " + timer.toString() + "s";
}
//
/*function missClick(){
    let missedClick = document.querySelector(onclick)
    if {onclick }*/