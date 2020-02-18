function Snake(game, spritesheet) {
    this.animation = new Animation(spritesheet, 94.8, 85, 12, .1, 12, .5, true, .2);
    this.x = 550;
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
        if (e.code === "Space"){
            console.log("underworld: " + that.underworld);
            e.preventDefault();
            if (that.live === 1) {
                that.live = 0;
            } else {
                that.live = 1; 
            }
            that.underworld = !that.underworld;
        }
    });
}

Snake.prototype = new Entity();
Snake.prototype.constructor = Snake;

Snake.prototype.draw = function () {
    if (this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
    Entity.prototype.draw.call(this);
}

Snake.prototype.update = function () {
    if (this.live === 0) return;  
    this.x += this.game.clockTick * this.speed;
    Entity.prototype.update.call(this);
    for (var i = 0; i < this.game.entities.length; i++) {
        var ent = this.game.entities[i];
        if (ent.name === 'comet') {
            if (this.collide(ent)) {
                this.removeFromWorld = true; 
            }
        }
        if (ent.name === 'pharaoh' && ent.attacking === true) {
            if (this.collideSlash(ent)) {
                this.removeFromWorld = true; 
            }
        }
    }   
}

Snake.prototype.collide = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}

Snake.prototype.collideSlash = function(other) {
    if ((other.x - 200) < this.x && this.x < (other.x + 200) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}



