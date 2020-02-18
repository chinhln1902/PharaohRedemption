
//inheritence
Bat.prototype = new Entity();
Bat.prototype.constructor = Bat;

function Bat(game, spritesheet) {
    this.animation = new Animation(spritesheet, 631, 634, 10, 0.07, 10, true, .34);
    this.x = 1000;
    this.y = 360;
    this.speed = 0;
    this.game = game;
    this.ctx = game.ctx;
    this.name = "bat"; 
    this.underworld = false;
    this.live = 0; 
    var that = this;

    document.addEventListener("keydown", function (e) {
        console.log(e);
		//Running right 
		if (e.code === "Space"){
            console.log("underworld: " + that.underworld);
            e.preventDefault();
            that.swapWorld();
        }
    });
}


Bat.prototype.draw = function () {
    if (!this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

Bat.prototype.update = function () {
    if (this.live === 0) return;
    this.x -= 3;
    if (this.x < -230) this.x = 1200;
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x += this.game.clockTick * this.speed;
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

Bat.prototype.collide = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}

Bat.prototype.collideSlash = function(other) {
    if ((other.x - 300) < this.x && this.x < (other.x + 300) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}

Bat.prototype.swapWorld = function(){
    if (this.live === 0) {
        this.live = 1;
    } else {
        this.live = 0; 
    }
    this.underworld = !this.underworld;
}