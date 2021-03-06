var spritesheets = []; 
function loadArrowSpriteSheets(AM) {
	spritesheets['shoot'] = AM.getAsset("./assets/sprites/ArrowFlip.png");  
}

function Arrow(game, AssetManager, startX, startY) {
	this.AM = AssetManager; 
	loadArrowSpriteSheets(this.AM);
	this.animation = new Animation(spritesheets['shoot'], 320, 128, 1, .1, 1, true, .2);
	this.ctx = game.ctx; 
	this.x = startX;
	this.y = startY;
	this.width = 20; 
	this.speed = -280; 
    this.type = "projectile"; 
	this.game = game; 
	this.name = "arrow";  
    this.live = 1; 
    this.timeAlive = 0; 
	var underworld = false; 
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

Arrow.prototype = new Entity();
Arrow.prototype.constructor = Arrow;

Arrow.prototype.draw = function () {
	if(this.underworld) return; 
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
    Entity.prototype.draw.call(this);
}

Arrow.prototype.update = function () {
    if (this.live === 0) return; 
    this.timeAlive++; 
    this.x += this.game.clockTick * this.speed;
    Entity.prototype.update.call(this);
    for (var i = 0; i < this.game.entities.length; i++) {
    	var ent = this.game.entities[i];
        if (this.timeAlive > 70) {
            this.removeFromWorld = true; 
        }
    }	
}

Arrow.prototype.collide = function(other) {
    //return this.x < other.x + other.width && this.x + this.width > other.x;
    if ((other.x - 30) < this.x && this.x < (other.x + 30) && this.y >= other.y && this.y <= (other.y + 200)) {
   		return true; 
   }
    //return this.x === other.x;  
}

Arrow.prototype.remove = function() {
	if (!this.underworld) return; 
	this.animation = new Animation(spritesheets['shoot'], 320, 128, 1 , .25, 1, false, .2); 
}