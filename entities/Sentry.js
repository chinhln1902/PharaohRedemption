//An array containing all the spriteSheets1
var spriteSheets1 = [];
function loadspriteSheets1(AM){
    //right
    spriteSheets1['dying'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Dying/Dying SpriteSheet.png");
    spriteSheets1['falling down'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Falling Down/Falling Down SpriteSheet.png");
    spriteSheets1['hurt'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Hurt/Hurt SpriteSheet.png");
    spriteSheets1['idle'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Idle/Idle SpriteSheet.png");
    spriteSheets1['idle blinking'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Idle Blinking/Idle Blinking SpriteSheet.png");
    spriteSheets1['jump loop'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Jump Loop/Jump Loop SpriteSheet.png"); 
    spriteSheets1['jump start'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Jump Start/Jump Start SpriteSheet.png");            
    spriteSheets1['kicking'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Kicking/Kicking SpriteSheet.png");
    spriteSheets1['run slashing'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Run Slashing/Run Slashing SpriteSheet.png");
    spriteSheets1['run throwing'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Run Throwing/Run Throwing SpriteSheet.png");
    spriteSheets1['running'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Running/Running SpriteSheet.png");
    spriteSheets1['slashing'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Slashing/Slashing SpriteSheet.png"); 
    spriteSheets1['slashing in the air'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Slashing in The Air/Slashing in The Air SpriteSheet.png");
    spriteSheets1['sliding'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Sliding/Sliding SpriteSheet.png");
    spriteSheets1['throwing'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Throwing/Throwing SpriteSheet.png");
    spriteSheets1['throwing in the air'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Throwing in The Air/Throwing in The Air SpriteSheet.png");
    spriteSheets1['walking'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Walking/Walking SpriteSheet.png"); 
    //left
    spriteSheets1['dying flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Dying/Dying SpriteSheet flip.png");
    spriteSheets1['falling down flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Falling Down/Falling Down SpriteSheet flip.png");
    spriteSheets1['hurt flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Hurt/Hurt SpriteSheet flip.png");
    spriteSheets1['idle flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Idle/Idle SpriteSheet flip.png");
    spriteSheets1['idle blinking flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Idle Blinking/Idle Blinking SpriteSheet flip.png");
    spriteSheets1['jump loop flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Jump Loop/Jump Loop SpriteSheet flip.png"); 
    spriteSheets1['jump start flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Jump Start/Jump Start SpriteSheet flip.png");            
    spriteSheets1['kicking flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Kicking/Kicking SpriteSheet flip.png");
    spriteSheets1['run slashing flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Run Slashing/Run Slashing SpriteSheet flip.png");
    spriteSheets1['run throwing flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Run Throwing/Run Throwing SpriteSheet flip.png");
    spriteSheets1['running flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Running/Running SpriteSheet flip.png");
    spriteSheets1['slashing flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Slashing/Slashing SpriteSheet flip.png"); 
    spriteSheets1['slashing in the air flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Slashing in The Air/Slashing in The Air SpriteSheet flip.png");
    spriteSheets1['sliding flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Sliding/Sliding SpriteSheet flip.png");
    spriteSheets1['throwing flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Throwing/Throwing SpriteSheet flip.png");
    spriteSheets1['throwing in the air flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Throwing in The Air/Throwing in The Air SpriteSheet flip.png");
    spriteSheets1['walking flip'] = AM.getAsset("./../assets/sprites/Egyptian Sentry/Walking/Walking SpriteSheet flip.png");
    
}



// Sentry "class". Represents the main character and all of his actions.
function Sentry(game, assetManager) {

    this.engine = game;
    this.AM = assetManager;   
    loadspriteSheets1(this.AM);
    console.log("number of loaded assets: "+assetManager.getNumberOfAssets());
    this.ctx = game.ctx;
    this.idle();
    Entity.call(this, game, 500, 250);
    this.name = "Sentry"; 

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

    //this.SentryController = new SentryController(this);
    this.underworld = false;
    // To check if Sentry is standing on platform or not.
    this.onPlatform = false;
}

//inheritence
Sentry.prototype = new Entity();
Sentry.prototype.constructor = Sentry;

//update is called once per frame
Sentry.prototype.update = function () {
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
Sentry.prototype.draw = function () {
    if (!this.underworld) return;
    //console.log(this.animation);
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

//sets state to idle
Sentry.prototype.idle = function () {
    if (this.direction === 'right'){
        this.animation = new Animation(spriteSheets1['idle'], 900, 900, 18, 0.05, 18, true, 0.2); //idle animation
    } else {
        this.animation = new Animation(spriteSheets1['idle flip'], 900, 900, 18, 0.05, 18, true, 0.2);
    }
    this.speed = 0;
    this.state = 'idle';
    this.previousState = 'idle';
    console.log("Sentry is idle");
}

//sets state to running
Sentry.prototype.runRight = function () {
    this.animation = new Animation(spriteSheets1['running'], 900, 900, 12, 0.05, 12, true, 0.2); //running right animation
    this.speed = 300;
    this.state = 'running';
    this.previousState = 'running';
    this.direction = 'right';
    console.log("Sentry is running right");
}

//sets state to running
Sentry.prototype.runLeft = function () {
    this.animation = new Animation(spriteSheets1['running flip'], 900, 900, 12, 0.05, 12, true, 0.2); //running left animation
    this.speed = -300;
    this.previousState = 'running';
    this.state = 'running';
    this.direction = 'left';
    console.log("Sentry is running left");
}

//ignore this for now
Sentry.prototype.walkRight = function () {
    this.animation = new Animation(spriteSheets1['walking'], 900, 900, 24, 0.05, 24, true, 0.2); //walking animation
    this.speed = 85;
    console.log("Sentry is walking");
}

//makes the Sentry jump
Sentry.prototype.jump = function () {
    this.state = 'jumping';
    this.isJumping = true;
    this.yVelocity = 15;
    this.previousAnimation = this.animation;
    if (this.direction === 'right'){
        this.animation = new Animation(spriteSheets1['jump start'], 900, 900, 6, 0.05, 6, false, 0.2); //jump start animation
    } else {
        this.animation = new Animation(spriteSheets1['jump start flip'], 900, 900, 6, 0.05, 6, false, 0.2); //jump start animation
    }
    this.playingTempAnimation = true;
    console.log("Sentry has jumped");
}

//makes the Sentry slash
Sentry.prototype.slash = function () {
    if (this.direction === 'right'){
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets1['slashing'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets1['slashing in the air'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets1['run slashing'], 900, 900, 12, 0.05, 12, false, 0.2);
        }   
    }else{
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets1['slashing flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets1['slashing in the air flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets1['run slashing flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        }
    }
    this.playingTempAnimation = true;
}

//makes the Sentry throw
Sentry.prototype.throw = function () {
    if (this.direction === 'right'){
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets1['throwing'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets1['throwing in the air'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets1['run throwing'], 900, 900, 12, 0.05, 12, false, 0.2);
        }   
        var comet = new Projectile(this.engine, AM.getAsset("./../assets/sprites/magic/PNG/comet/comet SpriteSheet.png"),
                "right", this.x + 10, this.y+10);
        this.engine.addEntity(comet);
    } else {
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets1['throwing flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets1['throwing in the air flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets1['run throwing flip'], 900, 900, 12, 0.05, 12, false, 0.2);
        }   
        var comet = new Projectile(this.engine, AM.getAsset("./../assets/sprites/magic/PNG/comet/comet SpriteSheet flip.png"),
               "left", this.x - 10, this.y+10);
        this.engine.addEntity(comet);
    }
    
    this.playingTempAnimation = true;
}

//makes the Sentry take damage
Sentry.prototype.takeDamage = function () {
    if (this.direction === 'right'){
        this.animation = new Animation(spriteSheets1['hurt'], 900, 900, 18, 0.05, 18, false, 0.2); 
    } else {
        this.animation = new Animation(spriteSheets1['hurt flip'], 900, 900, 18, 0.05, 18, false, 0.2); 
    }
    
    this.playingTempAnimation = true;
    console.log("took damage");
}

//makes the Sentry blink. only works when he idle
Sentry.prototype.blink = function () {
    if (this.direction === 'right'){
        this.animation = new Animation(spriteSheets1['idle blinking'], 900, 900, 18, 0.05, 18, false, 0.2); 
    } else {
        this.animation = new Animation(spriteSheets1['idle blinking flip'], 900, 900, 18, 0.05, 18, false, 0.2); 
    }
    
    this.playingTempAnimation = true;
    console.log("blinked");
}

//sets the animation back to the default for that state
Sentry.prototype.setToDefault = function () {
    if (this.direction === 'right'){
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets1['idle'], 900, 900, 18, 0.05, 18, true, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets1['jump loop'], 900, 900, 6, 0.05, 6, true, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets1['running'], 900, 900, 12, 0.05, 12, true, 0.2);
        }
    } else {
        if (this.state === 'idle'){
            this.animation = new Animation(spriteSheets1['idle flip'], 900, 900, 18, 0.05, 18, true, 0.2);
        } else if (this.state === 'jumping'){
            this.animation = new Animation(spriteSheets1['jump loop flip'], 900, 900, 6, 0.05, 6, true, 0.2);
        } else if (this.state === 'running'){
            this.animation = new Animation(spriteSheets1['running flip'], 900, 900, 12, 0.05, 12, true, 0.2);
        }
    }
    
    
    console.log("set to default");
}

//test method for debugging
Sentry.prototype.testAnimation = function () {
    //test here
    console.log("testing animation");
}

// called by the update method. controlls the animations.
function controlAnimation(Sentry){
    if(Sentry.playingTempAnimation && Sentry.animation.isDone()){
        Sentry.setToDefault();
    }
}

// called by the update method. controlls the jumping.
function controlJump(Sentry){
    //in the air
    if (Sentry.isJumping === true){
        //Sentry.yVelocity = Sentry.yVelocity - 0.5;
        Sentry.yVelocity -= 0.5;
        //Sentry.y = Sentry.y - Sentry.yVelocity;
        Sentry.y -= Sentry.yVelocity;
    }

    // Checking collision 
    for (var i = 0; i < platforms.length; i++) {
        var y = platforms[i];
        if (Sentry.collideWithPlatforms(platforms[i])) {
            Sentry.y = platforms[i].x + 100;
            Sentry.isJumping = false;
            Sentry.state = Sentry.previousState;
            Sentry.onPlatform = true;
            Sentry.setToDefault();
        } 
        if (Sentry.onPlatform === true) {
            if ((Sentry.x + 90) > (platforms[i].x + platforms[i].width)) {
                Sentry.isJumping = true;
                Sentry.onPlatform = false;
                Sentry.state = Sentry.previousState;
                Sentry.setToDefault();
            }
            if ((Sentry.x + 90) < (platforms[i].x)) {
                Sentry.isJumping = true;
                Sentry.onPlatform = false;
                Sentry.state = Sentry.previousState;
                Sentry.setToDefault();
            }
        } 
    }    

    // touching the ground
    if (Sentry.y > Sentry.groundLevel){
        Sentry.y = Sentry.groundLevel;
        if (Sentry.isJumping === true){
            Sentry.isJumping = false;
            Sentry.state = Sentry.previousState;
            Sentry.setToDefault();
        }
        console.log("debug");
    }
}

// called by the update method. controlls the movement.
function controlMovement(Sentry){
    if (Sentry.x > 1200) Sentry.x = -230;
    if (Sentry.x < -230) Sentry.x = 1200;
    //console.log("debug");
}

Sentry.prototype.getState = function(){
    return this.state;
}
Sentry.prototype.setState = function(theState){
    this.state = theState;
}

Sentry.prototype.getDirection = function(){
    return this.direction;
}

Sentry.prototype.getY = function(){
    return this.y;
}
Sentry.prototype.getGround = function(){
    return this.groundLevel;
}

Sentry.prototype.setDirection = function(theDirection){
    this.direction = theDirection;
}
Sentry.prototype.setPreviousState = function(state){
    this.previousState = state;
}

Sentry.prototype.swapWorld = function(){
    this.underworld = !this.underworld;
}

Sentry.prototype.isInAir = function(){
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

Sentry.prototype.collideRight = function () {
    return this.Sentry.x + this.Platform.x > 800;
}

Sentry.prototype.collideLeft = function () {
    return this.Sentry.x - this.Platform.x > 0;
}

Sentry.prototype.collideWithPlatforms = function (other) {
    var SentryX =(this.x < other.x + other.width);
    var otherX = (this.x + 80 + this.width > other.x);
    var result = (this.y - 90 === other.x) && (this.x + 90 < other.x + other.width && this.x - 80 + this.width > other.x);
    return (this.y - 90 > other.x) && (this.x + 90 < other.x + other.width) && (this.x - 80 + this.width > other.x);
}

Sentry.prototype.collideWithProjectile = function(other) {
    if ((other.x - 30) < this.x && this.x < (other.x + 30)) {
        return true; 
   } 
}

//     debugger;
//     var x = this.x < (other.x + other.width); //Sentry getting close to the platform from the right
//     var x1 = (this.x + this.width) > other.x; //Sentry getting clsoe to the platform from the left
//     return (this.y - 90 === other.x) && (this.x + 90 < other.x + other.width && this.x - 80 + this.width > other.x);
// }





