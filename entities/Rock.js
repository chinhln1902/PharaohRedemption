
Rock.prototype = new Entity();
Rock.prototype.constructor = Rock;

function Rock(game, spritesheet, startX, startY) {

    this.animation = new Animation(spritesheet, 64, 64, 1, .05, 1, true, .7);
    this.speed = -500;
    this.x = startX;
    this.y = startY;
    this.live = 1; 
    this.game = game;
    this.type = "projectile"; 
    this.name = "rock"; 
    this.ctx = game.ctx;
    this.timeAlive = 0;
    this.underworld = false;
    var that = this;
    document.addEventListener("keyup", function (e) {
		if (e.code === "Space"){
            //console.log("Rock before switch underworld: " + that.underworld);
            e.preventDefault();
            that.swapWorld();
        }

    });
}


Rock.prototype.draw = function () {
    if(this.underworld) return; 
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
    Entity.prototype.draw.call(this);
}

Rock.prototype.update = function () {
    if (this.live === 0) return;
    if (this.timeAlive > 20) {
        this.speed = 0;
        this.removeFromWorld = true; 
    }
    this.x += this.game.clockTick * this.speed;
    Entity.prototype.update.call(this);
    this.timeAlive ++;
}


Rock.prototype.swapWorld = function(){
    if (this.live === 0) {
        this.live = 1;
    } else {
        this.live = 0; 
    }
   this.underworld = !this.underworld;
}
