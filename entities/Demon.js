var demonspritesheets = []; 
function loadDemonSpriteSheets(AM) {
	demonspritesheets['idle'] = AM.getAsset("./assets/sprites/RedDemon/RedDemonIdle.png"); 
	demonspritesheets['attack'] = AM.getAsset("./assets/sprites/RedDemon/RedDemonAttack.png"); 
	demonspritesheets['dying'] = AM.getAsset("./assets/sprites/RedDemon/RedDemonDie.png"); 
	demonspritesheets['hurt'] = AM.getAsset("./assets/sprites/RedDemon/RedDemonHurt.png");
	demonspritesheets['walk'] = AM.getAsset("./assets/sprites/RedDemon/RedDemonWalk.png");
	demonspritesheets['idleflip'] = AM.getAsset("./assets/sprites/RedDemon/RedDemonIdleFlip.png"); 
	demonspritesheets['attackflip'] = AM.getAsset("./assets/sprites/RedDemon/RedDemonAttackFlip.png"); 
	demonspritesheets['dyingflip'] = AM.getAsset("./assets/sprites/RedDemon/RedDemonDieFlip.png"); 
	demonspritesheets['hurtflip'] = AM.getAsset("./assets/sprites/RedDemon/RedDemonHurtFlip.png");
	demonspritesheets['walkflip'] = AM.getAsset("./assets/sprites/RedDemon/RedDemonWalkFlip.png");

}

function Demon(game, AssetManager, startX, startY) {
	this.AM = AssetManager; 
	loadDemonSpriteSheets(this.AM);
	this.ctx = game.ctx; 
	this.idle(); 
	this.state = "idle"; 
	this.x = startX;
	this.type = "enemy"; 
	this.y = startY;
	this.speed = 0; 
	this.time = 0; 
	this.game = game;  
	this.dead = false; 
	this.aftermath = 0; 
	this.width = 182; 
	this.name = "demon"; 
	this.live = 1; 
	this.PlayingTempAnimation = false; 
	var underworld = false; 
	var that = this; 
	document.addEventListener("keydown", function (e) {
		if (e.code === "Space"){
			if (that.live === 0) {
            	that.live = 1;
            } else {
            	that.live = 0; 
            }
            //console.log("underworld: " + that.underworld);
            e.preventDefault();
            that.underworld = !that.underworld;
        }
    });
}

Demon.prototype = new Entity();
Demon.prototype.constructor = Demon;

Demon.prototype.draw = function () {
	if (this.underworld) return; 
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
    Entity.prototype.draw.call(this);
}

Demon.prototype.update = function () {
	if (this.live === 0) return; 
	if (this.dead === true) this.aftermath++; 
	if (this.aftermath > 35) this.removeFromWorld = true; 
	var that = this; 
    this.x += this.game.clockTick * this.speed;
    ControlAnimation(this); 
    Entity.prototype.update.call(this);
    this.time++;
    for (var i = 0; i < this.game.entities.length; i++) {
    	var ent = this.game.entities[i];
    	if (ent.name === 'comet') {
    		if (this.collide(ent)) this.die(); 
	    }
	    if (ent.name === 'pharaoh' && ent.attacking === true) {
	    	if (this.collideSlash(ent)) this.die();
	    }
    }	 
}

Demon.prototype.collide = function(other) {
    if ((other.x - 70) < this.x && this.x < (other.x + 70) && this.y >= (other.y - 100) && this.y <= (other.y + 200)) {
   		return true; 
   }
}

Demon.prototype.collideSlash = function(other) {
    if ((other.x - 200) < this.x && this.x < (other.x + 200) && this.y >= (other.y - 100) && this.y <= (other.y + 200)) {
   		return true; 
   }
}

Demon.prototype.die = function() {
	this.dead = true; 
	this.animation = new Animation(demonspritesheets['dying'], 720, 480, 15, .05, 15, false, .2); 
}

Demon.prototype.idle = function() {
	this.animation = new Animation(demonspritesheets['idleflip'], 720, 480, 12, .05, 12, true, .2); 
}


function ControlAnimation(demon) {
	if(demon.PlayingTempAnimation && demon.animation.isDone()) {
        demon.idle();
    }
}