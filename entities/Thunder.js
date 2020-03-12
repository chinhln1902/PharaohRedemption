
Thunder.prototype = new Entity();
Thunder.prototype.constructor = Thunder;

function Thunder(game, myX, myY) {

    this.animation = new Animation(AM.getAsset("./assets/sprites/Anubis/Lightning2.png"), 590, 602, 5, .05, 5, false, .3);
    this.x = myX;
    this.y = myY;
    this.game = game;
    this.type = "projectile"; 
    this.name = "Thunder"; 
    this.ctx = game.ctx;
    this.live = 1;

}


Thunder.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
    console.log("draw thunder");
    //this.live = 0;
    Entity.prototype.draw.call(this);
}

Thunder.prototype.update = function () {
    if (this.live === 0) return;
    this.live = 0;

    //  this.x += this.game.clockTick;
    Entity.prototype.update.call(this);
}


