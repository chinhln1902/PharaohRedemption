var anubisspritesheets = [];
function loadanubisspritesheets(AM) {
    anubisspritesheets['run right'] = AM.getAsset("./assets/sprites/Anubis/Running Right.png"); 
    anubisspritesheets['run left'] = AM.getAsset("./assets/sprites/Anubis/Running Left.png"); 
    anubisspritesheets['idle right'] = AM.getAsset("./assets/sprites/Anubis/Idle Right.png"); 
    anubisspritesheets['idle left'] = AM.getAsset("./assets/sprites/Anubis/Idle Left.png"); 
    anubisspritesheets['strike left'] = AM.getAsset("./assets/sprites/Anubis/Strike Left.png"); 
    anubisspritesheets['strike right'] = AM.getAsset("./assets/sprites/Anubis/Strike Right.png"); 
    anubisspritesheets['slide right'] = AM.getAsset("./assets/sprites/Anubis/Slide Right.png"); 
    anubisspritesheets['slide left'] = AM.getAsset("./assets/sprites/Anubis/Slide Left.png"); 
    anubisspritesheets['die right'] = AM.getAsset("./assets/sprites/Anubis/Die Right.png"); 
    anubisspritesheets['die left'] = AM.getAsset("./assets/sprites/Anubis/Die Left.png"); 
    anubisspritesheets['slash right'] = AM.getAsset("./assets/sprites/Anubis/Slash Right.png"); 
    anubisspritesheets['slash left'] = AM.getAsset("./assets/sprites/Anubis/Slash Left.png"); 
    anubisspritesheets['jump loop right'] = AM.getAsset("./assets/sprites/Anubis/Jump Loop Right.png"); 
    anubisspritesheets['jump loop left'] = AM.getAsset("./assets/sprites/Anubis/Jump Loop Left.png"); 
    anubisspritesheets['jump start right'] = AM.getAsset("./assets/sprites/Anubis/Jump Start Right.png"); 
    anubisspritesheets['jump start left'] = AM.getAsset("./assets/sprites/Anubis/Jump Start Left.png"); 
    anubisspritesheets['hurt right'] = AM.getAsset("./assets/sprites/Anubis/Hurt Right.png"); 
    anubisspritesheets['hurt left'] = AM.getAsset("./assets/sprites/Anubis/Hurt Left.png"); 
    anubisspritesheets['jump cycle left'] = AM.getAsset("./assets/sprites/Anubis/Jump Cycle Left.png"); 
    anubisspritesheets['jump cycle right'] = AM.getAsset("./assets/sprites/Anubis/Jump Cycle Right.png"); 

}

//inheritence
Anubis.prototype = new Entity();
Anubis.prototype.constructor = Anubis;

function Anubis(pharaoh, game, AssetManager, startX, startY) {
    this.pharaoh = pharaoh;
    this.AM = AssetManager; 
    loadanubisspritesheets(this.AM); 
    this.idle();
    this.x = startX;
    this.y = startY;
    this.speed = 0;
    this.type = "enemy"; 
    this.game = game;
    this.ctx = game.ctx;
    this.name = "Anubis"; 
    this.live = 1; 
    this.dead = false;
    this.aftermath = 0; 
    this.frames = 0;
    this.direction = "left";
    this.state = "idle";
    this.health = 5;
    this.playingTempAnimation = false;
    this.immune = 55; 
    this.scale = 0.28;
    this.counter = 0;
    this.runTimes = 0;
    this.flag = false;
    this.isJumping = false;
    this.attacking = false;
   // this.winCount = 0;
    this.won = false;

    this.hud = new Hearts(AM.getAsset("./assets/platforms/PNG/Collectable/heart black.png"), this.game, 960, 25);
    this.game.addEntity(this.hud);

    this.boundingBox = new BoundingBox(this.x + 100, this.y + 65, this.animation.frameWidth * this.scale - 170, this.animation.frameHeight * this.scale - 110);
}


Anubis.prototype.draw = function () {
    if (this.live > 0 || this.win  === true) {
        this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    }
}

Anubis.prototype.update = function () {
        
        if (this.live === 0) return;
        this.x += this.game.clockTick * this.speed;
        this.chooseAction();
        this.controlJump(this);
        controlAnimation(this);

        this.immune++; 
        this.counter++;

        Entity.prototype.update.call(this);
        if (this.dead) this.aftermath++;
        if (this.aftermath >= 1) this.removeFromWorld = true; 

        for (var i = 0; i < this.game.entities.length; i++) {
            var ent = this.game.entities[i];
            if (ent.name === 'comet') {
                if (this.collide(ent)) {
                this.takeDamage(); 
                }
            }
            if (ent.name === 'pharaoh' && ent.attacking === true) {
                if (this.collideSlash(ent)) {
                    this.takeDamage(); 
                }
            }
            
            if (ent.name === 'hypno') {
                if (this.collideSlash(ent)) {
                    //this.die(); 
                    //Freeze character
                }
            }      
        } 
    } 


