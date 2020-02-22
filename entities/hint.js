function Hint(game, sprite, x, y, underworld) {
    var YOFFSET = 70;
    var SCALE = 70;
    this.x = x * SCALE;
    this.y = y * SCALE + YOFFSET;
    this.width = SCALE;
    this.height = this.width;
    this.sprite = sprite;
    this.game = game;
    this.ctx = game.ctx;
    this.underworld = underworld;
    this.game.addEntity(this);
    var that = this;
    document.addEventListener("keydown", function (e) {
            if (e.code === "Space") {
                e.preventDefault();
                that.underworld = !that.underworld;
            }
    });    
    
}

Hint.prototype = new Entity();
Hint.prototype.constructor = Hint;

Hint.prototype.update = function() {
    
}


Hint.prototype.draw = function() {
    
    this.ctx.drawImage(this.platformSheet , this.x - this.game.getCamera().getX(), this.y, this.width, this.height);
}

Hint.prototype.swichWorlds() = function(){
    this.underworld = !this.underworld;
}
