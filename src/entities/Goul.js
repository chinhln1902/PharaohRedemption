function Goul(game, spritesheet) {
    this.animation = new Animation(spritesheet, 713, 842, 10, 0.1, 10, true, .3); //walking animation
    this.x = 100;
    this.y = 350;
    this.speed = 0;
    this.game = game;
    this.ctx = game.ctx;
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
Goul.prototype.draw = function () {
    if (!this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

Goul.prototype.update = function () {
    var that = this;

    this.x += 2; //for walking
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x += this.game.clockTick * this.speed;
}
Goul.prototype.swapWorld = function(){
    this.underworld = !this.underworld;
}
// Goul.prototype.die = function () {
//     this.animation = new Animation(spritesheet['dying'], 852, 872, 10, 0.08, 10, true, .3);
//     this.x = 0;
//     this.y = 350;
//     //this.speed = 0;

// }