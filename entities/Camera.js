Camera.prototype = new Entity();
Camera.prototype.constructor = Camera;

// no inheritance
function Camera(game) {
    this.x = 400;
    this.y = 0;
    this.width = 550;
    this.height = 400;
    this.game = game;
    this.ctx = game.ctx;
    this.level4 = false;
}

Camera.prototype.draw = function () {
  
}

Camera.prototype.update = function () {

}

Camera.prototype.getX = function (XValue) {

    return this.x;
}

Camera.prototype.setX = function (XValue) {

    if (!this.level4){
        this.x = XValue - this.width;

    }

    if (this.level4){
        this.x = -10;
    }

}
