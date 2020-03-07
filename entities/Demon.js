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
	this.attack(); 
	this.state = "idle"; 
	this.x = startX;
	this.type = "enemy"; 
	this.y = startY;
	this.speed = 0; 
	this.game = game;  
	this.dead = false; 
	this.aftermath = 0; 
	this.pharaoh = game.mainCharacter; 
	this.Left = false;
	this.Right = true; 
	this.health = 3; 
	this.immune = false;
	this.timeimmune = 0; 
	this.name = "demon"; 
	this.live = 1; 
	this.PlayingTempAnimation = false; 
	var underworld = false; 
	var that = this; 
	document.addEventListener("keyup", function (e) {
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
	if (this.aftermath > 45) this.removeFromWorld = true; 
	if (this.immune) this.timeimmune++; 
	if (this.timeimmune > 40) {
		this.immune = false;
		this.timeimmune = 0; 
	} 
	var that = this; 
    this.x += this.game.clockTick * this.speed;
    ControlAnimation(this); 
    Entity.prototype.update.call(this);
    /*if (this.game.getMainCharacter().getX() >= this.x - 175) {
    	this.attack(); 
    }*/
    for (var i = 0; i < this.game.entities.length; i++) {
    	var ent = this.game.entities[i];
    	if (ent.name === 'comet') {
    		if (this.collide(ent) && !this.immune) {
    			if (this.health === 1) {
    				this.die(); 
    			} else {
    				this.immune = true; 
    				this.health--; 
    			}
    		} 
	    }
    }	 
}

Demon.prototype.collide = function(other) {
    if ((other.x - 70) < this.x && this.x < (other.x + 70) && this.y >= (other.y - 100) && this.y <= (other.y + 200)) { 
   		return true; 
   }
}

Demon.prototype.hurt = function() {
		if (this.immune) return; 
		this.health--; 
		this.immune = true; 
		this.animation = new Animation(demonspritesheets['hurtflip'], 722, 480, 12, .05, 12, false, .5); 
}

Demon.prototype.hurtright = function() {
	this.animation = new Animation(demonspritesheets['hurt'], 722, 480, 12, .05, 12, false, .5);
}

Demon.prototype.attack = function() {
		this.animation = new Animation(demonspritesheets['attackflip'], 720, 480, 12, .05, 12, true, .5); 
}

Demon.prototype.attackright = function() {
	this.animation = new Animation(demonspritesheets['attack'], 722, 480, 12, .05, 12, false, .5);
}

Demon.prototype.walk = function() {
	this.animation = new Animation(demonspritesheets['walk'], 720, 500, 18, .05, 18, true, .5); 
}

Demon.prototype.walkright = function() {
	this.animation = new Animation(demonspritesheets['walk'], 722, 480, 18, .05, 18, false, .5); 
}

Demon.prototype.die = function() {
	this.dead = true; 
	this.animation = new Animation(demonspritesheets['dyingflip'], 722, 480, 15, .05, 15, false, .5);
}

Demon.prototype.dieright = function() {
	this.dead = true; 
	this.animation = new Animation(demonspritesheets['dying'], 722, 480, 15, .05, 15, false, .5); 
}

Demon.prototype.idle = function() {
	this.animation = new Animation(demonspritesheets['idleflip'], 720, 450, 12, .08, 12, true, .5); 
}

Demon.prototype.idleright = function() {
	this.animation = new Animation(demonspritesheets['idle'], 720, 450, 12, .08, 12, true, .5); 
}

function ControlAnimation(demon) {
	if(demon.PlayingTempAnimation && demon.animation.isDone()) {
        demon.idle();
    }
}