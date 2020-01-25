//An array containing all the spritesheets
var spriteSheets = [];
function loadSpriteSheets(AM){
    spriteSheets['dying'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Dying/Dying SpriteSheet.png");
    spriteSheets['falling down'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Falling Down/Falling Down SpriteSheet.png");
    spriteSheets['hurt'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Hurt/Hurt SpriteSheet.png");
    spriteSheets['idle'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet.png");
    spriteSheets['idle left'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet flip.png");
    spriteSheets['idle blinking'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Idle Blinking/Idle Blinking SpriteSheet.png");
    spriteSheets['jump loop'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Jump Loop/Jump Loop SpriteSheet.png"); 
    spriteSheets['jump start'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Jump Start/Jump Start SpriteSheet.png");  
    spriteSheets['kicking'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Kicking/Kicking SpriteSheet.png");
    spriteSheets['run slashing'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Run Slashing/Run Slashing SpriteSheet.png");
    spriteSheets['run throwing'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Run Throwing/Run Throwing SpriteSheet.png");
    spriteSheets['running'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Running/Running SpriteSheet.png");
    spriteSheets['running left'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Running/Running SpriteSheet flip.png");
    spriteSheets['slashing'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Slashing/Slashing SpriteSheet.png"); 
    spriteSheets['slashing in the air'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Slashing in The Air/Slashing in The Air SpriteSheet.png");
    spriteSheets['sliding'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Sliding/Sliding SpriteSheet.png");
    spriteSheets['throwing'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Throwing/Throwing SpriteSheet.png");
    spriteSheets['throwing in the air'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Throwing in The Air/Throwing in The Air SpriteSheet.png");
    spriteSheets['walking'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Walking/Walking SpriteSheet.png"); 

}



// Pharaoh "class". Represents the main character and all of his actions.
function Pharaoh(game, assetManager) {

    this.AM = assetManager;   
    loadSpriteSheets(this.AM);
    this.ctx = game.ctx;
    this.idle();
    Entity.call(this, game, 0, 250);

    //state is a string which can be either: 'idle' 'jumping' or 'moving'
    this.state = "idle"; 
    //direction is a string which can be either: 'left' or 'right'
    this.direction = "right";

    //jump variables
    this.groundLevel = 525;
    this.y = this.groundLevel;
    this.yVelocity = 0;
    this.isJumping = false;

    // this is true if we only want to play the animation once
    this.playingTempAnimation = false;

    //this.pharaohController = new pharaohController(this);
}

//inheritence
Pharaoh.prototype = new Entity();
Pharaoh.prototype.constructor = Pharaoh;

//update is called once per frame
Pharaoh.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    controlAnimation(this);
    controlMovement(this);
    controlJump(this);
    Entity.prototype.update.call(this);
}

//draw is called after every update
Pharaoh.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

//sets state to idle
Pharaoh.prototype.idle = function () {
    this.animation = new Animation(spriteSheets['idle'], 900, 900, 18, 0.05, 18, true, 0.2); //idle animation
    this.speed = 0;
    console.log("pharaoh is idle");
}

//sets state to idle left
Pharaoh.prototype.idleLeft = function () {
    this.animation = new Animation(spriteSheets['idle left'], 900, 900, 18, 0.05, 18, true, 0.2); //idle animation
    this.speed = 0;
    console.log("pharaoh is idle");
}

//sets state to running
Pharaoh.prototype.runRight = function () {
    this.animation = new Animation(spriteSheets['running'], 900, 900, 12, 0.05, 12, true, 0.2); //running right animation
    this.speed = 300;
    this.state = 'running';
    this.direction = "right";
    console.log("pharaoh is running right");
}

//sets state to running
Pharaoh.prototype.runLeft = function () {
    this.animation = new Animation(spriteSheets['running left'], 900, 900, 12, 0.05, 12, true, 0.2); //running left animation
    this.speed = -300;
    this.state = 'running left';
    this.direction = 'left';
    console.log("pharaoh is running left");
}

//ignore this for now
Pharaoh.prototype.walkRight = function () {
    this.animation = new Animation(spriteSheets['walking'], 900, 900, 24, 0.05, 24, true, 0.2); //walking animation
    this.speed = 85;
    console.log("pharaoh is walking");
}

//makes the pharaoh jump
Pharaoh.prototype.jump = function () {
    this.state = 'jumping';
    this.isJumping = true;
    this.yVelocity = 10;
    this.previousAnimation = this.animation;
    this.animation = new Animation(spriteSheets['jump start'], 900, 900, 6, 0.05, 6, false, 0.2); //jump start animation
    this.playingTempAnimation = true;
    console.log("pharaoh has jumped");
}

//makes the pharaoh slash
Pharaoh.prototype.slash = function () {
    if (this.state === 'idle'){
        this.animation = new Animation(spriteSheets['slashing'], 900, 900, 12, 0.05, 12, false, 0.2);
    } else if (this.state === 'jumping'){
        this.animation = new Animation(spriteSheets['slashing in the air'], 900, 900, 12, 0.05, 12, false, 0.2);
    } else if (this.state === 'running'){
        this.animation = new Animation(spriteSheets['run slashing'], 900, 900, 12, 0.05, 12, false, 0.2);
    }   
    this.playingTempAnimation = true;
}

//makes the pharaoh throw
Pharaoh.prototype.throw = function () {
    if (this.state === 'idle'){
        this.animation = new Animation(spriteSheets['throwing'], 900, 900, 12, 0.05, 12, false, 0.2);
    } else if (this.state === 'jumping'){
        this.animation = new Animation(spriteSheets['throwing in the air'], 900, 900, 12, 0.05, 12, false, 0.2);
    } else if (this.state === 'running'){
        this.animation = new Animation(spriteSheets['run throwing'], 900, 900, 12, 0.05, 12, false, 0.2);
    }   
    this.playingTempAnimation = true;
}

//makes the pharaoh take damage
Pharaoh.prototype.takeDamage = function () {
    this.animation = new Animation(spriteSheets['hurt'], 900, 900, 18, 0.05, 18, false, 0.2); 
    this.playingTempAnimation = true;
    console.log("took damage");
}

//makes the pharaoh blink. only works when he idle
Pharaoh.prototype.blink = function () {
    this.animation = new Animation(spriteSheets['idle blinking'], 900, 900, 18, 0.05, 18, false, 0.2); 
    this.playingTempAnimation = true;
    console.log("blinked");
}

//sets the animation back to the default for that state
Pharaoh.prototype.setToDefault = function () {
    if (this.state === 'idle'){
        this.animation = new Animation(spriteSheets['idle'], 900, 900, 18, 0.05, 18, true, 0.2);
    } else if (this.state === 'jumping'){
        this.animation = new Animation(spriteSheets['jump loop'], 900, 900, 6, 0.05, 6, true, 0.2);
    } else if (this.state === 'running'){
        this.animation = new Animation(spriteSheets['running'], 900, 900, 12, 0.05, 12, true, 0.2);
    }
    
    console.log("set to default");
}

//test method for debugging
Pharaoh.prototype.testAnimation = function () {
    //test here
    console.log("testing animation");
}

// called by the update method. controlls the animations.
function controlAnimation(pharaoh){
    if(pharaoh.playingTempAnimation && pharaoh.animation.isDone()){
        pharaoh.setToDefault();
    }
}

// called by the update method. controlls the jumping.
function controlJump(pharaoh){
    //in the air
    if (pharaoh.isJumping === true){
        pharaoh.yVelocity -= 0.5;
        pharaoh.y -= pharaoh.yVelocity;
    }
    // touching the ground
    if (pharaoh.y > pharaoh.groundLevel){
        pharaoh.y = pharaoh.groundLevel;
        if (pharaoh.isJumping === true){
            pharaoh.isJumping = false; 
            pharaoh.state = null;
            pharaoh.setToDefault();
        }       
        console.log("debug"); 
    }
}

// called by the update method. controlls the movement.
function controlMovement(pharaoh){
    if (pharaoh.x > 1200) pharaoh.x = -230;
    if (pharaoh.x < -230) pharaoh.x = 1200;
    //console.log("debug");
}

Pharaoh.prototype.getState = function(){
    return this.state;
}
Pharaoh.prototype.setState = function(theState){
    this.state = theState;
}
Pharaoh.prototype.getDirection = function(){
    return this.direction;
}
Pharaoh.prototype.setDirection = function(theDirection){
    this.direction = theDirection;
}
