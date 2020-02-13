function Platform(game, sprite, x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.platformSheet = sprite;
    this.game = game;
    this.ctx = game.ctx;
    this.game.addEntity(this);
}

Platform.prototype = new Entity();
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function () {
    this.ctx.drawImage(this.platformSheet, this.x, this.y, this.width, this.height);
}

Platform.prototype.idle = function () {
    this.state = 'idle';
}