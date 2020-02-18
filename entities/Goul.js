//inheritence
Goul.prototype = new Entity();
Goul.prototype.constructor = Goul;

function Goul(game, spritesheet) {
    this.animation = new Animation(spritesheet, 713, 842, 10, 0.1, 10, true, .3); //walking animation
    this.x = 100;
    this.y = 350;
    this.speed = 0;
    this.game = game;
    this.ctx = game.ctx;
    this.name = "goul"; 
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

Goul.prototype.draw = function () {
    if (!this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

Goul.prototype.update = function () {
    if (this.live === 0) return;
    var that = this;
    if (this.x > 1200) this.x = -230;
    if (this.x < -230) this.x = 1200;

    this.x += 2; //for walking
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

Goul.prototype.collide = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}

Goul.prototype.collideSlash = function(other) {
    if ((other.x - 300) < this.x && this.x < (other.x + 300) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}

Goul.prototype.swapWorld = function(){
    if (this.live === 0) {
        this.live = 1;
    } else {
        this.live = 0; 
    }
    this.underworld = !this.underworld;
}
// Goul.prototype.die = function () {
//     this.animation = new Animation(spritesheet['dying'], 852, 872, 10, 0.08, 10, true, .3);
//     this.x = 0;
//     this.y = 350;

// }