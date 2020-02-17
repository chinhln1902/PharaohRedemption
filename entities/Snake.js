function Snake(game, spritesheet) {
    this.animation = new Animation(spritesheet, 94.8, 85, 12, .1, 12, .5, true, .2);
    this.x = 600;
    this.y = 555;
    this.speed = 0;
    this.width = 93;
    this.height = 85; 
    this.game = game;
    this.ctx = game.ctx;
    this.live = 1; 
    this.name = "snake"; 

    var underworld = false;
    var that = this;
    document.addEventListener("keydown", function (e) {
        console.log(e);
		//Running right 
		if (e.code === "Space"){
            console.log("underworld: " + that.underworld);
            e.preventDefault();
            if (this.live === 1) {
                this.live = 0;
            } else {
                this.live = 1; 
            }
            that.underworld = !that.underworld;
        }
    });
}

Snake.prototype.draw = function () {
    if (this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
    Entity.prototype.draw.call(this);
}

Snake.prototype.update = function () {
    if (this.live === 0) return; 
    this.x += this.game.clockTick * this.speed;
    Entity.prototype.update.call(this);
}


