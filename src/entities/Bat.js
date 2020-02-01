function Bat(game, spritesheet) {
    this.animation = new Animation(spritesheet, 631, 634, 10, 0.07, 10, true, .34);
    this.x = 1000;
    this.y = 360;
    this.speed = 0;
    this.game = game;
    this.ctx = game.ctx;
    this.name = "bat"; 
    this.underworld = false;
    var that = this;

    document.addEventListener("keydown", function (e) {
        console.log(e);
		//Running right 
		if (e.code === "Space"){
            console.log("underworld: " + that.underworld);
            e.preventDefault();
            that.swapWorld();
            // if (that.underworld){
                
            //     that.switch(AM.getAsset("./../assets/backgrounds/egypt.png"));
            // } else {
            //     that.switch(AM.getAsset("./../assets/backgrounds/underworld.png"));
            // }
            
        }
    });
}


Bat.prototype.draw = function () {
    if (!this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

Bat.prototype.update = function () {
    var that = this;
    this.x -= 3;
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x += this.game.clockTick * this.speed;
    
    //if (this.x > 800) this.x = -230;
}

Bat.prototype.swapWorld = function(){
    this.underworld = !this.underworld;
}