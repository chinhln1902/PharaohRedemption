
Magic.prototype = new Entity();
Magic.prototype.constructor = Magic;

function Magic(pharaoh, game, myX, myY) {

    this.animation = new Animation(AM.getAsset("./assets/sprites/Anubis/Magic Sprite.png"), 128, 128, 8, .09, 8, true, 1.5);
    this.x = myX;
    this.y = myY;
    debugger;
    this.game = game;
    this.name = "Magic"; 
    this.ctx = game.ctx;
    this.live = 1;
    this.pharaoh = pharaoh;
    this.winCount = 0;
    this.removeFromWorld = false;

}


Magic.prototype.draw = function () {
    if (this.winCount > 100) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.pharaoh.x - 10, this.pharaoh.y);
    Entity.prototype.draw.call(this);
}

Magic.prototype.update = function () {

    console.log("wincoutn" + this.winCount);
    console.log("underworld?" + this.pharaoh.underworld);

    this.winCount++;
    // if (this.winCount >= 100){
    //     this.pharaoh.underworld = true;
    //     //this.removeFromWorld = true;
    // }
    Entity.prototype.update.call(this);
}


