
function Box(game, x, y) {
    console.log("the box is made");
    var YOFFSET = 35;
    var XOFFSET = -35;
    var SCALE = 70;
    this.x = x * SCALE + XOFFSET;
    this.y = y * SCALE + YOFFSET;
    this.animationScale = SCALE/318;
    this.spriteSheet = AM.getAsset("./assets/platforms/boxSpriteSheet.png");
    this.animation = new Animation(this.spriteSheet, 475, 475, 1, 0.07, 1, true, this.animationScale); //idle animation
    this.game = game;
    this.ctx = game.ctx;
    this.game.addEntity(this);
    var that = this;
    document.addEventListener("keydown", function (e) {
        console.log(e.code);
             if (e.code === "KeyE" ){
                //that.break();
             }
    }, false); 
    this.platform = new Platform(this.game, null, x, y, true, false, false);
    this.i = platforms.length;
    platforms.push(this.platform);   
}

Box.prototype = new Entity();
Box.prototype.constructor = Box;

Box.prototype.draw = function() {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y); 
    Entity.prototype.draw.call(this);
    //this.ctx.drawImage(this.BoxSheet , this.x - this.game.getCamera().getX() + 3, this.y, this.width, this.height);
    if (this.broken && this.animation.isDone()) this.delete();
}

Box.prototype.break = function() {
    this.animation = new Animation(this.spriteSheet, 475, 475, 14, 0.07, 14, false, this.animationScale);
    this.broken = true;
}

Box.prototype.delete = function() {
    this.removeFromWorld = true; 
    platforms.splice(platforms.indexOf(this.platform),1);
    this.platform.removeFromWorld = true;
}


