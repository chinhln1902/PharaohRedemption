Background.prototype = new Entity();
Background.prototype.constructor = Background;

// no inheritance
function Background(game, png, speed) {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 1200;
    this.y2 = 0;

    this.currentFrame = "x2";

    this.width = 1200;
    this.height = 780;

    this.png = png;
    this.game = game;
    this.ctx = game.ctx;
    this.speed = speed;
    this.underworld = false; 

}

Background.prototype.setSpeed = function(theSpeed){
    this.speed = theSpeed;
}

Background.prototype.draw = function () {

    this.ctx.drawImage(this.png,
            this.x1, this.y1, 1200, 780);

    this.ctx.drawImage(this.png,
                this.x2, this.y2, 1200, 780);
        
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

Background.prototype.switch = function(background){
    // this.png = background;
    // this.underworld = !this.underworld;
}
