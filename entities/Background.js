Background.prototype = new Entity();
Background.prototype.constructor = Background;

// no inheritance
function Background(game, png1, png2, speed) {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 1200;
    this.y2 = 0;

    this.currentFrame = "x2";

    this.width = 1200;
    this.height = 780;

    this.png1 = png1;
    this.png2 = png2;

    this.currentPng = png1;

    this.game = game;
    this.ctx = game.ctx;
    this.speed = speed;
    this.underworld = false; 

}

Background.prototype.setSpeed = function(theSpeed){
    this.speed = theSpeed;
}

Background.prototype.draw = function () {

    // if (this.underworld === true){
    //     console.log("Switch underworld");

    //     this.ctx.drawImage(this.pngUnderworld,
    //         this.x1, this.y1, 1200, 780);

    //     this.ctx.drawImage(this.pngUnderworld,
    //             this.x2, this.y2, 1200, 780);

    // } else {
        console.log("Current png: " + this.currentPng);

        this.ctx.drawImage(this.currentPng,
            this.x1, this.y1, 1200, 780);

        this.ctx.drawImage(this.currentPng,
                this.x2, this.y2, 1200, 780);

//    }        
}

Background.prototype.update = function () {

    this.x1 += (this.speed);   
    this.x2 += (this.speed);   

    if(this.game.getMainCharacter().getDirection() === 'right'){
        if (this.game.getMainCharacter().getX() + 650 >= this.x1 + this.width + this.game.getCamera().getX()){  
            this.x2 = this.x1 + this.width;
        }    
        if (this.game.getMainCharacter().getX() + 650 >= this.x2 + this.width + this.game.getCamera().getX()){
            this.x1 = this.x2 + this.width;
        } 

    } else {

        if (this.game.getMainCharacter().getX() + 650 <= this.x1 + this.width + this.game.getCamera().getX()){  
            this.x2 = this.x1 - this.width;
        }
        
        if (this.game.getMainCharacter().getX() + 650 <= this.x2 + this.width + this.game.getCamera().getX()){
            this.x1 = this.x2 - this.width;
        }      
    }
}

Background.prototype.switch = function(){
   // this.png = background;
    this.underworld = !this.underworld;
    if(this.underworld){
        this.currentPng = this.png2;
    } else {
        this.currentPng = this.png1;
    }
    console.log("Underworld value: " + this.underworld);

}
