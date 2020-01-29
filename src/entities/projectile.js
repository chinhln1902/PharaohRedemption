function projectile(game, spritesheet) {
    this.animation = new Animation(spritesheet, 94.8, 85, 12, .1, 12, .5, true, .2);
    this.x = 600;
    this.y = 555;
    this.speed = 900;
    this.game = game;
    this.ctx = game.ctx;

    var underworld = false;
    var that = this;
    document.addEventListener("keydown", function (e) {
        console.log(e);
		//Running right 
		if (e.code === "Space"){
            console.log("underworld: " + that.underworld);
            e.preventDefault();
            that.underworld = !that.underworld;
        }
    });
}

projectile.prototype.draw = function () {
    if (this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

projectile.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (pharaoh.x > 1200) pharaoh.x = -230;
    if (pharaoh.x < -230) pharaoh.x = 1200;
    Entity.prototype.update.call(this);
}


