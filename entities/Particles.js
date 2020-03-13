
function Particles(game, x, y, underworld) {
    console.log("the box is made");
    var SCALE = 70;
    this.x = x;
    this.y = y;
    
    this.animationScale = 0.35;
    this.spriteSheet = AM.getAsset("./assets/sprites/frozenParticles.png");
    this.animation = new Animation(this.spriteSheet, 252, 181, 5, 0.1, 5, true, this.animationScale); //idle animation
    this.game = game;
    this.ctx = game.ctx;
    this.game.addEntity(this);
    this.underworld = underworld;

    var that = this;
    
    document.addEventListener("keydown", function (e) {
        // console.log(e.code);
         if (e.code === "Space" && isSwitchable && !that.spaceDown){
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

Particles.prototype = new Entity();
Particles.prototype.constructor = Particles;

Particles.prototype.draw = function() {
    if (this.underworld === true) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y); 
    Entity.prototype.draw.call(this);
    if (this.broken && this.animation.isDone()) this.delete();
}

