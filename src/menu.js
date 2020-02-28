console.log("connected to the menu");

var menu = document.getElementById("menu");
var canvas = document.getElementById("gameWorld");
var hints = document.getElementById("msg");
var playBtn = document.getElementById("playBtn");
var settBtn = document.getElementById("settBtn");
var infoBtn = document.getElementById("infoBtn");
var exitBtn = document.getElementById("exitBtn");
var backBtn = document.getElementById("backBtn");


function animateButtons(){
    var btns = document.querySelectorAll("button");
    btns.forEach(button => {
        button.addEventListener("mouseenter", function(){
            this.style.filter = "brightness(85%)";
        });
        button.addEventListener("mouseleave", function(){
            this.style.filter = "brightness(100%)";
        });
        button.addEventListener("mousedown", function(){
            this.style.filter = "brightness(70%)";
        });
        button.addEventListener("mouseup", function(){
            this.style.filter = "brightness(85%)";
        });
    })
}

hideGame = function(){
    canvas.style.display = "none";
    hints.style.display = "none";
}
hideGame();
showGame = function(){
    canvas.style.display = "inline-block";
    hints.style.display = "block";
}

hideAll = function() {
    menu.style.display = "none";
}
showAll = function(){
    menu.style.display = "inline-block"
}

hideMain = function() {
    var buttons = document.querySelectorAll(".main");
    buttons.forEach(button => {
        button.style.display = "none";
    })
}
showMain = function(){
    var buttons = document.querySelectorAll(".main");
    buttons.forEach(button => {
        button.style.display = "block";
    })
    backBtn.style.display = "none";
    hideInfo();
}

hideInfo = function() {
    var buttons = document.querySelectorAll(".info");
    buttons.forEach(button => {
        button.style.display = "none";
    })
}
showInfo = function(){
    var buttons = document.querySelectorAll(".info");
    buttons.forEach(button => {
        button.style.display = "block";
    })
    backBtn.style.display = "inline-block";
    hideMain();
}

playGame = function(){
    console.log("pressed play button");
    hideAll();
    showGame();
    playLevel1();
}



function start(){
    animateButtons();
    playBtn.addEventListener('click', playGame);
    exitBtn.addEventListener('click', function(){window.location.href = 'https://google.com'});
    infoBtn.addEventListener('click', showInfo);
    backBtn.addEventListener('click', showMain);
    showMain();
}
start();