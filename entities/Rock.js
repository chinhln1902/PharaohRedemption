
Rock.prototype = new Entity();
Rock.prototype.constructor = Rock;

function Rock(game, spritesheet, startX, startY) {

    this.animation = new Animation(spritesheet, 64, 64, 1, .05, 1, true, .7);
    this.speed = -500;
    this.x = startX;
    this.y = startY;
    this.live = 1; 
    this.game = game;
    this.ctx = game.ctx;
    this.timeAlive = 0;

    // document.addEventListener("keydown", function (e) {
    //     console.log(e);
	// 	//Running right 
	// 	if (e.code === "Space"){
    //         console.log("underworld: " + that.underworld);
    //         e.preventDefault();
    //         that.underworld = !that.underworld;
    //     }
    // });
    console.log("rock");
}


Rock.prototype.draw = function () {
    // this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

Rock.prototype.update = function () {
    if (this.timeAlive > 35) {
        this.speed = 0;
        this.removeFromWorld = true; 
    }
    this.x += this.game.clockTick * this.speed;
    //this.y += .5;
    Entity.prototype.update.call(this);
    //console.log("this position: " + this.x);
    this.timeAlive ++;
}


