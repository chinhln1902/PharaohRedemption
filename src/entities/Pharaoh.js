//An array containing all the spritesheets
var spriteSheets = [];
function loadSpriteSheets(AM){
    //right
    spriteSheets['dying'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Dying/Dying SpriteSheet.png");
    spriteSheets['falling down'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Falling Down/Falling Down SpriteSheet.png");
    spriteSheets['hurt'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Hurt/Hurt SpriteSheet.png");
    spriteSheets['idle'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet.png");
    spriteSheets['idle blinking'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Idle Blinking/Idle Blinking SpriteSheet.png");
    spriteSheets['jump loop'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Jump Loop/Jump Loop SpriteSheet.png"); 
    spriteSheets['jump start'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Jump Start/Jump Start SpriteSheet.png");            
    spriteSheets['kicking'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Kicking/Kicking SpriteSheet.png");
    spriteSheets['run slashing'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Run Slashing/Run Slashing SpriteSheet.png");
    spriteSheets['run throwing'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Run Throwing/Run Throwing SpriteSheet.png");
    spriteSheets['running'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Running/Running SpriteSheet.png");
    spriteSheets['slashing'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Slashing/Slashing SpriteSheet.png"); 
    spriteSheets['slashing in the air'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Slashing in The Air/Slashing in The Air SpriteSheet.png");
    spriteSheets['sliding'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Sliding/Sliding SpriteSheet.png");
    spriteSheets['throwing'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Throwing/Throwing SpriteSheet.png");
    spriteSheets['throwing in the air'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Throwing in The Air/Throwing in The Air SpriteSheet.png");
    spriteSheets['walking'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Walking/Walking SpriteSheet.png"); 
    //left
    spriteSheets['dying flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Dying/Dying SpriteSheet flip.png");
    spriteSheets['falling down flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Falling Down/Falling Down SpriteSheet flip.png");
    spriteSheets['hurt flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Hurt/Hurt SpriteSheet flip.png");
    spriteSheets['idle flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet flip.png");
    spriteSheets['idle blinking flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Idle Blinking/Idle Blinking SpriteSheet flip.png");
    spriteSheets['jump loop flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Jump Loop/Jump Loop SpriteSheet flip.png"); 
    spriteSheets['jump start flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Jump Start/Jump Start SpriteSheet flip.png");            
    spriteSheets['kicking flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Kicking/Kicking SpriteSheet flip.png");
    spriteSheets['run slashing flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Run Slashing/Run Slashing SpriteSheet flip.png");
    spriteSheets['run throwing flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Run Throwing/Run Throwing SpriteSheet flip.png");
    spriteSheets['running flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Running/Running SpriteSheet flip.png");
    spriteSheets['slashing flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Slashing/Slashing SpriteSheet flip.png"); 
    spriteSheets['slashing in the air flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Slashing in The Air/Slashing in The Air SpriteSheet flip.png");
    spriteSheets['sliding flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Sliding/Sliding SpriteSheet flip.png");
    spriteSheets['throwing flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Throwing/Throwing SpriteSheet flip.png");
    spriteSheets['throwing in the air flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Throwing in The Air/Throwing in The Air SpriteSheet flip.png");
    spriteSheets['walking flip'] = AM.getAsset("./../assets/sprites/Egyptian Mummy/Walking/Walking SpriteSheet flip.png");
    
}



// Pharaoh "class". Represents the main character and all of his actions.
function Pharaoh(game, assetManager) {

    this.engine = game;
    this.AM = assetManager;   
    loadSpriteSheets(this.AM);
    console.log("number of loaded assets: "+assetManager.getNumberOfAssets());
    this.ctx = game.ctx;
    this.idle();
    Entity.call(this, game, 500, 250);
    this.name = "pharaoh"; 

    //state is a string which can be either: 'idle' 'jumping' or 'moving'
    this.state = "idle"; 
    //direction is a string which can be either: 'left' or 'right'
    this.direction = "right";
    this.x = 500; 
    //jump variables
    this.width = 200;
    this.height = 200;
    this.groundLevel = 490;
    this.y = this.groundLevel;
    this.yVelocity = 0;
    this.isJumping = false;
    this.width = 180; 

    // this is true if we only want to play the animation once
    this.playingTempAnimation = false;

    //this.pharaohController = new pharaohController(this);
    this.underworld = false;
    // To check if pharaoh is standing on platform or not.
    this.onPlatform = false;
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
    for (var i = 0; i < this.game.entities.length; i++) {
        var ent = this.game.entities[i];
        if (ent.name === "arrow") { 
            if (this.collideWithProjectile(ent)) { 
                console.log("collided"); 
            }
        }
    }   
    //console.log("spam!");
    
}

//draw is called after every update
Pharaoh.prototype.draw = function () {
    if (this.underworld) return;
    //console.log(this.animation);
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

//sets state to idle
Pharaoh.prototype.idle = function () {
    if (this.direction === 'right'){
        this.animation = new Animation(spriteSheets['idle'], 900, 900, 18, 0.05, 18, true, 0.2); //idle animation
    } else {
        this.animation = new Animation(spriteSheets['idle flip'], 900, 900, 18, 0.05, 18, true, 0.2);
    }
    this.speed = 0;
    this.state = 'idle';
    this.previousState = 'idle';
    console.log("pharaoh is idle");
}

//sets state to running
Pharaoh.prototype.runRight = function () {
    this.animation = new Animation(spriteSheets['running'], 900, 900, 12, 0.05, 12, true, 0.2); //running right animation
    this.speed = 300;
    this.state = 'running';
    this.previousState = 'running';
    this.direction = 'right';
    console.log("pharaoh is running right");
}

//sets state to running
Pharaoh.prototype.runLeft = function () {
    this.animation = new Animation(spriteSheets['running flip'], 900, 900, 12, 0.05, 12, true, 0.2); //running left animation
    this.speed = -300;
    this.previousState = 'running';
    this.state = 'running';
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
    this.yVelocity = 15;
    this.previousAnimation = this.animation;
    if (this.direction === 'right'){
        this.animation = new Animation(spriteSheets['jump start'], 900, 900, 6, 0.05, 6, false, 0.2); //jump start animation
    } else {
        this.animation = new Animation(spriteSheets['jump start flip'], 900, 900, 6, 0.05, 6, false, 0.2); //jump start animation
    }
    this.playingTempAnimation = true;
    console.log("pharaoh has jumped");
}

//makes the pharaoh slash
Pharaoh.prototype.slash = function () {
    if (this.direction === 'right'){
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets['slashing'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets['slashing in the air'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets['run slashing'], 900, 900, 12, 0.05, 12, false, 0.2);
        }   
    }else{
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets['slashing flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets['slashing in the air flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets['run slashing flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        }
    }
    this.playingTempAnimation = true;
}

//makes the pharaoh throw
Pharaoh.prototype.throw = function () {
    if (this.direction === 'right'){
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets['throwing'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets['throwing in the air'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets['run throwing'], 900, 900, 12, 0.05, 12, false, 0.2);
        }   
        var comet = new Projectile(this.engine, AM.getAsset("./../assets/sprites/magic/PNG/comet/comet SpriteSheet.png"),
                "right", this.x + 10, this.y+10);
        this.engine.addEntity(comet);
    } else {
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets['throwing flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets['throwing in the air flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets['run throwing flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        }   
        var comet = new Projectile(this.engine, AM.getAsset("./../assets/sprites/magic/PNG/comet/comet SpriteSheet flip.png"),
               "left", this.x - 10, this.y+10);
        this.engine.addEntity(comet);
    }
    
    this.playingTempAnimation = true;
}

//makes the pharaoh take damage
Pharaoh.prototype.takeDamage = function () {
    if (this.direction === 'right'){
        this.animation = new Animation(spriteSheets['hurt'], 900, 900, 18, 0.05, 18, false, 0.2); 
    } else {
        this.animation = new Animation(spriteSheets['hurt flip'], 900, 900, 18, 0.05, 18, false, 0.2); 
    }
    
    this.playingTempAnimation = true;
    console.log("took damage");
}

//makes the pharaoh blink. only works when he idle
Pharaoh.prototype.blink = function () {
    if (this.direction === 'right'){
        this.animation = new Animation(spriteSheets['idle blinking'], 900, 900, 18, 0.05, 18, false, 0.2); 
    } else {
        this.animation = new Animation(spriteSheets['idle blinking flip'], 900, 900, 18, 0.05, 18, false, 0.2); 
    }
    
    this.playingTempAnimation = true;
    console.log("blinked");
}

//sets the animation back to the default for that state
Pharaoh.prototype.setToDefault = function () {
    if (this.direction === 'right'){
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets['idle'], 900, 900, 18, 0.05, 18, true, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets['jump loop'], 900, 900, 6, 0.05, 6, true, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets['running'], 900, 900, 12, 0.05, 12, true, 0.2);
        }
    } else {
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets['idle flip'], 900, 900, 18, 0.05, 18, true, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets['jump loop flip'], 900, 900, 6, 0.05, 6, true, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets['running flip'], 900, 900, 12, 0.05, 12, true, 0.2);
        }
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
        //pharaoh.yVelocity = pharaoh.yVelocity - 0.5;
        pharaoh.yVelocity -= 0.5;
        //pharaoh.y = pharaoh.y - pharaoh.yVelocity;
        pharaoh.y -= pharaoh.yVelocity;
    }

    // Checking collision 
    for (var i = 0; i < platforms.length; i++) {
        var y = platforms[i];
        if (pharaoh.collideWithPlatforms(platforms[i])) {
            pharaoh.y = platforms[i].x + 100;
            pharaoh.isJumping = false;
            pharaoh.state = pharaoh.previousState;
            pharaoh.onPlatform = true;
            pharaoh.setToDefault();
        } 
        if (pharaoh.onPlatform === true) {
            if ((pharaoh.x + 90) > (platforms[i].x + platforms[i].width)) {
                pharaoh.onPlatform = false;
                pharaoh.y = pharaoh.groundLevel;
            }
            if ((pharaoh.x + 90) < (platforms[i].x)) {
                pharaoh.onPlatform = false;
                pharaoh.y = pharaoh.groundLevel;
            }
        } 
    }    

    // touching the ground
    if (pharaoh.y > pharaoh.groundLevel){
        pharaoh.y = pharaoh.groundLevel;
        if (pharaoh.isJumping === true){
            pharaoh.isJumping = false;
            pharaoh.state = pharaoh.previousState;
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

Pharaoh.prototype.getY = function(){
    return this.y;
}
Pharaoh.prototype.getGround = function(){
    return this.groundLevel;
}

Pharaoh.prototype.setDirection = function(theDirection){
    this.direction = theDirection;
}
Pharaoh.prototype.setPreviousState = function(state){
    this.previousState = state;
}

Pharaoh.prototype.swapWorld = function(){
    this.underworld = !this.underworld;
}

Pharaoh.prototype.isInAir = function(){
    if(this.x > groundLevel){
        return true;
    } else {
        return false;
    }
}

function distance(a,b) {
    var difX = a.x - b.x;
    var difY = a.y - b.y;
    var result = Math.sqrt(difX * difX + difY * difY);
    return Math.sqrt(difX * difX + difY * difY);
}

Pharaoh.prototype.collideRight = function () {
    return this.Pharaoh.x + this.Platform.x > 800;
}

Pharaoh.prototype.collideLeft = function () {
    return this.Pharaoh.x - this.Platform.x > 0;
}

Pharaoh.prototype.collideWithPlatforms = function (other) {
    var pharaohX =(this.x < other.x + other.width);
    var otherX = (this.x + 80 + this.width > other.x);
    var result = (this.y - 90 === other.x) && (this.x + 90 < other.x + other.width && this.x - 80 + this.width > other.x);
    return (this.y - 90 > other.x) && (this.x + 90 < other.x + other.width) && (this.x - 80 + this.width > other.x);
}

Pharaoh.prototype.collideWithProjectile = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30)) {
        return true; 
   } 
}

//     debugger;
//     var x = this.x < (other.x + other.width); //pharaoh getting close to the platform from the right
//     var x1 = (this.x + this.width) > other.x; //pharaoh getting clsoe to the platform from the left
//     return (this.y - 90 === other.x) && (this.x + 90 < other.x + other.width && this.x - 80 + this.width > other.x);
// }





