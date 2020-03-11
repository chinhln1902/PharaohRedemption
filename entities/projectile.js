function Projectile(game, spritesheet, direction, startX, startY) {
    this.startSpeed = 900;
    if (direction === "right"){
        this.animation = new Animation(spritesheet, 128, 128, 14, .05, 14, false, 1);
        this.speed = this.startSpeed;
    } 
    if (direction === "left"){
        this.animation = new Animation(spritesheet, 128, 128, 14, .05, 14, false, 1);
        this.speed = 0-this.startSpeed;
    }
    this.x = startX;
    this.y = startY;
    this.live = 1; 
    this.game = game;
    this.ctx = game.ctx;
    this.timeAlive = 0;
    this.type = "main"; 
    this.name = 'comet'; 
    this.underworld = false;
    var that = this;
    document.addEventListener("keydown", function (e) {
        //console.log(e);
		//Running right 
		if (e.code === "Space" && isSwitchable){
            //console.log("underworld: " + that.underworld);
            e.preventDefault();
            that.underworld = !that.underworld;
        }
    });
    //console.log("projectile");
}

Projectile.prototype = new Entity();
Projectile.prototype.constructor = Projectile;

Projectile.prototype.draw = function () {
    //if (this.underworld) return;
    if (this.timeAlive > 5){
        this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
        Entity.prototype.draw.call(this);
    }
    
}

Projectile.prototype.update = function () {
    if (this.timeAlive > 30) {
        this.speed = 0;
        this.removeFromWorld = true; 
    }
    if (this.timeAlive > 5){
        this.x += this.game.clockTick * this.speed;
        Entity.prototype.update.call(this);
    }
    
    //console.log("this position: " + this.x);
    this.timeAlive ++;
}


