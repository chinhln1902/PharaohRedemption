
// Pharaoh
function Pharaoh(game, assetManager) {
    
    this.AM = assetManager;   
    this.ctx = game.ctx;
    this.idle();
    Entity.call(this, game, 0, 250);
    this.y = 525;
}

Pharaoh.prototype = new Entity();
Pharaoh.prototype.constructor = Pharaoh;

Pharaoh.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 1200) this.x = -230;
    Entity.prototype.update.call(this);
}

Pharaoh.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

Pharaoh.prototype.idle = function () {
    this.animation = new Animation(AM.getAsset("./../assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet.png"), 
        900, 900, 18, 0.05, 18, true, 0.2); //idle animation
    this.speed = 0;
    console.log("pharaoh is idle");
}

Pharaoh.prototype.runRight = function () {
    this.animation = new Animation(AM.getAsset("./../assets/sprites/Egyptian Mummy/Running/Running SpriteSheet.png"), 
        900, 900, 12, 0.05, 12, true, 0.2); //running animation
    this.speed = 300;
    console.log("pharaoh is running");
}

Pharaoh.prototype.walkRight = function () {
    this.animation = new Animation(AM.getAsset("./../assets/sprites/Egyptian Mummy/Walking/Walking SpriteSheet.png"), 
        900, 900, 24, 0.05, 24, true, 0.2); //walking animation
    this.speed = 85;
    console.log("pharaoh is walking");
}

Pharaoh.prototype.jump = function () {
    this.animation = new Animation(AM.getAsset("./../assets/sprites/Egyptian Mummy/Jump Start/Jump Start SpriteSheet.png"), 
        900, 900, 6, 0.05, 6, true, 0.2); //jump start animation
    this.animation = new Animation(AM.getAsset("./../assets/sprites/Egyptian Mummy/Jump Loop/Jump Loop SpriteSheet.png"), 
        900, 900, 6, 0.05, 6, true, 0.2); //jump loop animation
    
    console.log("pharaoh is jumping");
}

