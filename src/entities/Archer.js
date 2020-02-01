var spritesheets = []; 
function loadArcherSpriteSheets(AM) {
	spritesheets['idle'] = AM.getAsset("./../assets/sprites/Archer-Idle.png"); 
	spritesheets['attack'] = AM.getAsset("./../assets/sprites/Archer-Shooting.png"); 
}

function Archer(game, AssetManager) {
	this.AM = AssetManager; 
	loadArcherSpriteSheets(this.AM);
	this.ctx = game.ctx; 
	this.idle(); 
	this.state = "idle"; 
	this.x = 0;
	this.y = 485;
	this.speed = 0; 
	this.time = 0; 
	this.game = game;  
	this.width = 182; 
	this.name = "archer"; 
	this.PlayingTempAnimation = false; 
	var underworld = false; 
	var that = this; 
	document.addEventListener("keydown", function (e) {
		if (e.code === "Space"){
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
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

Archer.prototype.update = function () {
	var that = this; 
    this.x += this.game.clockTick * this.speed;
    ControlAnimation(this); 
    Entity.prototype.update.call(this);
    this.time++;
    this.shooting();   
}

Archer.prototype.idle = function() {
	this.animation = new Animation(spritesheets['idle'], 910, 900, 18, .05, 18, true, .2); 
}

Archer.prototype.shooting = function() {
		if (!this.underworld) return; 
		if (this.time > 100) {
		this.animation = new Animation(spritesheets['attack'], 910, 900, 9, .03, 9, false, .2); 
		var arrow = new Arrow(this.game, this.AM); 
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
