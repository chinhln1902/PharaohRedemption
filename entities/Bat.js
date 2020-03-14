var spritesheets = [];
function loadBatSpriteSheets(AM) {
    spritesheets['fly left'] = AM.getAsset("./assets/sprites/Bat Fly Flip.png");
    spritesheets['fly right'] = AM.getAsset("./assets/sprites/Bat Fly Flip Right.png"); 
    spritesheets['die'] = AM.getAsset("./assets/sprites/Bat-Die.png"); 

}
//inheritence
Bat.prototype = new Entity();
Bat.prototype.constructor = Bat;

function Bat(game, AssetManager, startX, startY) {
    
    this.AM = AssetManager; 
    loadBatSpriteSheets(this.AM); 
    this.scale = 0.25;
    this.fly(); 
    this.x = startX;
    this.y = startY;
    this.speed = 0;
    this.game = game;
    this.type = "enemy"; 
    this.ctx = game.ctx;
    this.dead = false;
    this.aftermath = 0; 
    this.name = "bat"; 
    this.underworld = false;
    this.live = 0; 
    this.pharaoh = game.mainCharacter;
    this.Right = "false";
    this.Left = "true";
    this.count = 200;
    this.leftCount = 200;
    var that = this;

    document.addEventListener("keydown", function (e) {
        // console.log(e.code);
         if (e.code === "Space" && isSwitchable && !that.spaceDown){
             that.swapWorld();
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


Bat.prototype.draw = function () {
    if (!this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.game.getCamera().getX(), this.y);
}

Bat.prototype.update = function () {
    if (this.live === 0) return;
    if (this.dead) this.aftermath++; 
    if (this.aftermath > 30) this.removeFromWorld = true; 
    if (this.game.getMainCharacter().y > this.y){
        this.y+=0.5
    }
    if (this.game.getMainCharacter().y < this.y){
        this.y-=0.5
    }
    //Moving character
    if (this.Left ===  "true" && this.Right === "false" && this.game.getMainCharacter().getX() >= this.x - 400){
        this.x -= 2;
    }
    if (this.Right === "false" && this.x <= this.game.getMainCharacter().getX() - 400 && this.count === 200){
        this.flyRight(); 
        this.Right = "true";
        this.Left = "false"; 
        this.count  = 0;

    }    
    if (this.Right === "true"){
        this.x += 2;
        this.count += 1;

        if (this.game.getMainCharacter().getX() >= this.x - 200 && this.count === 200){
            this.fly();
            this.Left = "true";
            this.Right = "false";
            
        }
    } 

    //Changing animation
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x += this.game.clockTick * this.speed;

    // //Collision code
    for (var i = 0; i < this.game.entities.length; i++) {
        var ent = this.game.entities[i];
        if (ent.name === 'comet') {
            if (this.collide(ent)) {
                this.die();  
            }
        }
        if (ent.name === 'hypno') {
            if (this.collide(ent)) {
                this.die();  
            }
        }
        if (ent.name === 'pharaoh' && ent.attacking === true) {
            if (this.collideSlash(ent)) {
                this.die(); 
            }
        }
    }   
    
}

Bat.prototype.collide = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}

Bat.prototype.collideSlash = function(other) {
    if ((other.x - 300) < this.x && this.x < (other.x + 300) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}

Bat.prototype.fly = function() {
    this.animation = new Animation(spritesheets['fly left'], 631, 634, 10, 0.07, 10, true, this.scale); 
    // Left = true;
    // Right = false;
}

Bat.prototype.flyRight = function() {
    this.animation = new Animation(spritesheets['fly right'], 631, 634, 10, 0.07, 10, true, this.scale); 
    // Right = true;
    // Left = false; 
}

Bat.prototype.die = function() {
    this.animation = new Animation(spritesheets['die'], 693, 580, 7, 0.07, 7, false, this.scale); 
    this.dead = true; 
}

Bat.prototype.swapWorld = function(){
    if (this.live === 0) {
        this.live = 1;
    } else {
        this.live = 0; 
    }
    this.underworld = !this.underworld;
}