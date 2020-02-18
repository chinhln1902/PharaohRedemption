var spritesheets = []; 
function loadArcherSpriteSheets(AM) {
	spritesheets['idle'] = AM.getAsset("./assets/sprites/Archer-Idle.png"); 
	spritesheets['attack'] = AM.getAsset("./assets/sprites/Archer-Shooting.png"); 
}

function Archer(game, AssetManager) {
	this.AM = AssetManager; 
	loadArcherSpriteSheets(this.AM);
	this.ctx = game.ctx; 
	this.idle(); 
	this.state = "idle"; 
	this.x = 25;
	this.y = 485;
	this.speed = 0; 
	this.time = 0; 
	this.game = game;  
	this.width = 182; 
	this.name = "archer"; 
	this.live = 0; 
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
            console.log("underworld: " + that.underworld);
            e.preventDefault();
            that.underworld = !that.underworld;
        }
    });
}

Archer.prototype = new Entity();
Archer.prototype.constructor = Archer;

Archer.prototype.draw = function () {
	if (!this.underworld) return; 
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
    Entity.prototype.draw.call(this);
}

Archer.prototype.update = function () {
	if (this.live === 0) return; 
	var that = this; 
    this.x += this.game.clockTick * this.speed;
    ControlAnimation(this); 
    Entity.prototype.update.call(this);
    this.time++;
    for (var i = 0; i < this.game.entities.length; i++) {
    	var ent = this.game.entities[i];
    	if (ent.name === 'comet') {
    		if (this.collide(ent)) {
    			this.removeFromWorld = true; 
    		}
	    }
    }	
    this.shooting();   
}

Archer.prototype.collide = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30) && this.y >= (other.y - 100) && this.y <= (other.y + 200)) {
   		return true; 
   }
}

Archer.prototype.idle = function() {
	this.animation = new Animation(spritesheets['idle'], 910, 900, 18, .05, 18, true, .2); 
}

Archer.prototype.shooting = function() {
		if (!this.underworld) return; 
		if (this.time > 100) {
		this.animation = new Animation(spritesheets['attack'], 910, 900, 9, .03, 9, false, .2); 
		var arrow = new Arrow(this.game, this.AM, this.x + 130, this.y + 105); 
		this.game.addEntity(arrow); 
		this.PlayingTempAnimation = true; 
		this.time = 0; 
	}
}

function ControlAnimation(archer) {
	if(archer.PlayingTempAnimation && archer.animation.isDone()) {
        archer.idle();
    }
}
