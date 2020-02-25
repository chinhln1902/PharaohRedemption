//An array containing all the spritesheets
var spriteSheets = [];
const GROUND_LEVEL = 490;
const SCALE = 0.2;
function loadSpriteSheets(AM){
    //mummy
    //right
    spriteSheets['dying'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Dying/Dying SpriteSheet.png");
    spriteSheets['falling down'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Falling Down/Falling Down SpriteSheet.png");
    spriteSheets['hurt'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Hurt/Hurt SpriteSheet.png");
    spriteSheets['idle'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet.png");
    spriteSheets['idle blinking'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Idle Blinking/Idle Blinking SpriteSheet.png");
    spriteSheets['jump loop'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Jump Loop/Jump Loop SpriteSheet.png"); 
    spriteSheets['jump start'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Jump Start/Jump Start SpriteSheet.png");            
    spriteSheets['kicking'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Kicking/Kicking SpriteSheet.png");
    spriteSheets['run slashing'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Run Slashing/Run Slashing SpriteSheet.png");
    spriteSheets['run throwing'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Run Throwing/Run Throwing SpriteSheet.png");
    spriteSheets['running'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Running/Running SpriteSheet.png");
    spriteSheets['slashing'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Slashing/Slashing SpriteSheet.png"); 
    spriteSheets['slashing in the air'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Slashing in The Air/Slashing in The Air SpriteSheet.png");
    spriteSheets['sliding'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Sliding/Sliding SpriteSheet.png");
    spriteSheets['throwing'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Throwing/Throwing SpriteSheet.png");
    spriteSheets['throwing in the air'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Throwing in The Air/Throwing in The Air SpriteSheet.png");
    spriteSheets['walking'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Walking/Walking SpriteSheet.png"); 
    //left
    spriteSheets['dying flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Dying/Dying SpriteSheet flip.png");
    spriteSheets['falling down flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Falling Down/Falling Down SpriteSheet flip.png");
    spriteSheets['hurt flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Hurt/Hurt SpriteSheet flip.png");
    spriteSheets['idle flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet flip.png");
    spriteSheets['idle blinking flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Idle Blinking/Idle Blinking SpriteSheet flip.png");
    spriteSheets['jump loop flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Jump Loop/Jump Loop SpriteSheet flip.png"); 
    spriteSheets['jump start flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Jump Start/Jump Start SpriteSheet flip.png");            
    spriteSheets['kicking flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Kicking/Kicking SpriteSheet flip.png");
    spriteSheets['run slashing flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Run Slashing/Run Slashing SpriteSheet flip.png");
    spriteSheets['run throwing flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Run Throwing/Run Throwing SpriteSheet flip.png");
    spriteSheets['running flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Running/Running SpriteSheet flip.png");
    spriteSheets['slashing flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Slashing/Slashing SpriteSheet flip.png"); 
    spriteSheets['slashing in the air flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Slashing in The Air/Slashing in The Air SpriteSheet flip.png");
    spriteSheets['sliding flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Sliding/Sliding SpriteSheet flip.png");
    spriteSheets['throwing flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Throwing/Throwing SpriteSheet flip.png");
    spriteSheets['throwing in the air flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Throwing in The Air/Throwing in The Air SpriteSheet flip.png");
    spriteSheets['walking flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Walking/Walking SpriteSheet flip.png");
    // Sentury
    //right
    spriteSheets['dying1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Dying/Dying SpriteSheet.png");
    spriteSheets['falling down1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Falling Down/Falling Down SpriteSheet.png");
    spriteSheets['hurt1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Hurt/Hurt SpriteSheet.png");
    spriteSheets['idle1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Idle/Idle SpriteSheet.png");
    spriteSheets['idle blinking1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Idle Blinking/Idle Blinking SpriteSheet.png");
    spriteSheets['jump loop1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Jump Loop/Jump Loop SpriteSheet.png"); 
    spriteSheets['jump start1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Jump Start/Jump Start SpriteSheet.png");            
    spriteSheets['kicking1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Kicking/Kicking SpriteSheet.png");
    spriteSheets['run slashing1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Run Slashing/Run Slashing SpriteSheet.png");
    spriteSheets['run throwing1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Run Throwing/Run Throwing SpriteSheet.png");
    spriteSheets['running1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Running/Running SpriteSheet.png");
    spriteSheets['slashing1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Slashing/Slashing SpriteSheet.png"); 
    spriteSheets['slashing in the air1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Slashing in The Air/AirSlash.png");
    spriteSheets['sliding1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Sliding/Sliding SpriteSheet.png");
    spriteSheets['throwing1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Throwing/Throwing SpriteSheet.png");
    spriteSheets['throwing in the air1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Throwing in The Air/Throwing in The Air SpriteSheet.png");
    spriteSheets['walking1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Walking/Walking SpriteSheet.png"); 
    //left
    spriteSheets['dying flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Dying/Dying SpriteSheet flip.png");
    spriteSheets['falling down flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Falling Down/Falling Down SpriteSheet flip.png");
    spriteSheets['hurt flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Hurt/Hurt SpriteSheet flip.png");
    spriteSheets['idle flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Idle/Idle SpriteSheet flip.png");
    spriteSheets['idle blinking flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Idle Blinking/Idle Blinking SpriteSheet flip.png");
    spriteSheets['jump loop flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Jump Loop/Jump Loop SpriteSheet flip.png"); 
    spriteSheets['jump start flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Jump Start/Jump Start SpriteSheet flip.png");            
    spriteSheets['kicking flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Kicking/Kicking SpriteSheet flip.png");
    spriteSheets['run slashing flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Run Slashing/Run Slashing SpriteSheet flip.png");
    spriteSheets['run throwing flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Run Throwing/Run Throwing SpriteSheet flip.png");
    spriteSheets['running flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Running/Running SpriteSheet flip.png");
    spriteSheets['slashing flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Slashing/Slashing SpriteSheet flip.png"); 
    spriteSheets['slashing in the air flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Slashing in The Air/AirSlashflip.png");
    spriteSheets['sliding flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Sliding/Sliding SpriteSheet flip.png");
    spriteSheets['throwing flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Throwing/Throwing SpriteSheet flip.png");
    spriteSheets['throwing in the air flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Throwing in The Air/Throwing in The Air SpriteSheet flip.png");
    spriteSheets['walking flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Walking/Walking SpriteSheet flip.png");
}


// Pharaoh "class". Represents the main character and all of his actions.
function Pharaoh(game, assetManager, theCamera) {

    this.engine = game;
    this.AM = assetManager;  
    this.camera = theCamera;

    loadSpriteSheets(this.AM);
    //console.log("number of loaded assets: "+assetManager.getNumberOfAssets());
    this.ctx = game.ctx;
    this.idle();
    Entity.call(this, game, 500, 250);
    this.name = "pharaoh"; 
    this.health = 5; 
    this.type = "main"
    //state is a string which can be either: 'idle' 'jumping' or 'moving'
    this.state = "idle"; 
    //direction is a string which can be either: 'left' or 'right'
    this.direction = 'right';
    this.x = 350;
    this.attacking = false;  
    this.immune = 45; 
    //jump variables
    this.height = 200;
    this.dead = false; 
    this.aftermath = 0; 
    this.groundLevel = GROUND_LEVEL;
    this.y = this.groundLevel;
    this.yVelocity = 0;
    this.isJumping = false;
    this.width = 180; 
    this.time = 100; 
    // this is true if we only want to play the animation once
    this.playingTempAnimation = false;
    this.live = 1; 
    //this.pharaohController = new pharaohController(this);
    this.underworld = false;
    // To check if pharaoh is standing on platform or not.
    this.onPlatform = false;
    this.platform = null;
    this.insideSign = false;
    this.underneathPlatform = false;

    this.backgroundManager = new BackgroundManager(assetManager, game);
    this.boundingBox = new BoundingBox(this.x + 65, this.y + 35, this.animation.frameWidth * SCALE - 130, this.animation.frameHeight * SCALE - 65);
    this.hud = new Hearts(this.engine);
    this.engine.addEntity(this.hud);
}

//inheritence
Pharaoh.prototype = new Entity();
Pharaoh.prototype.constructor = Pharaoh;

//update is called once per frame
Pharaoh.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    this.time++; 
    controlAnimation(this);
    controlJump(this);
    this.camera.setX(this.x);                     ///For camera
    this.immune++; 
    Entity.prototype.update.call(this);
    if (this.dead === true) this.aftermath++;
    if (this.aftermath > 30) {
        this.removeFromWorld = true; 
        //alert("game over");
        if(!alert('Game Over. Try again?')) window.location.reload();
    }
    if (this.x >= 7360){
        this.removeFromWorld = true; 
        alert("You beat this Level! You cheated death this time!");
        this.Pharaoh.backgroundManager.stopSpeed();


    }
    //console.log("pharaoh's x value: " + this.x);

    for (var i = 0; i < this.game.entities.length; i++) {
        //debugger;
        var ent = this.game.entities[i];
        if (ent.type === "projectile" && ent.live === 1) {
            if (this.collideWithProjectile(ent)) {
                this.takeDamage(); 
            }
        }
        if (ent.type === "enemy" && ent.live === 1) { 
            if (this.collide(ent)) { 
                //console.log("collided"); 
                this.takeDamage(); 
            }
        }
        if (ent.type === "platform") {
            var pf = ent;
            if (pf.causeDamage && this.underworld === pf.isUnderworld) {
                
                if (this.boundingBox.collide(pf.boundingBox)) {
                    debugger;    
                    this.hud.setHealth(0);
                   this.die();                                              ///CHANGEDS
                }
            }
        }
    }  
    
}

//draw is called after every update
Pharaoh.prototype.draw = function () {
    //if (this.underworld) return;
    //console.log(this.animation);
    // this.ctx.strokeRect(this.boundingBox.x - this.camera.x, this.boundingBox.y, this.boundingBox.width, this.boundingBox.height);
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.camera.x, this.y);                    //important for camera to work
    // this.ctx.strokeRect(this.x, this.y, 10, 10);
    Entity.prototype.draw.call(this);
}

//sets state to idle
Pharaoh.prototype.idle = function () {
    this.attacking = false; 
    if (this.underworld){
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['idle1'], 900, 900, 18, 0.05, 18, true, SCALE); //idle animation
        } else {
            this.animation = new Animation(spriteSheets['idle flip1'], 900, 900, 18, 0.05, 18, true, SCALE);
        }
    } else {
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['idle'], 900, 900, 18, 0.05, 18, true, SCALE); //idle animation
        } else {
            this.animation = new Animation(spriteSheets['idle flip'], 900, 900, 18, 0.05, 18, true, SCALE);
        }
    }
    this.speed = 0;
    this.state = 'idle';
    this.previousState = 'idle';
    console.log("pharaoh is idle");
}

//sets state to running
//sets state to running
Pharaoh.prototype.runRight = function () {
    this.attacking = false; 
    //console.log("this.underworld = " + this.underworld + " Is it true: " + (this.underworld === true));
    if (this.underworld){
        this.animation = new Animation(spriteSheets['running1'], 900, 900, 12, 0.05, 12, true, SCALE); //running right animation
    } else {
        this.animation = new Animation(spriteSheets['running'], 900, 900, 12, 0.05, 12, true, SCALE); //running right animation
    }
    //console.log("the animation is "+ this.animation);
    this.speed = 300;
    this.state = 'running';
    this.previousState = 'running';
    this.direction = 'right';
    console.log("pharaoh is running right");
}

//sets state to running
Pharaoh.prototype.runLeft = function () {
    this.attacking = false; 
    if (this.underworld){
        if (this.isJumping) {
        
            this.animation = new Animation(spriteSheets['jump start flip1'], 900, 900, 6, 0.05, 6, false, SCALE); //jump start animation
        } else {
            this.animation = new Animation(spriteSheets['running flip1'], 900, 900, 12, 0.05, 12, true, SCALE); //running right animation
        }
        //this.animation = new Animation(spriteSheets['running flip'], 900, 900, 12, 0.05, 12, true, SCALE); //running left animation
    } else {

        if (this.isJumping) {
            this.animation = new Animation(spriteSheets['jump start flip'], 900, 900, 6, 0.05, 6, false, SCALE); //jump start animation
        } else {
            this.animation = new Animation(spriteSheets['running flip'], 900, 900, 12, 0.05, 12, true, SCALE); //running right animation
        }
        //this.animation = new Animation(spriteSheets['running flip'], 900, 900, 12, 0.05, 12, true, SCALE); //running left animation
    }
    this.speed = -300;
    this.previousState = 'running';
    this.state = 'running';
    this.direction = 'left';
    console.log("pharaoh is running left");
}

//ignore this for now
Pharaoh.prototype.walkRight = function () {
    this.attacking = false; 
    this.animation = new Animation(spriteSheets['walking'], 900, 900, 24, 0.05, 24, true, SCALE); //walking animation
    this.speed = 85;
    console.log("pharaoh is walking");
}

//makes the pharaoh jump
Pharaoh.prototype.jump = function () {
    this.ctx.save();
    this.state = 'jumping';
    this.attacking = false; 
    this.isJumping = true;
    this.yVelocity = 20;//27;
    this.previousAnimation = this.animation;
    if (this.underworld){
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['jump start1'], 900, 900, 6, 0.05, 6, false, SCALE); //jump start animation
        } else {
            this.animation = new Animation(spriteSheets['jump start flip1'], 900, 900, 6, 0.05, 6, false, SCALE); //jump start animation
        }
    } else {
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['jump start'], 900, 900, 6, 0.05, 6, false, SCALE); //jump start animation
        } else {
            this.animation = new Animation(spriteSheets['jump start flip'], 900, 900, 6, 0.05, 6, false, SCALE); //jump start animation
        }
    }
    this.playingTempAnimation = true;
    this.ctx.restore();
    console.log("pharaoh has jumped");
}

//makes the pharaoh slash
Pharaoh.prototype.slash = function () {
    this.attacking = true; 
    if (this.underworld){
        if (this.direction === 'right'){
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['slashing1'], 900, 900, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['slashing in the air1'], 900, 900, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['run slashing1'], 900, 900, 12, 0.05, 12, false, SCALE);
            }   
        }else{
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['slashing flip1'], 900, 900, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['slashing in the air flip1'], 900, 900, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['run slashing flip1'], 900, 900, 12, 0.05, 12, false, SCALE);
            }
        }
    } else {
        if (this.direction === 'right'){
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['slashing'], 900, 900, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['slashing in the air'], 900, 900, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['run slashing'], 900, 900, 12, 0.05, 12, false, SCALE);
            }   
        }else{
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['slashing flip'], 900, 900, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['slashing in the air flip'], 900, 900, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['run slashing flip'], 900, 900, 12, 0.05, 12, false, SCALE);
            }
        }
    }
    this.playingTempAnimation = true;
}

//makes the pharaoh throw
Pharaoh.prototype.throw = function () {
    if (this.time > 100) {
        this.time = 0;
        if (this.underworld){
            if (this.direction === 'right'){
                if (this.state === 'idle'){
                    this.animation = new Animation(spriteSheets['throwing1'], 900, 900, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'jumping'){
                    this.animation = new Animation(spriteSheets['throwing in the air1'], 900, 900, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'running'){
                    this.animation = new Animation(spriteSheets['run throwing1'], 900, 900, 12, 0.05, 12, false, SCALE);
                }   
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/comet/csheet.png"),
                        "right", this.x + 10, this.y+10);
                this.engine.addEntity(comet);
            } else {
                if (this.state === 'idle'){
                    this.animation = new Animation(spriteSheets['throwing flip1'], 900, 900, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'jumping'){
                    this.animation = new Animation(spriteSheets['throwing in the air flip1'], 900, 900, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'running'){
                    this.animation = new Animation(spriteSheets['run throwing flip1'], 900, 900, 12, 0.05, 12, false, SCALE);
                }   
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/comet/csheetflip.png"),
                       "left", this.x - 10, this.y+10);
                this.engine.addEntity(comet);
            }
        } else {
            if (this.direction === 'right'){
                if (this.state === 'idle'){
                    this.animation = new Animation(spriteSheets['throwing'], 900, 900, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'jumping'){
                    this.animation = new Animation(spriteSheets['throwing in the air'], 900, 900, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'running'){
                    this.animation = new Animation(spriteSheets['run throwing'], 900, 900, 12, 0.05, 12, false, SCALE);
                }   
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/comet/csheet.png"),
                        "right", this.x + 10, this.y+10);
                this.engine.addEntity(comet);
            } else {
                if (this.state === 'idle'){
                    this.animation = new Animation(spriteSheets['throwing flip'], 900, 900, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'jumping'){
                    this.animation = new Animation(spriteSheets['throwing in the air flip'], 900, 900, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'running'){
                    this.animation = new Animation(spriteSheets['run throwing flip'], 900, 900, 12, 0.05, 12, false, SCALE);
                }   
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/comet/csheetflip.png"),
                       "left", this.x - 10, this.y+10);
                this.engine.addEntity(comet);
            }
        }
        this.playingTempAnimation = true;
    }
}

//makes the pharaoh take damage
Pharaoh.prototype.takeDamage = function () {
    if (this.immune < 45) return; 
    this.immune = 0; 
    this.attacking = false; 
        this.attacking = false; 
        this.health -= 1;
        this.hud.setHealth(this.health);
        if (this.health <= 0) {
            this.die();                                                                       ///CHANGED
            return; 
        }
        if (this.underworld){
            if (this.direction === 'right'){
                this.animation = new Animation(spriteSheets['hurt1'], 900, 900, 18, 0.05, 18, false, SCALE); 
            this.animation = new Animation(spriteSheets['hurt1'], 900, 900, 18, 0.05, 18, false, SCALE); 
        } else {
            this.animation = new Animation(spriteSheets['hurt flip1'], 900, 900, 18, 0.05, 18, false, SCALE); 
                this.animation = new Animation(spriteSheets['hurt flip1'], 900, 900, 18, 0.05, 18, false, SCALE); 
            this.animation = new Animation(spriteSheets['hurt flip1'], 900, 900, 18, 0.05, 18, false, SCALE); 
        }
    } else {
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['hurt'], 900, 900, 18, 0.05, 18, false, SCALE); 
                this.animation = new Animation(spriteSheets['hurt'], 900, 900, 18, 0.05, 18, false, SCALE); 
            this.animation = new Animation(spriteSheets['hurt'], 900, 900, 18, 0.05, 18, false, SCALE); 
        } else {
            this.animation = new Animation(spriteSheets['hurt flip'], 900, 900, 18, 0.05, 18, false, SCALE); 
                this.animation = new Animation(spriteSheets['hurt flip'], 900, 900, 18, 0.05, 18, false, SCALE); 
            this.animation = new Animation(spriteSheets['hurt flip'], 900, 900, 18, 0.05, 18, false, SCALE); 
        }
    }
    this.playingTempAnimation = true;

}

Pharaoh.prototype.die = function (){
    if (this.underworld) {
        if (this.direction === "right") {
            this.animation = new Animation(spriteSheets['dying1'], 900, 900, 15, 0.05, 15, false, SCALE); 
        } else {
            this.animation = new Animation(spriteSheets['dying flip1'], 900, 900, 15, 0.05, 15, false, SCALE);
        }
    } else {
        if (this.direction === "right") {
            this.animation = new Animation(spriteSheets['dying'], 900, 900, 15, 0.05, 15, false, SCALE);
        } else {
            this.animation = new Animation(spriteSheets['dyingflip'], 900, 900, 15, 0.05, 15, false, SCALE)
        }
    }
    this.dead = true; 
}

//makes the pharaoh blink. only works when he idle
Pharaoh.prototype.blink = function () {
    if (this.underworld){
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['idle blinking1'], 900, 900, 18, 0.05, 18, false, SCALE); 
        } else {
            this.animation = new Animation(spriteSheets['idle blinking flip1'], 900, 900, 18, 0.05, 18, false, SCALE); 
        }
    } else {
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['idle blinking'], 900, 900, 18, 0.05, 18, false, SCALE); 
        } else {
            this.animation = new Animation(spriteSheets['idle blinking flip'], 900, 900, 18, 0.05, 18, false, SCALE); 
        }
    }
    this.playingTempAnimation = true;
    console.log("blinked");
}

//sets the animation back to the default for that state
Pharaoh.prototype.setToDefault = function () {
    this.attacking = false; 
    if (this.underworld){
        if (this.direction === 'right'){
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['idle1'], 900, 900, 18, 0.05, 18, true, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['jump loop1'], 900, 900, 6, 0.05, 6, true, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['running1'], 900, 900, 12, 0.05, 12, true, SCALE);
            }
        } else {
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['idle flip1'], 900, 900, 18, 0.05, 18, true, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['jump loop flip1'], 900, 900, 6, 0.05, 6, true, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['running flip1'], 900, 900, 12, 0.05, 12, true, SCALE);
            }
        }
    } else {
        if (this.direction === 'right'){
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['idle'], 900, 900, 18, 0.05, 18, true, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['jump loop'], 900, 900, 6, 0.05, 6, true, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['running'], 900, 900, 12, 0.05, 12, true, SCALE);
            }
        } else {
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['idle flip'], 900, 900, 18, 0.05, 18, true, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['jump loop flip'], 900, 900, 6, 0.05, 6, true, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['running flip'], 900, 900, 12, 0.05, 12, true, SCALE);
            }
        }
    }
    
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
    
    var insideSign = false;
    for (var i = 0; i < signs.length; i++) {
        //var insideSign = false;
        var pf = signs[i];
        if (pharaoh.boundingBox.collide(pf.boundingBox) && !this.insideSign) {  
            pf.displayMessage();
            this.insideSign = true;
            break;
        } else if (!pharaoh.boundingBox.collide(pf.boundingBox)){
            pf.dontDisplay();
            this.insideSign = false;
        }
    }

    //in the air 
    if (pharaoh.isJumping){
        pharaoh.yVelocity -= 1.00; //90 * pharaoh.game.clockTick
        pharaoh.y -= pharaoh.yVelocity;

        pharaoh.lastBottom = pharaoh.boundingBox.bottom;
        var lastLeft = pharaoh.boundingBox.left;
        var lastRight = pharaoh.boundingBox.right;
        pharaoh.boundingBox = new BoundingBox (pharaoh.x + 65, pharaoh.y + 35, pharaoh.animation.frameWidth * SCALE - 130, pharaoh.animation.frameHeight * SCALE - 65);
        
        if (!pharaoh.underworld) {
            for (var i = 0; i < platforms.length; i++) {
                var pf = platforms[i];
                if (pharaoh.boundingBox.collide(pf.boundingBox) && pharaoh.lastBottom < pf.boundingBox.top && pf.isTopPlatform) {                
                    pharaoh.isJumping = false;
                    pharaoh.onPlatform = true;
                    pharaoh.y = pf.boundingBox.top - pharaoh.animation.frameHeight * SCALE + 30;
                    pharaoh.platform = pf;
                    pharaoh.state = pharaoh.previousState;
                    pharaoh.groundLevel = pharaoh.y;
                    pharaoh.setToDefault();
                } 
                else if (lastRight < pf.boundingBox.left || lastLeft > pf.boundingBox.right) {
                    if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                        if (pharaoh.direction === "right") {
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.left - pharaoh.animation.frameWidth * SCALE + 55;
                            pharaoh.backgroundManager.stopSpeed();
                            pharaoh.underneathPlatform = false;
                            pharaoh.setToDefault();
                        } else if (pharaoh.direction === "left") {
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.right - pharaoh.animation.frameWidth * SCALE + 125;
                            pharaoh.backgroundManager.stopSpeed();
                            pharaoh.underneathPlatform = false;
                            pharaoh.setToDefault();
                        }
                    }
                } else if (pharaoh.boundingBox.right > pf.boundingBox.left || pharaoh.boundingBox.left < pf.boundingBox.right) {
                    if (pharaoh.boundingBox.collide(pf.boundingBox) && pharaoh.boundingBox.top < pf.boundingBox.bottom) {
                        pharaoh.yVelocity = 0;
                        pharaoh.isJumping = true;
                        pharaoh.underneathPlatform = true;
                    }
                }
                else {
                    if (pharaoh.boundingBox.collide(pf.boundingBox) && !pf.isTopPlatform) {
                        if (pharaoh.direction === "right") {
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.left - pharaoh.animation.frameWidth * SCALE + 55;
                            pharaoh.backgroundManager.stopSpeed();
                            pharaoh.setToDefault();
                        } else if (pharaoh.direction === "left") {
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.right - pharaoh.animation.frameWidth * SCALE + 125;
                            pharaoh.backgroundManager.stopSpeed();  
                            pharaoh.setToDefault();
                        }
                    }
                }
            }
        // When pharaoh is in underworld
        } else {
            for (var i = 0; i < underworldPlatforms.length; i++) {
                var pf = underworldPlatforms[i];
                if (pharaoh.boundingBox.collide(pf.boundingBox) && pharaoh.lastBottom < pf.boundingBox.top && pf.isTopPlatform) {                
                    pharaoh.isJumping = false;
                    pharaoh.onPlatform = true;
                    pharaoh.y = pf.boundingBox.top - pharaoh.animation.frameHeight * SCALE + 30;
                    pharaoh.platform = pf;
                    pharaoh.state = pharaoh.previousState;
                    pharaoh.groundLevel = pharaoh.y;
                    pharaoh.setToDefault();
                } 
                else if (lastRight < pf.boundingBox.left || lastLeft > pf.boundingBox.right) {
                    if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                        if (pharaoh.direction === "right") {
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.left - pharaoh.animation.frameWidth * SCALE + 55;
                            pharaoh.backgroundManager.stopSpeed();
                            pharaoh.underneathPlatform = false;
                            pharaoh.setToDefault();
                        } else if (pharaoh.direction === "left") {
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.right - pharaoh.animation.frameWidth * SCALE + 125;
                            pharaoh.backgroundManager.stopSpeed();
                            pharaoh.underneathPlatform = false;
                            pharaoh.setToDefault();
                        }
                    }
                } else if (pharaoh.boundingBox.right > pf.boundingBox.left || pharaoh.boundingBox.left < pf.boundingBox.right) {
                    if (pharaoh.boundingBox.collide(pf.boundingBox) && pharaoh.boundingBox.top < pf.boundingBox.bottom) {
                        pharaoh.yVelocity = 0;
                        pharaoh.isJumping = true;
                        pharaoh.underneathPlatform = true;
                    }
                }
                else {
                    if (pharaoh.boundingBox.collide(pf.boundingBox) && !pf.isTopPlatform) {
                        if (pharaoh.direction === "right") {
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.left - pharaoh.animation.frameWidth * SCALE + 55;
                            pharaoh.backgroundManager.stopSpeed();
                            pharaoh.setToDefault();
                        } else if (pharaoh.direction === "left") {
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.right - pharaoh.animation.frameWidth * SCALE + 125;
                            pharaoh.backgroundManager.stopSpeed();  
                            pharaoh.setToDefault();
                        }
                    }
                }
            }
        }
    // When pharaoh is not jumping
    } else {
        pharaoh.boundingBox = new BoundingBox (pharaoh.x + 65, pharaoh.y + 35, pharaoh.animation.frameWidth * SCALE - 130, pharaoh.animation.frameHeight * SCALE - 65);
        if (!pharaoh.underworld) {
            for (var i = 0; i < platforms.length; i++) {
                var pf = platforms[i];
                if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                    if (pharaoh.direction === "right") {
                        pharaoh.speed = 0;
                        pharaoh.x = pf.boundingBox.left - pharaoh.animation.frameWidth * SCALE + 55;
                        pharaoh.backgroundManager.stopSpeed();
                        pharaoh.setToDefault();
                    } else if (pharaoh.direction === "left") {
                        pharaoh.speed = 0;
                        pharaoh.x = pf.boundingBox.right - pharaoh.animation.frameWidth * SCALE + 125;
                        pharaoh.backgroundManager.stopSpeed();  
                        pharaoh.setToDefault();
                    }
                }
            }
        } else {
            for (var i = 0; i < underworldPlatforms.length; i++) {
                var pf = underworldPlatforms[i];
                if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                    if (pharaoh.direction === "right") {
                        pharaoh.speed = 0;
                        pharaoh.x = pf.boundingBox.left - pharaoh.animation.frameWidth * SCALE + 55;
                        pharaoh.backgroundManager.stopSpeed();
                        pharaoh.setToDefault();
                    } else if (pharaoh.direction === "left") {
                        pharaoh.speed = 0;
                        pharaoh.x = pf.boundingBox.right - pharaoh.animation.frameWidth * SCALE + 125;
                        pharaoh.backgroundManager.stopSpeed();  
                        pharaoh.setToDefault();
                    }
                }
            }
        }
    }
    //when pharaoh is not jumping but still on platform
    if (!pharaoh.isJumping && pharaoh.onPlatform) {
        pharaoh.boundingBox = new BoundingBox (pharaoh.x + 65, pharaoh.y + 35, pharaoh.animation.frameWidth * SCALE - 130, pharaoh.animation.frameHeight * SCALE - 65);
        if (!pharaoh.underworld) {
            for (var i = 0; i < platforms.length; i++) {
                var pf = platforms[i];
                if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                    pharaoh.isJumping = false;
                    pharaoh.onPlatform = true;
                    pharaoh.y = pf.boundingBox.top - pharaoh.animation.frameHeight * SCALE + 29;
                    pharaoh.platform = pf;
                    pharaoh.state = pharaoh.previousState;
                    pharaoh.groundLevel = pharaoh.y;
                    pharaoh.setToDefault();
                } else {
                    if (pharaoh.boundingBox.left > pharaoh.platform.boundingBox.right || 
                        pharaoh.boundingBox.right < pharaoh.platform.boundingBox.left) {
            
                            pharaoh.isJumping = true;
                            pharaoh.onPlatform = false;
                                
                            pharaoh.groundLevel = GROUND_LEVEL;
                            pharaoh.state = pharaoh.previousState;
                            pharaoh.setToDefault();
                    }
                }
            }
        } else {
            for (var i = 0; i < underworldPlatforms.length; i++) {
                var pf = underworldPlatforms[i];
                if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                    pharaoh.isJumping = false;
                    pharaoh.onPlatform = true;
                    pharaoh.y = pf.boundingBox.top - pharaoh.animation.frameHeight * SCALE + 29;
                    pharaoh.platform = pf;
                    pharaoh.state = pharaoh.previousState;
                    pharaoh.groundLevel = pharaoh.y;
                    pharaoh.setToDefault();
                } else {
                    if (pharaoh.boundingBox.left > pharaoh.platform.boundingBox.right || 
                        pharaoh.boundingBox.right < pharaoh.platform.boundingBox.left) {
            
                            pharaoh.isJumping = true;
                            pharaoh.onPlatform = false;
                                
                            pharaoh.groundLevel = GROUND_LEVEL;
                            pharaoh.state = pharaoh.previousState;
                            pharaoh.setToDefault();
                    }
                }
            }
        }
    }
    
    // touching the ground
    if (pharaoh.y > pharaoh.groundLevel){
        pharaoh.y = pharaoh.groundLevel;
        if (pharaoh.isJumping === true){
            pharaoh.isJumping = false;        
            pharaoh.underneathPlatform = false;
            pharaoh.state = pharaoh.previousState;
            pharaoh.setToDefault();
        }
    }
}

Pharaoh.prototype.getState = function(){
    return this.state;
}
Pharaoh.prototype.setState = function(theState){
    this.state = theState;
}
Pharaoh.prototype.getX = function(){
    return this.x;
}

Pharaoh.prototype.getY = function(){
    return this.y;
}
Pharaoh.prototype.getGroundLevel = function(){
    return this.groundLevel;
}

Pharaoh.prototype.getDirection = function(){
    return this.direction;
}

Pharaoh.prototype.setDirection = function(theDirection){
    this.direction = theDirection;
}
Pharaoh.prototype.setPreviousState = function(state){
    this.previousState = state;
}
Pharaoh.prototype.swapWorld = function(){
    this.underworld = !this.underworld;
    this.groundLevel = GROUND_LEVEL;
    this.yVelocity = 0;
    this.isJumping = true;
    // this.onPlatform = false;
    this.setToDefault();
}

Pharaoh.prototype.collideWithProjectile = function(other) {
    if ((other.x - 60) < this.x && this.x < (other.x + 60) && (other.y - 40) < this.y && this.y < (other.y + 40)) {
        return true; 
   }
}

Pharaoh.prototype.collide = function(other) {
    if ((other.x - 60) < this.x && this.x < (other.x + 60) && (other.y - 150) < this.y && this.y < (other.y + 150)) {
        return true; 
   }
}