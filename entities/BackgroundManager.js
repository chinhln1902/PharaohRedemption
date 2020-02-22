
var desertBackground = [];
var underworldBackground = [];

//Class to load all background and control world switching
function BackgroundManager(AM, game) {

    var that = this;
    this.AM= AM;
    this.game = game;
    this.ctx = game.ctx;
    this.underworld = false;
    var BACKGROUND_SPEED = 3;
    var NEG_BACKGROUND_SPEED = -3;

    //Right and left flags
    var RightKeyPressed = "false";
    var LeftKeyPressed = "false";
    var SpacePressed = "false";

    this.loadDesert();

    document.addEventListener("keydown", function (e) {
        //Running right ArrowRight
        
        if (e.code === "ArrowRight" && RightKeyPressed === "false"){
            that.defaultNegativeSpeed();
            RightKeyPressed = "true";

        } 
         if (e.code === "ArrowLeft" && LeftKeyPressed === "false"){
            that.defaultSpeed();
            LeftKeyPressed = "true";

        }
		if (e.code === "Space" && SpacePressed === "false"){
            e.preventDefault();
            that.removeBackground();
            SpacePressed === "true";
        }
    }, false);


    document.addEventListener("keyup", function (e) {
        //Running right 
        if (e.code === "ArrowRight" && RightKeyPressed === "true"){
            that.stopSpeed();
            RightKeyPressed = "false";

        }
         if (e.code === "ArrowLeft" && LeftKeyPressed === "true"){
            that.stopSpeed();
            LeftKeyPressed = "false";

        }
		 if (e.code === "Space" && SpacePressed === "true"){
            e.preventDefault();
            SpacePressed === "false"
            
        }
    }, false);
}

BackgroundManager.prototype.constructor = BackgroundManager;
BackgroundManager.prototype.stopSpeed = function(){
 
    for(var i = 0; i < desertBackground.length; i++){
        desertBackground[i].setSpeed(0);
    }
}

//change movement to deafult speed 
BackgroundManager.prototype.defaultSpeed = function(){

    for(var i = 0; i < desertBackground.length; i++){
        desertBackground[i].setSpeed(i/2);
    }
}

//change movement to deafult speed 
BackgroundManager.prototype.defaultNegativeSpeed = function(){

    for(var i = 0; i < desertBackground.length; i++){
        desertBackground[i].setSpeed(-(i/2));
        console.log((-(i/2)));
    }
}

//maybe function change entity? 
BackgroundManager.prototype.loadDesert = function(){

    ///Add both pngs to background
    desertBackground[0] = new Background(this.game, AM.getAsset("./assets/backgrounds/Desert Layers/1.png"), 
                                                    AM.getAsset("./assets/backgrounds/Underworld Layers/1.png"), 0);
   
    desertBackground[1] = new Background(this.game, AM.getAsset("./assets/backgrounds/Desert Layers/2.png"),
                                                    AM.getAsset("./assets/backgrounds/Underworld Layers/2.png"), 0);

    desertBackground[2] = new Background(this.game, AM.getAsset("./assets/backgrounds/Desert Layers/3.png"),
                                                    AM.getAsset("./assets/backgrounds/Underworld Layers/3.png"), 0);

    desertBackground[3] = new Background(this.game, AM.getAsset("./assets/backgrounds/Desert Layers/4.png"),
                                                    AM.getAsset("./assets/backgrounds/Underworld Layers/4.png"), 0);

    desertBackground[4] = new Background(this.game, AM.getAsset("./assets/backgrounds/Desert Layers/5.png"),
                                                    AM.getAsset("./assets/backgrounds/Underworld Layers/5.png"), 0);

    desertBackground[5] = new Background(this.game, AM.getAsset("./assets/backgrounds/Desert Layers/6.png"),
                                                    AM.getAsset("./assets/backgrounds/Underworld Layers/6.png"), 0);

    desertBackground[6] = new Background(this.game, AM.getAsset("./assets/backgrounds/Desert Layers/7.png"),
                                                    AM.getAsset("./assets/backgrounds/Underworld Layers/7.png"), 0);

    for(var i = 0; i < desertBackground.length; i++){
        this.game.addEntity(desertBackground[i]);

    }
}


BackgroundManager.prototype.removeBackground = function(){
    desertBackground[0].switch();
    desertBackground[1].switch();
    desertBackground[2].switch();
    desertBackground[3].switch();
    desertBackground[4].switch();
    desertBackground[5].switch();
    desertBackground[6].switch();


}