Anubis.prototype.chooseAction = function() {

    if (this.runTimes < 1){

        if (this.flag){
            if (this.counter < 1){         
                debugger;
                this.direction = "right";
                this.run();
                console.log("running right");
    
            }
            if (this.counter > 70 && this.counter <= 85){
                this.direction = "left";
                this.run();
            }
            if (this.counter === 150){ //was 200
                this.counter = 0;
                this.runTimes ++;

            }

        } else {

            if (this.counter < 1){
                this.direction = "left";
                this.run();
    
            }
            if (this.counter === 160){
                this.direction = "right";
                this.run();
            }
            if (this.counter === 180){ //was 200
                this.counter = 0;
                this.runTimes ++;

            }
        }
        
    } else if (this.counter === 1) {
        this.checkDirection();
        this.idle();

    } else if (this.counter === 3){
        this.checkDirection();
        this.strike();

    } else if (this.counter === 50){
        this.checkDirection();
        this.slide();

    } else if (this.counter === 100){
        this.checkDirection();  
        this.idle();

    } else if (this.counter === 150){
        this.checkDirection();  
        this.jump();

    } else if (this.counter === 180){
        this.checkDirection();  
        this.slash();

    } 
    else if (this.counter === 220){
        this.checkDirection();  
        this.idle();
 

    }  else if (this.counter >= 230){
        this.checkDirection();  
        this.run();
        this.runTimes = 0;
        this.counter = 0;
    }

    !this.flag;
                  
}
Anubis.prototype.collide = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
        return true; 
   }
}

Anubis.prototype.collideSlash = function(other) {
    if ((other.x - 300) < this.x && this.x < (other.x + 300) && (other.y - 70) < this.y && this.y < (other.y + 70)) {
        return true; 
   }
}
Anubis.prototype.checkDirection = function() {

    if (this.pharaoh.x > this.x){

        this.direction = "right";
    } else {
        this.direction = "left";
    }
}

Anubis.prototype.takeDamage = function() {
    if (this.immune < 45) return; 
    this.immune = 0; 
    this.health -= 1;
    if (this.direction === "left"){
        this.animation = new Animation(anubisspritesheets['hurt left'], 900, 900, 12, 0.05, 12, false, this.scale); 

    } else {
        this.animation = new Animation(anubisspritesheets['hurt right'], 900, 900, 12, 0.05, 12, false, this.scale);
    }

    this.hud.setHealthOpposite(this.health);
    console.log("taking damage");

    if (this.health <= 0) {
        this.die(); 
        var MagicSprite = new Magic(this.pharaoh, this.game, pharaohX, this.pharaoh.getY());
        this.game.addEntity(MagicSprite);
        this.pharaoh.won = true;
        this.live = 0;
        this.removeFromWorld = true;
        this.boundingBox.removeFromWorld = true;
        this.won = true;
        //this.pharaoh.speed = 0;
        return; 
    }

    this.playingTempAnimation = true;

}
// called by the update method. controlls the animations.
function controlAnimation(anubis){
    if(anubis.playingTempAnimation && anubis.animation.isDone()){
        anubis.setToDefault();
    }
}

Anubis.prototype.setToDefault = function() {
    if (this.direction === "right"){

        if (this.state === 'idle'){
            this.idle();                             
        } else if (this.state === 'jumping'){
            this.jump();
        } else if (this.state === 'running'){
            this.run();
        } else if (this.state === 'slide') {
            this.slide();
        }
    } else {
        if (this.state === "idle"){
            this.idle();

        } else if (this.state === 'jumping'){
            this.jump()
        } else if (this.state === 'running'){
            this.run();                               
        } else if (this.state === 'slide') {
            this.slide();
        }
    }
}

