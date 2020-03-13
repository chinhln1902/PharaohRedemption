
Thunder.prototype = new Entity();
Thunder.prototype.constructor = Thunder;

function Thunder(pharaoh, game, myX, myY) {

    this.animation = new Animation(AM.getAsset("./assets/sprites/Anubis/Lightning2.png"), 590, 602, 5, .05, 5, false, .3);
    this.x = myX;
    this.y = myY;
    this.game = game;
    this.type = "projectile"; 
    this.name = "Thunder"; 
    this.ctx = game.ctx;
    this.live = 1;
    this.pharaoh = pharaoh
    this.timeAlive = 0;

}

Thunder.prototype.draw = function () {
    if (this.timeAlive > 5){
        this.animation.drawFrame(this.game.clockTick, this.ctx, this.pharaoh.x -10, this.pharaoh.y);
        Entity.prototype.draw.call(this);

    }   
}

Thunder.prototype.update = function () {
    if (this.timeAlive > 10) {
        this.removeFromWorld = true; 
    }
    if (this.timeAlive > 5){
        this.x += this.game.clockTick * this.speed;
        Entity.prototype.update.call(this);
    }

    this.timeAlive ++;
}


