var snakespritesheets = []; 
function loadSnakeSpriteSheets(AM) {
    snakespritesheets['idle'] = AM.getAsset("./assets/sprites/PSNAKE-IDLE2.png");  
    snakespritesheets['die'] = AM.getAsset("./assets/sprites/PSNAKE-DIE.png"); 
}

function Snake(game, AssetManager, startX, startY) {
    this.AM = AssetManager; 
    loadSnakeSpriteSheets(this.AM); 
    this.ctx = game.ctx; 
    this.idle(); 
    this.x = startX;
    this.y = startY;
    this.speed = 0;
    this.width = 93;
    this.height = 85; 
    this.aftermath = 0;
    this.dead = false; 
    this.type = "enemy"; 
    this.game = game;
    this.live = 1; 
    this.name = "snake"; 
    this.underworld = false;
    var that = this;

    document.addEventListener("keydown", function (e) {
        // console.log(e.code);
         if (e.code === "Space" && isSwitchable && !that.spaceDown){
			if (that.live === 1) {
				that.live = 0;
			} else {
				that.live = 1; 
			}
             that.underworld = !that.underworld;
             that.spaceDown = true;
         }
     }, false); 
     document.addEventListener("keyup", function (e) {
         if (e.code === "Space") {
             e.preventDefault();
             that.spaceDown = false;
         }
     }, false);
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
    if (this.dead) this.aftermath++;
    if (this.aftermath > 35) this.removeFromWorld = true; 
    this.x += this.game.clockTick * this.speed;
    Entity.prototype.update.call(this);
    for (var i = 0; i < this.game.entities.length; i++) {
        var ent = this.game.entities[i];
        if (ent.name === 'comet' || ent.name === 'hypno') {
            if (this.collide(ent)) {
                this.die(); 
            }
        }
        if (ent.name === 'pharaoh' && ent.attacking === true) {
            if (this.collideSlash(ent)) {
                this.die();  
            }
        }
    }   
}

Snake.prototype.collide = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30) && (other.y - 70) < this.y && this.y < (other.y + 70)) {
        return true; 
   }
}

Snake.prototype.die = function() { 
    this.dead = true; 
    this.animation = new Animation(snakespritesheets['die'], 94.8, 114, 7, .1, 7, .5, true, .95);
}

Snake.prototype.idle = function() {
    this.animation = new Animation(snakespritesheets['idle'], 94.8, 85, 12, .1, 12, .5, true, .2);
}

Snake.prototype.collideSlash = function(other) {
    if ((other.x - 200) < this.x && this.x < (other.x + 200) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}



