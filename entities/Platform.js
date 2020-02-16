function Platform(game, sprite, x, y) {
    this.x = x * 100;
    this.y = y * 100 + 40;
    this.width = 100;
    this.height = 100;
    this.platformSheet = sprite;
    this.game = game;
    this.ctx = game.ctx;
    this.boundingBox = new BoundingBox(x * 100, y * 100 + 40, this.width, this.height);
    this.game.addEntity(this);
}

Platform.prototype = new Entity();
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function () {
    // this.boundingBox = new BoundingBox (this.x, this.y, this.width, this.height);
    this.ctx.strokeRect(this.boundingBox.x, this.boundingBox.y, this.boundingBox.width, this.boundingBox.height);
    this.ctx.drawImage(this.platformSheet, this.x, this.y, this.width, this.height);
}

Platform.prototype.idle = function () {
    this.state = 'idle';
}