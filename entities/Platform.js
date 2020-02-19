function Platform(game, sprite, x, y) {
    var YOFFSET = 70;
    var SCALE = 70;
    this.x = x * SCALE;
    this.y = y * SCALE + YOFFSET;
    this.width = SCALE;
    this.height = this.width;
    this.platformSheet = sprite;
    this.game = game;
    this.ctx = game.ctx;
    this.live = 1; 
    this.boundingBox = new BoundingBox(this.x, this.y, this.width, this.height);
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