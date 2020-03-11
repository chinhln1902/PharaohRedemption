
function PowerUp(game, type, x, y, underworld) {
    console.log("the power up is made");
    this.type = type;
    var YOFFSET = 70;
    var XOFFSET = 10;
    var SCALE = 70;
    this.x = x * SCALE + XOFFSET;
    this.y = y * SCALE + YOFFSET;
    this.width = 50;
    this.height = 50    ;
    if (this.type === "hypno"){
        this.sprite = AM.getAsset("./assets/sprites/powerUps/hypno.png");
    } else if (this.type === "heart") {
        this.sprite = AM.getAsset("./assets/platforms/PNG/Collectable/heart.png");
    }
    
    this.game = game;
    this.ctx = game.ctx;
    this.game.addEntity(this);
    this.underworld = underworld;
    var that = this;
    document.addEventListener("keydown", function (e) {
       // console.log(e.code);
             if (e.code === "Space" && isSwitchable)that.underworld = !that.underworld;
    }, false); 
    this.frame = 0;
    this.randomNo = Math.random()*100;
}

PowerUp.prototype = new Entity();
PowerUp.prototype.constructor = PowerUp;

PowerUp.prototype.draw = function() {
    if (this.underworld === true) return;
    this.ctx.drawImage(this.sprite, this.x - this.game.getCamera().getX() + 3, this.y + 2*Math.cos(this.frame + this.randomNo), this.width, this.height);
    this.frame += 0.08;
}

PowerUp.prototype.givePowerTo = function(pharaoh) {
    if (this.underworld === true) return;
    pharaoh.powerUp=this.type;
    this.delete();
}

PowerUp.prototype.giveHealthTo = function(pharaoh){
    if (this.underworld === true) return;
    pharaoh.health += 1;
    console.log(pharaoh.hud);
    pharaoh.hud.setHealth(pharaoh.health);
    this.delete();
}

PowerUp.prototype.delete = function() {
    this.removeFromWorld = true; 
    powerUps.splice(powerUps.indexOf(this),1);
}
 
