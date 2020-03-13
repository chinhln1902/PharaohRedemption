console.log("connected to the menu");

//html elements, mostly buttons
var menu = document.getElementById("menu");
var canvas = document.getElementById("gameWorld");
var hints = document.getElementById("msg");
var playBtn = document.getElementById("playBtn");
var settBtn = document.getElementById("settBtn");
var infoBtn = document.getElementById("infoBtn");
var exitBtn = document.getElementById("exitBtn");
var helpBtn = document.getElementById("helpBtn");
var contBtn = document.getElementById("contBtn");
var credBtn = document.getElementById("credBtn");
var stryBtn = document.getElementById("stryBtn");
var backBtn = document.getElementById("backBtn");

//adds interaction anumations to the buttons
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
// displays the game canvas
hideGame = function(){
    canvas.style.display = "none";
    hints.style.display = "none";
}
showGame = function(){
    canvas.style.display = "inline-block";
    hints.style.display = "block";
}

// hides/shows all menus
hideAll = function() {
    menu.style.display = "none";
}
showAll = function(){
    menu.style.display = "inline-block"
}

// hides/shows the main menu
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
    hideLvls();
    hideSett();
}

// hides/shows the info menu
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
    hideLvls();
    hideSett();
}

// hides/shows the settings menu
hideSett = function() {
    var buttons = document.querySelectorAll(".sett");
    buttons.forEach(button => {
        button.style.display = "none";
    })
}
showSett = function(){
    var buttons = document.querySelectorAll(".sett");
    buttons.forEach(button => {
        button.style.display = "block";
    })
    backBtn.style.display = "inline-block";
    hideMain();
    hideLvls();
    hideInfo();
}

// hides/shows the level selector menu
hideLvls = function() {
    var buttons = document.querySelectorAll(".levels");
    buttons.forEach(button => { 
        button.style.display = "none";
        //button.disabled = true;
    })
}
showLvls = function(){
    var buttons = document.querySelectorAll(".levels");
    buttons.forEach(button => {
        button.style.display = "block";
    })
    backBtn.style.display = "inline-block";
    hideMain();
    hideInfo();
    hideSett();
}

// displays the game and hides the menu
playGame = function(){
    var buttons = document.querySelectorAll(".levels");
    buttons.forEach(button => {
        button.disabled = true;
    })
    console.log("pressed play button");
    hideAll();
    showGame();
}

// quits the game (for now it just sends you to google)
quitGame = function(){
    console.log("thanks for playing!");
    hideAll();
    hideGame();
    window.location.href = 'https://google.com';
}

// links the level buttons with the game levels
createLevelBtns = function(){
    var functions = [ //js is dumb :p
        function(){loadLevel(1); playGame()},
        function(){loadLevel(2); playGame()},
        function(){loadLevel(3); playGame()},
        function(){loadLevel(4); playGame()}
    ];
    var lvlBtns = document.querySelectorAll(".levels");
    for (var i=0; i<lvlBtns.length; i++){
        lvlBtns[i].addEventListener('click', functions[i]);
    }
}

// initializes 
function start(){
    hideGame();
    animateButtons();
    playBtn.addEventListener('click', showLvls);
    exitBtn.addEventListener('click', quitGame);
    infoBtn.addEventListener('click', showInfo);
    backBtn.addEventListener('click', showMain);
    settBtn.addEventListener('click', showSett);
    stryBtn.onclick = function(){window.location.href = './menu/story.html'};
    contBtn.onclick = function(){window.location.href = './menu/controls.html'};
    helpBtn.onclick = function(){window.location.href = './menu/help.html'};
    credBtn.onclick = function(){window.location.href = './menu/credits.html'};
    createLevelBtns();
    showMain();
}
start();