function Platform(game, sprite, x, y, width, height) {
    this.x = x * 100;
    this.y = y * 100 + 40;
    this.width = width;
    this.height = height;
    this.platformSheet = sprite;
    this.game = game;
    this.ctx = game.ctx;
    this.live = 1; 
    this.boundingBox = new BoundingBox(x * 100, y * 100 + 40, width, height);
    this.game.addEntity(this);
}

Platform.prototype = new Entity();
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function () {
    // this.boundingBox = new BoundingBox (this.x, this.y, this.width, this.height);
    this.ctx.strokeRect(this.boundingBox.x - this.game.getCamera().getX(), this.boundingBox.y, this.boundingBox.width, this.boundingBox.height);
    this.ctx.drawImage(this.platformSheet , this.x - this.game.getCamera().getX(), this.y, this.width, this.height);
}

Platform.prototype.idle = function () {
    this.state = 'idle';
}