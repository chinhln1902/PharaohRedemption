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

}

Camera.prototype.draw = function () {
  
}

Camera.prototype.update = function () {

}

Camera.prototype.getX = function (XValue) {

    return this.x;
}

Camera.prototype.setX = function (XValue) {

    this.x = XValue - this.width;
    //console.log("camera x value:"+ this.x)

}
