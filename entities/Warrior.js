var Warriorspritesheets = [];
function loadWarriorSpriteSheets(AM) {
    Warriorspritesheets['run slash right'] = AM.getAsset("./assets/sprites/Warrior Slash Right.png"); 
    Warriorspritesheets['run slash left'] = AM.getAsset("./assets/sprites/Warrior Slash Left.png"); 
    Warriorspritesheets['die'] = AM.getAsset("./assets/sprites/Warrior Die.png"); 
    Warriorspritesheets['throw'] = AM.getAsset("./assets/sprites/Warrior Throw.png"); 
    Warriorspritesheets['idle left'] = AM.getAsset("./assets/sprites/Warrior Idle Left.png"); 

}

//inheritence
Warrior.prototype = new Entity();
Warrior.prototype.constructor = Warrior;

function Warrior(game, AssetManager, startX, startY) {
    this.AM = AssetManager; 
    loadWarriorSpriteSheets(this.AM); 
    this.idleLeft();
    this.x = startX;
    this.y = startY;
    this.speed = 0;
    this.game = game;
    this.ctx = game.ctx;
    this.name = "Warrior"; 
    this.underworld = false;
    this.live = 0; 
    this.dead = false;
    this.aftermath = 0; 
    var that = this;
    this.frames = 0;

    // this.throwIdle(); //dang smarty pants
    
    // document.addEventListener("keydown", function (e) {
    //     console.log(e);
	// 	//Running right 
	// 	if (e.code === "Space"){
    //         console.log("underworld: " + that.underworld);
    //         e.preventDefault();
    //         that.swapWorld();
    //     }
    // });
}


Warrior.prototype.draw = function () {
   // if (this.underworld) return;
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x , this.y);

}

Warrior.prototype.update = function () {
    debugger;
// if (this.live === 0) return;
    // if (this.x > 1200) this.x = -230;
    // if (this.x < -230) this.x = 1200;

//     if (this.dead) this.aftermath++;
//     if (this.aftermath > 30) this.removeFromWorld = true; 
//   //  this.x += 2; //for walking
//     if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
//         this.x += this.game.clockTick * this.speed;

//     for (var i = 0; i < this.game.entities.length; i++) {
//         var ent = this.game.entities[i];
//         if (ent.name === 'comet') {
//             if (this.collide(ent)) {
//                this.die(); 
//             }
//         }
//         if (ent.name === 'pharaoh' && ent.attacking === true) {
//             if (this.collideSlash(ent)) {
//                 this.die(); 
//             }
//         }
//     }   

    Warrior.prototype.throwIdle.call();

}

Warrior.prototype.collide = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 

   }
}

Warrior.prototype.collideSlash = function(other) {
    if ((other.x - 300) < this.x && this.x < (other.x + 300) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}

Warrior.prototype.slashRight = function() {
    this.animation = new Animation(Warriorspritesheets['run slash right'], 900, 900, 12, 0.05, 12, true, .2); 
}

Warrior.prototype.slashLeft = function() {
    this.animation = new Animation(Warriorspritesheets['run slash left'], 900, 900, 12, 0.05, 12, true, .2); 
}

Warrior.prototype.die = function () {
    this.animation = new Animation(Warriorspritesheets['die'], 900, 900, 15, 0.05, 15, false, .2); 
}

Warrior.prototype.throw = function () {
    this.animation = new Animation(Warriorspritesheets['throw'], 900, 900, 12, 0.08, 12, true, .2); 
    console.log("throw!!")
    this.game.addEntity(new Rock(this.game, AM.getAsset("./assets/sprites/Rock2.png"), this.x + 300, this.y + 75));

}

Warrior.prototype.idleLeft = function () {
    this.animation = new Animation(Warriorspritesheets['idle left'], 900, 900, 18, 0.05, 18, true, .2); 
}

Warrior.prototype.throwIdle = function () {
    console.log("throw!!")

    if(this.frames < 10){
        this.animation = new Animation(Warriorspritesheets['idle left'], 900, 900, 18, 0.05, 18, true, .2); 
        this.frames = this.frames + 1;
        console.log("throw!!")

    } else {
        this.throw();
        this.frames = 0;

    }
}


Warrior.prototype.swapWorld = function(){
    if (this.live === 0) {
        this.live = 1;
    } else {
        this.live = 0; 
    }
    this.underworld = !this.underworld;
}