Anubis.prototype.run = function() {
    if (this.direction === "right"){
        this.speed = 300;
        this.animation = new Animation(anubisspritesheets['run right'], 900, 900, 12, 0.05, 12, true, this.scale); 

    } else {
        this.speed = -300;
        this.animation = new Animation(anubisspritesheets['run left'], 900, 900, 12, 0.06, 12, true, this.scale); 
    }
    this.state = "running";
    //this.playingTempAnimation = false;

}
Anubis.prototype.controlJump = function() {
    if (this.isJumping){
        this.boundingBox = new BoundingBox(this.x + 100, this.y + 65, this.animation.frameWidth * this.scale - 170, this.animation.frameHeight * this.scale - 110);
        this.yVelocity -= 1.00; 
        this.y -= this.yVelocity;

        if (this.y >= 430.5){
            this.isJumping = false;
            this.yVelocity = 0; 
        }
        for(var i = 0; i < platforms.length; i++) {
            var pf = platforms[i];
            if (this.boundingBox.collide(pf.boundingBox) && this.boundingBox.top < pf.boundingBox.bottom) {
                this.yVelocity = 0;
                break;
            }
        }
    } else {
        this.boundingBox = new BoundingBox(this.x + 100, this.y + 65, this.animation.frameWidth * this.scale - 170, this.animation.frameHeight * this.scale - 110);
        for(var i = 0; i < platforms.length; i++) {
            var pf = platforms[i];
                if (this.boundingBox.collide(pf.boundingBox)) {
                    
                // if(this.direction === "right") {
                //     debugger;
                //     this.idle();
                //     this.x = pf.boundingBox.left - 50;
                //     this.setToDefault();
                // } else 
                if (this.direction === "left") {
                    
                    this.idle();
                    this.x = pf.boundingBox.right - this.animation.frameWidth * this.scale + 170;
                    this.checkDirection();  
                    this.setToDefault();
                    break;
                } else if (this.direction === "right") {
                    debugger;
                    this.idle();
                    this.x = pf.boundingBox.left - this.animation.frameWidth * this.scale + 50;
                    this.checkDirection();  
                    this.setToDefault();
                    break;
                }
            }
        }
    }   
}

Anubis.prototype.jump = function() {
    this.ctx.save();
    this.isJumping = true;
    this.yVelocity = 20;//27;
    this.speed = 0;

    if (this.direction === "right"){
        this.animation = new Animation(anubisspritesheets['jump cycle right'], 900, 900, 18, 0.05, 18, true, this.scale); 

    } else {
        this.animation = new Animation(anubisspritesheets['jump cycle left'], 900, 900, 18, 0.06, 18, true, this.scale); 
    }

    this.state = "jumping";
    //this.playingTempAnimation = true;
    this.ctx.restore();
    this.attacking = false;

}


Anubis.prototype.idle = function() {
    if (this.direction === "right"){
        this.animation = new Animation(anubisspritesheets['idle right'], 900, 900, 18, 0.05, 18, true, this.scale); 

    } else {
        this.animation = new Animation(anubisspritesheets['idle left'], 900, 900, 18, 0.05, 18, true, this.scale); 

    }
    this.state = "idle";
    this.speed = 0;
    this.attacking = false;

    //this.playingTempAnimation = false;

}

Anubis.prototype.slash = function() {
    if (this.direction === "right"){
        this.animation = new Animation(anubisspritesheets['slash right'], 900, 900, 12, 0.05, 12, false, this.scale); 

    } else {
        this.animation = new Animation(anubisspritesheets['slash left'], 900, 900, 12, 0.05, 12, false, this.scale); 

    }
    this.playingTempAnimation = true;
    this.state = "slash";
    this.attacking = true;
}

Anubis.prototype.die = function() {
    if (this.direction === "right"){
        this.animation = new Animation(anubisspritesheets['die right'], 900, 900, 15, 0.05, 15, false, this.scale); 

    } else {
        this.animation = new Animation(anubisspritesheets['die left'], 900, 900, 15, 0.05, 15, false, this.scale);
    }
    this.live = 0;
    this.dead = true; 
    this.attacking = false;

}

Anubis.prototype.strike = function() {
    if (this.direction === "right"){
        this.animation = new Animation(anubisspritesheets['strike right'], 900, 900, 11, 0.05, 11, false, this.scale); 

    } else {
        this.animation = new Animation(anubisspritesheets['strike left'], 900, 900, 11, 0.05, 11, false, this.scale); 

    }
    pharaohX = this.pharaoh.getX();
    this.game.addEntity(new Thunder(this.pharaoh, this.game, pharaohX,  this.pharaoh.getY() - 20));
    this.speed = 0;
    this.state === "strike";
    this.attacking = false;

}


Anubis.prototype.slide = function () {
    if (this.direction === "right"){
        this.animation = new Animation(anubisspritesheets['slide right'], 900, 900, 6, 0.05, 6, true, this.scale);
        this.speed = 350;

    } else {
        this.animation = new Animation(anubisspritesheets['slide left'], 900, 900, 6, 0.05, 6, true, this.scale); 
        this.speed = -350;

    }
    this.state = "slide";
    this.attacking = false;

}

Anubis.prototype.hurt = function() {
    if (this.direction === "right"){
        this.animation = new Animation(anubisspritesheets['hurt left'], 900, 900, 12, 0.05, 12, false, this.scale); 
    } else {
        this.animation = new Animation(anubisspritesheets['hurt right'], 900, 900, 12, 0.05, 12, false, this.scale);
    }
    this.playingTempAnimation = true;
    this.speed = 0;
    this.attacking = false;


}



