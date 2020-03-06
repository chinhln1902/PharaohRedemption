Enemy.prototype = new Entity();
Enemy.prototype.constructor = Enemy;

function Enemy() {
	var that = this; 
	document.addEventListener("keyup", function (e) {
        //console.log(e);
        if (e.code === "Space"){
            //console.log("underworld: " + that.underworld);
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

Enemy.prototype.draw = function () {
    if (this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
    Entity.prototype.draw.call(this);
}

Enemy.prototype.update = function () {
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

Enemy.prototype.collide = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}

Enemy.prototype.collideSlash = function(other) {
    if ((other.x - 200) < this.x && this.x < (other.x + 200) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}
