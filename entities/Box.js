
function Box(game, x, y, underworld) {
    console.log("the box is made");
    var YOFFSET = 35;
    var XOFFSET = -35;
    var SCALE = 70;
    this.x = x * SCALE + XOFFSET;
    this.y = y * SCALE + YOFFSET;
    
    this.animationScale = SCALE/318;
    this.spriteSheet = AM.getAsset("./assets/platforms/boxSpriteSheet.png");
    this.animation = new Animation(this.spriteSheet, 475, 475, 1, 0.06, 1, true, this.animationScale); //idle animation
    this.game = game;
    this.ctx = game.ctx;
    this.game.addEntity(this);
    this.underworld = underworld;
    this.U = underworld;
    var that = this;
    
    document.addEventListener("keydown", function (e) {
        if (e.code === "Space")that.underworld = !that.underworld;
    }, false); 
    this.platform = new Platform(this.game, null, x, y, true, false, false);
    this.i = platforms.length;
    if (!this.U){
        platforms.push(this.platform);  
    }else{
        underworldPlatforms.push(this.platform);  
    }
    
}

Box.prototype = new Entity();
Box.prototype.constructor = Box;

Box.prototype.draw = function() {
    if (this.underworld === true) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y); 
    Entity.prototype.draw.call(this);
    if (this.broken && this.animation.isDone()) this.delete();
}

Box.prototype.break = function() {
    if (this.underworld === true) return;
    this.animation = new Animation(this.spriteSheet, 475, 475, 14, 0.06, 14, false, this.animationScale);
    this.broken = true;
}

Box.prototype.delete = function() {
    this.removeFromWorld = true; 
    if (!this.U){
        platforms.splice(platforms.indexOf(this.platform),1);
        this.platform.removeFromWorld = true;
    }else{
        underworldPlatforms.splice(underworldPlatforms.indexOf(this.platform),1);
        this.platform.removeFromWorld = true;
    }
    
}


