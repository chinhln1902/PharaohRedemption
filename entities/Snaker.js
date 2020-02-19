var spritesheets = [];
function loadSnakerSpriteSheets(AM) {
	spritesheets['idle'] = AM.getAsset("./assets/sprites/PSNAKE-IDLE2.png"); 
}

Snaker.prototype = new Enemy(); 
Snaker.prototype.constructor = Snaker; 

function Snaker(game, AssetManager, startX, startY) {
	super(); 
	this.AM = AssetManager;
	loadSnakeSpriteSheets(this.AM); 
	this.ctx = game.ctx; 
	this.x = startX;
	this.y = startY; 
	this.idle();
}

Snaker.prototype.draw = function () {
    if (this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
    Entity.prototype.draw.call(this);
}

Snaker.prototype.idle = function() {
	this.animation = new Animation(spritesheets['idle'], 94.8, 85, 12, .1, 12, .5, true, .2);
}