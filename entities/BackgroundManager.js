
var desertBackground = [];
var underworldBackground = [];

//Class to load all background and control world switching
function BackgroundManager(AM, game) {

    var that = this;
    this.AM= AM;
    this.game = game;
    this.ctx = game.ctx;
    this.underworld = false;
    this.level4 = false;

    var BACKGROUND_SPEED = 3;
    var NEG_BACKGROUND_SPEED = -3;

    //Right and left flags
    var RightKeyPressed = "false";
    var LeftKeyPressed = "false";
    var SpacePressed = "false";
    var AKeyPressed = "false";
    var DKeyPressed = "false";

    this.loadDesert();

    document.addEventListener("keydown", function (e) {
        //Running right ArrowRight
    if (!this.level4){   
		if ((e.code === "ArrowRight" && RightKeyPressed === "false") || (e.code === "KeyD" && DKeyPressed === "false" && AKeyPressed === "false")){
            that.defaultNegativeSpeed();
            RightKeyPressed = "true";
			DKeyPressed = "true";

        } 
        if((e.code === "ArrowLeft" && LeftKeyPressed === "false") || (e.code === "KeyA" && DKeyPressed === "false" && AKeyPressed === "false")){

            that.defaultSpeed();
            LeftKeyPressed = "true";
			AKeyPressed = "true";

        }
        if (e.code === "Space" && isSwitchable && !this.spaceDown){
            e.preventDefault();
            that.removeBackground();
            SpacePressed === "false"
            this.spaceDown = true;
        }

    }}, false);


    document.addEventListener("keyup", function (e) {
        //Running right 
        if ((e.code === "ArrowRight" && RightKeyPressed === "true") || (e.code === "KeyD" && DKeyPressed === "true")){
            
            RightKeyPressed = "false";
            DKeyPressed = "false"

        }
        if((e.code === "ArrowLeft" && LeftKeyPressed === "true") || (e.code === "KeyA" && AKeyPressed === "true")){            
            
            LeftKeyPressed = "false";
            AKeyPressed = "false";

        }
		 if (e.code === "Space"){
            this.spaceDown = false;
            
        }
        if (LeftKeyPressed === "false" && RightKeyPressed === "false"){
            that.stopSpeed();
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
    if (this.level4 === false) {
        for(var i = 0; i < desertBackground.length; i++){
            desertBackground[i].setSpeed(i/1.2);
        }
    }

}

//change movement to deafult speed 
BackgroundManager.prototype.defaultNegativeSpeed = function(){
    if (this.level4 === false) {
        for(var i = 0; i < desertBackground.length; i++){
            desertBackground[i].setSpeed(-(i/1.2));
            //console.log((-(i/2)));
        }
    }
}
//
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
