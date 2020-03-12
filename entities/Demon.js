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

var underspritesheets = []; 
function loadUnderSpriteSheets(AM) {
	underspritesheets['idle'] = AM.getAsset("./assets/sprites/PurpleDemon/Idle/IdleSpriteSheet.png");
	underspritesheets['idleflip'] = AM.getAsset("./assets/sprites/PurpleDemon/Idle/IdleSpriteSheetFlip.png");
	underspritesheets['attack'] = AM.getAsset("./assets/sprites/PurpleDemon/Attacking/AttackSpriteSheet.png");
	underspritesheets['attackflip'] = AM.getAsset("./assets/sprites/PurpleDemon/Attacking/AttackSpriteSheetFlip.png");
	underspritesheets['dying'] = AM.getAsset("./assets/sprites/PurpleDemon/Dying/DyingSpriteSheet.png");
	underspritesheets['dyingflip'] = AM.getAsset("./assets/sprites/PurpleDemon/Dying/DyingSpriteSheetFlip.png");
	underspritesheets['walk'] = AM.getAsset("./assets/sprites/PurpleDemon/Walking/WalkingSpriteSheet.png");
	underspritesheets['walkflip'] = AM.getAsset("./assets/sprites/PurpleDemon/Walking/WalkingSpriteSheetFlip.png");
}

function Demon(game, AssetManager, startX, startY, status) {
	this.AM = AssetManager; 
	this.status = status
	this.live = 1; 
	this.underworld = false; 
	if (this.status === 0) {
		loadDemonSpriteSheets(this.AM);
	} else {
		loadUnderSpriteSheets(this.AM);
		this.live = 0;
		this.underworld = true; 
	}
	this.ctx = game.ctx; 
	this.idle(); 
	this.state = "idle"; 
	this.x = startX;
	this.type = "enemy"; 
	this.y = startY;
	this.speed = 0; 
	this.originalx = startX; 
	this.game = game;  
	this.dead = false; 
	this.aftermath = 0; 
	this.pharaoh = game.mainCharacter; 
	this.Left = false;
	this.Right = true; 
	this.walking = false; 
	this.walkingright = false;
	this.attacker = 0; 
	this.health = 3; 
	this.immune = false;
	this.play = 0; 
	this.idleplay = 0; 
	this.timeimmune = 0; 
	this.name = "demon"; 
	this.PlayingTempAnimation = false; 
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

Demon.prototype = new Entity();
Demon.prototype.constructor = Demon;

Demon.prototype.draw = function () {
	if (this.live === 0) return; 
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
    var mainX = this.game.getMainCharacter().getX();
    if (this.x <= this.originalx - 500) this.walking = false;  
    if (this.x > this.originalx + 10) this.walkingright = false; 
    if (this.walking) this.x -= 2; 
    if (this.walkingright) this.x += 2; 
    if (mainX >= this.x - 120 && mainX <= this.x && this.attacker === 0) {
    	this.attack();
    	this.attacker = 1;
    	this.play = 0; 
    	this.walkingright = false;
    	this.walking = false;
    	this.idleplay = 0; 
    }
    if (mainX <= this.x + 160 && mainX >= this.x && this.attacker === 1) {
    	this.attackright();
    	this.attacker = 0;
    	this.play = 1; 
    	this.walkingright = false;
    	this.walking = false;
    	this.idleplay = 1; 
    }
    if (mainX >= this.x - 400 && mainX <= this.x - 120 && this.play === 0) {
    	this.walk(); 
    	this.idleplay = 0;
    	this.walkingright = false; 
    	this.play = 1; 
    	this.attacker = 0;
    } 
    if (mainX >= this.x + 160 && mainX <= this.x + 620 && this.play === 1) {
    	this.walkright();
    	this.idleplay = 1; 
    	this.walking = false; 
    	this.play = 0; 
    	this.attacker = 1;
    }
    if (mainX < this.x - 401 && this.idleplay === 0) {
    	this.idleplay = 1; 
    	this.walking = false;
    	this.walkingright = false; 
    	this.play = 0; 
    	this.attacker = 0; 
    	this.idle(); 
    }
    if (mainX > this.x + 621 && this.idleplay === 1) {
    	this.idleplay = 0;
    	this.walking = false;
    	this.walkingright = false;
    	this.play = 1; 
    	this.attacker = 1; 
    	this.idleright(); 
    }
    for (var i = 0; i < this.game.entities.length; i++) {
    	var ent = this.game.entities[i];
    	if (ent.name === 'comet' || (ent.name === 'pharaoh' && ent.attacking)) {
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
	if (this.status === 0) {
		this.animation = new Animation(demonspritesheets['attackflip'], 720, 485, 12, .05, 12, true, .5); 
	} else {
		this.animation = new Animation(underspritesheets['attackflip'], 720, 485, 12, .05, 12, true, .5); 
	}
}

Demon.prototype.attackright = function() {
	if (this.status === 0) {
		this.animation = new Animation(demonspritesheets['attack'], 722, 480, 12, .05, 12, true, .5);
	} else {
		this.animation = new Animation(underspritesheets['attack'], 722, 480, 12, .05, 12, true, .5); 
	}
}

Demon.prototype.walk = function() {
	if (this.status === 0) {
		this.animation = new Animation(demonspritesheets['walkflip'], 720, 500, 18, .05, 18, true, .5); 
		this.walking = true;
	} else {
		this.animation = new Animation(underspritesheets['walkflip'], 720, 500, 18, .05, 18, true, .5); 
		this.walking = true; 
	}
}

Demon.prototype.walkright = function() {
	if (this.status === 0) {
		this.animation = new Animation(demonspritesheets['walk'], 720, 500, 18, .05, 18, true, .5); 
		this.walkingright = true; 
	} else {
		this.animation = new Animation(underspritesheets['walk'], 720, 500, 18, .05, 18, true, .5); 
		this.walkingright = true; 
	}
}

Demon.prototype.die = function() {
	this.dead = true; 
	if (this.status === 0) {
		this.animation = new Animation(demonspritesheets['dyingflip'], 722, 480, 15, .05, 15, false, .5);
	} else {
		this.animation = new Animation(underspritesheets['dyingflip'], 722, 480, 15, .05, 15, false, .5); 
	}
}

Demon.prototype.dieright = function() {
	this.dead = true; 
	this.animation = new Animation(demonspritesheets['dying'], 722, 480, 15, .05, 15, false, .5); 
}

Demon.prototype.idle = function() { 
	if (this.status === 0) {
		this.animation = new Animation(demonspritesheets['idleflip'], 720, 450, 12, .08, 12, true, .5); 
	} else {
		this.animation = new Animation(underspritesheets['idleflip'], 720, 450, 12, .08, 12, true, .5); 
	}
}

Demon.prototype.idleright = function() {
	if (this.status === 0) {
		this.animation = new Animation(demonspritesheets['idle'], 720, 450, 12, .08, 12, true, .5);
	} else {
		this.animation = new Animation(underspritesheets['idle'], 720, 450, 12, .08, 12, true, .5); 
	}
}

function ControlAnimation(demon) {
	if(demon.PlayingTempAnimation && demon.animation.isDone()) {
        demon.idle();
    }
}