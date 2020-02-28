console.log("connected to the menu");
var menu = document.getElementById("menu");
var canvas = document.getElementById("gameWorld");
var hints = document.getElementById("msg");
var playBtn = document.getElementById("playBtn");
var settBtn = document.getElementById("settBtn");
var infoBtn = document.getElementById("infoBtn");
var exitBtn = document.getElementById("exitBtn");

hideGame = function(){
    canvas.style.display = "none";
    hints.style.display = "none";
}
hideGame();

hideMenu = function() {
    menu.style.display = "none";
}

showGame = function(){
    canvas.style.display = "inline-block";
    hints.style.display = "block";
}

showMenu = function(){
    menu.style.display = "inline-block"
}

playGame = function(){
    console.log("pressed play button");
    hideMenu();
    showGame();
}

playBtn.addEventListener('click', playGame);
playBtn.addEventListener('mouseover', function(){
    console.log("mouse is over");
})