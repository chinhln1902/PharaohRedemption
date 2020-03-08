
function PowerUp(game, x, y, underworld) {
    console.log("the power up is made");
    var YOFFSET = 70;
    var XOFFSET = 10;
    var SCALE = 70;
    this.x = x * SCALE + XOFFSET;
    this.y = y * SCALE + YOFFSET;
    this.width = 50;
    this.height = 50    ;
    this.sprite = AM.getAsset("./assets/sprites/powerUps/hypno.png");
    this.game = game;
    this.ctx = game.ctx;
    this.game.addEntity(this);
    this.underworld = underworld;
    var that = this;
    document.addEventListener("keydown", function (e) {
       // console.log(e.code);
             if (e.code === "Space")that.underworld = !that.underworld;
    }, false); 
    this.frame = 0;
}

PowerUp.prototype = new Entity();
PowerUp.prototype.constructor = PowerUp;

PowerUp.prototype.draw = function() {
    if (this.underworld === true) return;
    this.ctx.drawImage(this.sprite, this.x - this.game.getCamera().getX() + 3, this.y + 2*Math.cos(this.frame), this.width, this.height);
    this.frame += 0.08;
}

PowerUp.prototype.givePowerTo = function(pharaoh) {
    if (this.underworld === true) return;
    pharaoh.powerUp="hypno";
    this.removeFromWorld = true; 
    powerUps.splice(powerUps.indexOf(this),1);

}


