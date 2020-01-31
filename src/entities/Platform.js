function Platform(game, platformSheet) {
    this.x = 0;
    this.y = 0;
    this.platformSheet = platformSheet;
    this.game = game;
    this.ctx = game.ctx;
}

Platform.prototype = new Entity();
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function () {
    this.ctx.drawImage(this.platformSheet, this.x, this.y, 100, 100);
}

Platform.prototype.idle = function () {
    this.state = 'idle';
}