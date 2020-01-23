function Snake(game, spritesheet) {
    this.animation = new Animation(spritesheet, 94.8, 85, 12, .1, 12, .5, true, .2);
    this.x = 600;
    this.y = 580;
    this.speed = 0;
    this.game = game;
    this.ctx = game.ctx;
}

Snake.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

Snake.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    Entity.prototype.update.call(this);
}


