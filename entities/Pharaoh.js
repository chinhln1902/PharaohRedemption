var spriteSheets = [];
var isSwitchable = true;
const GROUND_LEVEL = 490;
const SCALE = 1;
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
    spriteSheets['kicking'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Kicking/Kifking SpriteSheet.png");
    spriteSheets['run slashing'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Run Slashing/Run Slashing SpriteSheet.png");
    spriteSheets['run throwing'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Run Throwing/Run Throwing SpriteSheet.png");
    spriteSheets['running'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Running/Running SpriteSheet.png");
    spriteSheets['slashing'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Slashing/Slashing SpriteSheet.png"); 
    spriteSheets['slashing in the air'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Slashing in The Air/Slashing in The Air SpriteSheet.png");
    spriteSheets['sliding'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Sliding/Sliding SpriteSheet.png");
    spriteSheets['throwing'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Throwing/Throwing SpriteSheet.png");
    spriteSheets['throwing in the air'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Throwing in The Air/Throwing in The Air SpriteSheet.png");
    spriteSheets['walking'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Walking/Walking SpriteSheet.png"); 
    spriteSheets['staffing'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Staffing/StaffingSpriteSheet.png");
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
    spriteSheets['staffing flip'] = AM.getAsset("./assets/sprites/Egyptian Mummy/Staffing/StaffingSpriteSheetFlip.png");
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
    spriteSheets['staffing1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Staffing/StaffingSpriteSheet.png"); 
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
    spriteSheets['staffing flip1'] = AM.getAsset("./assets/sprites/Egyptian Sentry/Staffing/StaffingSpriteSheetFlip.png"); 
}


// Pharaoh "class". Represents the main character and all of his actions.
function Pharaoh(game, assetManager, theCamera, level) {

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
    this.level = level
    this.type = "main"
    //state is a string which can be either: 'idle' 'jumping' or 'moving'
    this.state = "idle"; 
    //direction is a string which can be either: 'left' or 'right'
    this.direction = 'right';
    this.x = 350;
    this.attacking = false;  
    this.immune = 55; 
    //jump variables
    this.height = 200;
    this.dead = false; 
    this.aftermath = 0; 
    this.groundLevel = GROUND_LEVEL;
    this.y = this.groundLevel;
    this.yVelocity = 0;
    this.lastSpeed = 0;
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
    this.powerUp = "none";
    this.switchable = true;
    this.level4 = false;
    this.won = false;
    this.backgroundManager = new BackgroundManager(assetManager, game);

    this.boundingBox = new BoundingBox(this.x + 65, this.y + 35, this.animation.frameWidth * SCALE - 130, this.animation.frameHeight * SCALE - 65);
    
    this.hud = new Hearts(AM.getAsset("./assets/platforms/PNG/Collectable/heart.png"), this.engine, 25, 25);
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
    controlPowerUps(this);
    this.camera.setX(this.x);                     ///For camera
    this.immune++; 
    if (this.dead === true) this.aftermath = this.aftermath + 1;
    
    console.log(this.aftermath);
    if (this.aftermath > 30) {
        this.removeFromWorld = true; 
        //alert("game over");
        //if(!alert('Game Over. Try again?')) window.location.reload();
        window.location.replace('./menu/gameover.html'); 
    }
    if (this.x >= 7360){
        this.removeFromWorld = true; 
        //alert("You beat this Level! You cheated death this time!");
        window.location.replace('./menu/win.html'); 
        this.Pharaoh.backgroundManager.stopSpeed();
    }

    if (this.won === true){
        this.underworld = true;
        
    }
    //console.log("pharaoh's x value: " + this.x);

    for (var i = 0; i < this.game.entities.length; i++) {
        var ent = this.game.entities[i];
        if (ent.type === "projectile" && ent.live === 1 && this.dead === false) {
            if (this.collideWithProjectile(ent)) {
                this.takeDamage(); 
            }
        }
        if (ent.type === "enemy" && ent.live === 1 && this.dead === false) { 
            if (this.collide(ent)) { 
                //console.log("collided"); 
                if (!ent.frozen) this.takeDamage(); 
            }
        }

        if (ent.name === 'Anubis' && ent.attacking === true && this.dead === false) {
            if (this.collideSlash(ent)) {
                console.log("frozen: " + ent.frozen);
                if (!ent.frozen) this.takeDamage(); ;
                
                console.log("Pharaoh collide with anubis");

            }
        }
        
        if (ent.type === "platform") {
            var pf = ent;
            if (pf.causeDamage && this.underworld === pf.isUnderworld) {
                
                if (this.boundingBox.collide(pf.boundingBox)) { 
                    this.hud.setHealth(0);
                   this.die();                                              ///CHANGEDS
                }
            }
        }
    }  

    Entity.prototype.update.call(this);

    
}

//draw is called after every update
Pharaoh.prototype.draw = function () {
    if (!this.dead){
            //if (this.underworld) return;
    //console.log(this.animation);
    // this.ctx.strokeRect(this.boundingBox.x - this.camera.x, this.boundingBox.y, this.boundingBox.width, this.boundingBox.height);
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.camera.x, this.y);                    //important for camera to work
    // this.ctx.strokeRect(this.x, this.y, 10, 10);
    Entity.prototype.draw.call(this);
    }

}

//sets state to idle
Pharaoh.prototype.idle = function () {
    this.attacking = false; 
    if (this.underworld){
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['idle1'], 180, 180, 18, 0.05, 18, true, SCALE); //idle animation
        } else {
            this.animation = new Animation(spriteSheets['idle flip1'], 180, 180, 18, 0.05, 18, true, SCALE);
        }
    } else {
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['idle'], 180, 180, 18, 0.05, 18, true, SCALE); //idle animation
        } else {
            this.animation = new Animation(spriteSheets['idle flip'], 180, 180, 18, 0.05, 18, true, SCALE);
        }
    }
    this.speed = 0;
    this.state = 'idle';
    this.previousState = 'idle';
    //console.log("pharaoh is idle");
}

//sets state to running
//sets state to running
Pharaoh.prototype.runRight = function () {
    this.attacking = false; 
    //console.log("this.underworld = " + this.underworld + " Is it true: " + (this.underworld === true));
    if (this.underworld){
        this.animation = new Animation(spriteSheets['running1'], 180, 180, 12, 0.05, 12, true, SCALE); //running right animation
    } else {
        this.animation = new Animation(spriteSheets['running'], 180, 180, 12, 0.05, 12, true, 1); //running right animation
    }
    //console.log("the animation is "+ this.animation);
    this.speed = 300;
    this.lastSpeed = this.speed;
    this.state = 'running';
    this.previousState = 'running';
    this.direction = 'right';
    //console.log("pharaoh is running right");
}

//sets state to running
Pharaoh.prototype.runLeft = function () {
    this.attacking = false; 
    if (this.underworld){
        if (this.isJumping) {
        
            this.animation = new Animation(spriteSheets['jump start flip1'], 180, 180, 6, 0.05, 6, false, SCALE); //jump start animation
        } else {
            this.animation = new Animation(spriteSheets['running flip1'], 180, 180, 12, 0.05, 12, true, SCALE); //running right animation
        }
        //this.animation = new Animation(spriteSheets['running flip'], 180, 180, 12, 0.05, 12, true, SCALE); //running left animation
    } else {

        if (this.isJumping) {
            this.animation = new Animation(spriteSheets['jump start flip'], 180, 180, 6, 0.05, 6, false, SCALE); //jump start animation
        } else {
            this.animation = new Animation(spriteSheets['running flip'], 180, 180, 12, 0.05, 12, true, 1); //running right animation
        }
        //this.animation = new Animation(spriteSheets['running flip'], 180, 180, 12, 0.05, 12, true, SCALE); //running left animation
    }
    this.speed = -300;
    this.lastSpeed = this.speed;
    this.previousState = 'running';
    this.state = 'running';
    this.direction = 'left';
    //console.log("pharaoh is running left");
}

//ignore this for now
Pharaoh.prototype.walkRight = function () {
    this.attacking = false; 
    this.animation = new Animation(spriteSheets['walking'], 180, 180, 24, 0.05, 24, true, SCALE); //walking animation
    this.speed = 85;
    //console.log("pharaoh is walking");
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
            this.animation = new Animation(spriteSheets['jump start1'], 180, 180, 6, 0.05, 6, false, SCALE); //jump start animation
        } else {
            this.animation = new Animation(spriteSheets['jump start flip1'], 180, 180, 6, 0.05, 6, false, SCALE); //jump start animation
        }
    } else {
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['jump start'], 180, 180, 6, 0.05, 6, false, SCALE); //jump start animation
        } else {
            this.animation = new Animation(spriteSheets['jump start flip'], 180, 180, 6, 0.05, 6, false, SCALE); //jump start animation
        }
    }
    this.playingTempAnimation = true;
    this.ctx.restore();
    //console.log("pharaoh has jumped");
}

//makes the pharaoh slash
Pharaoh.prototype.slash = function () {
    this.attacking = true; 
    if (this.underworld){
        if (this.direction === 'right'){
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['slashing1'], 180, 180, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['slashing in the air1'], 180, 180, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['run slashing1'], 180, 180, 12, 0.05, 12, false, SCALE);
            }   
        }else{
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['slashing flip1'], 180, 180, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['slashing in the air flip1'], 180, 180, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['run slashing flip1'], 180, 180, 12, 0.05, 12, false, SCALE);
            }
        }
    } else {
        if (this.direction === 'right'){
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['slashing'], 180, 180, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['slashing in the air'], 180, 180, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['run slashing'], 180, 180, 12, 0.05, 12, false, SCALE);
            }   
        }else{
            if (this.state === 'idle'){
                this.animation = new Animation(spriteSheets['slashing flip'], 180, 180, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['slashing in the air flip'], 180, 180, 12, 0.05, 12, false, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['run slashing flip'], 180, 180, 12, 0.05, 12, false, SCALE);
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
                    this.animation = new Animation(spriteSheets['throwing1'], 180, 180, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'jumping'){
                    this.animation = new Animation(spriteSheets['throwing in the air1'], 180, 180, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'running'){
                    this.animation = new Animation(spriteSheets['run throwing1'], 180, 180, 12, 0.05, 12, false, SCALE);
                }   
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/comet/csheet.png"),
                        "right", this.x + 10, this.y+10);
                this.engine.addEntity(comet);
            } else {
                if (this.state === 'idle'){
                    this.animation = new Animation(spriteSheets['throwing flip1'], 180, 180, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'jumping'){
                    this.animation = new Animation(spriteSheets['throwing in the air flip1'], 180, 180, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'running'){
                    this.animation = new Animation(spriteSheets['run throwing flip1'], 180, 180, 12, 0.05, 12, false, SCALE);
                }   
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/comet/csheetflip.png"),
                       "left", this.x - 10, this.y+10);
                this.engine.addEntity(comet);
            }
        } else {
            if (this.direction === 'right'){
                if (this.state === 'idle'){
                    this.animation = new Animation(spriteSheets['throwing'], 180, 180, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'jumping'){
                    this.animation = new Animation(spriteSheets['throwing in the air'], 180, 180, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'running'){
                    this.animation = new Animation(spriteSheets['run throwing'], 180, 180, 12, 0.05, 12, false, SCALE);
                }   
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/comet/csheet.png"),
                        "right", this.x + 10, this.y+10);
                this.engine.addEntity(comet);
            } else {
                if (this.state === 'idle'){
                    this.animation = new Animation(spriteSheets['throwing flip'], 180, 180, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'jumping'){
                    this.animation = new Animation(spriteSheets['throwing in the air flip'], 180, 180, 12, 0.05, 12, false, SCALE);
                } else if (this.state === 'running'){
                    this.animation = new Animation(spriteSheets['run throwing flip'], 180, 180, 12, 0.05, 12, false, SCALE);
                }   
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/comet/csheetflip.png"),
                       "left", this.x - 10, this.y+10);
                this.engine.addEntity(comet);
            }
        }
        this.playingTempAnimation = true;
    }
}

Pharaoh.prototype.staff = function () {
    if (this.powerUp !== "hypno") return;
    if (this.time > 100) {
        this.time = 0;
        if (this.underworld){
            if (this.direction === 'right'){
                this.animation = new Animation(spriteSheets['staffing1'], 200, 180, 12, 0.05, 12, false, SCALE);
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/gypno/spiralSpriteSheetx.png"),
                        "right", this.x + 10, this.y+10, "hypno");
                        comet.startSpeed = 200;
                this.engine.addEntity(comet);
            } else {
                this.animation = new Animation(spriteSheets['staffing flip1'], 260, 180, 12, 0.05, 12, false, SCALE);
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/gypno/spiralSpriteSheetFlipx.png"),
                       "left", this.x - 10, this.y+10, "hypno");
                this.engine.addEntity(comet);
            }
        } else {
            if (this.direction === 'right'){
                this.animation = new Animation(spriteSheets['staffing'], 200, 180, 12, 0.05, 12, false, SCALE);
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/gypno/spiralSpriteSheetx.png"),
                        "right", this.x + 10, this.y+10);
                this.engine.addEntity(comet);
            } else {
                this.animation = new Animation(spriteSheets['staffing flip'], 260, 180, 12, 0.05, 12, false, SCALE);
                var comet = new Projectile(this.engine, AM.getAsset("./assets/sprites/magic/PNG/gypno/spiralSpriteSheetFlipx.png"),
                       "left", this.x - 10, this.y+10);
                this.engine.addEntity(comet);
            }
        }
        this.playingTempAnimation = true;
        this.powerUp = "none";
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
        if (this.health === 0) {
            debugger;
            this.die();  
            //window.location.replace('./menu/gameover.html'); 
            return; 
        }
        if (this.underworld){
            if (this.direction === 'right'){
                this.animation = new Animation(spriteSheets['hurt1'], 180, 180, 18, 0.05, 18, false, SCALE); 
            this.animation = new Animation(spriteSheets['hurt1'], 180, 180, 18, 0.05, 18, false, SCALE); 
        } else {
            this.animation = new Animation(spriteSheets['hurt flip1'], 180, 180, 18, 0.05, 18, false, SCALE); 
                this.animation = new Animation(spriteSheets['hurt flip1'], 180, 180, 18, 0.05, 18, false, SCALE); 
            this.animation = new Animation(spriteSheets['hurt flip1'], 180, 180, 18, 0.05, 18, false, SCALE); 
        }
    } else {
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['hurt'], 180, 180, 18, 0.05, 18, false, SCALE); 
                this.animation = new Animation(spriteSheets['hurt'], 180, 180, 18, 0.05, 18, false, SCALE); 
            this.animation = new Animation(spriteSheets['hurt'], 180, 180, 18, 0.05, 18, false, SCALE); 
        } else {
            this.animation = new Animation(spriteSheets['hurt flip'], 180, 180, 18, 0.05, 18, false, SCALE); 
                this.animation = new Animation(spriteSheets['hurt flip'], 180, 180, 18, 0.05, 18, false, SCALE); 
            this.animation = new Animation(spriteSheets['hurt flip'], 180, 180, 18, 0.05, 18, false, SCALE); 
        }
    }
    this.playingTempAnimation = true;

}

Pharaoh.prototype.die = function (){
    if (this.underworld) {
        if (this.direction === "right") {
            this.animation = new Animation(spriteSheets['dying1'], 180, 180, 15, 0.05, 15, false, SCALE); 
        } else {
            this.animation = new Animation(spriteSheets['dying flip1'], 180, 180, 15, 0.05, 15, false, SCALE);
        }
    } else {
        if (this.direction === "right") {
            this.animation = new Animation(spriteSheets['dying'], 180, 180, 15, 0.05, 15, false, SCALE);
        } else {
            this.animation = new Animation(spriteSheets['dyingflip'], 180, 180, 15, 0.05, 15, false, SCALE)
        }
    }
    this.dead = true; 
}

//makes the pharaoh blink. only works when he idle
Pharaoh.prototype.blink = function () {
    if (this.underworld){
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['idle blinking1'], 180, 180, 18, 0.05, 18, false, SCALE); 
        } else {
            this.animation = new Animation(spriteSheets['idle blinking flip1'], 180, 180, 18, 0.05, 18, false, SCALE); 
        }
    } else {
        if (this.direction === 'right'){
            this.animation = new Animation(spriteSheets['idle blinking'], 180, 180, 18, 0.05, 18, false, SCALE); 
        } else {
            this.animation = new Animation(spriteSheets['idle blinking flip'], 180, 180, 18, 0.05, 18, false, SCALE); 
        }
    }
    this.playingTempAnimation = true;
    //console.log("blinked");
}

//sets the animation back to the default for that state
Pharaoh.prototype.setToDefault = function () {
    this.attacking = false; 
    if (this.underworld){
        if (this.direction === 'right'){
            if (this.state === 'idle'){
                this.idle();
                this.animation = new Animation(spriteSheets['idle1'], 180, 180, 18, 0.05, 18, true, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['jump loop1'], 180, 180, 6, 0.05, 6, true, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['running1'], 180, 180, 12, 0.05, 12, true, SCALE);
            }
        } else {
            if (this.state === 'idle'){
                this.idle();
                this.animation = new Animation(spriteSheets['idle flip1'], 180, 180, 18, 0.05, 18, true, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['jump loop flip1'], 180, 180, 6, 0.05, 6, true, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['running flip1'], 180, 180, 12, 0.05, 12, true, SCALE);
            }
        }
    } else {
        if (this.direction === 'right'){
            if (this.state === 'idle'){
                this.idle();
                this.animation = new Animation(spriteSheets['idle'], 180, 180, 18, 0.05, 18, true, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['jump loop'], 180, 180, 6, 0.05, 6, true, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['running'], 180, 180, 12, 0.05, 12, true, SCALE);
            }
        } else {
            if (this.state === 'idle'){
                this.idle();
                this.animation = new Animation(spriteSheets['idle flip'], 180, 180, 18, 0.05, 18, true, SCALE);
            } else if (this.state === 'jumping'){
                this.animation = new Animation(spriteSheets['jump loop flip'], 180, 180, 6, 0.05, 6, true, SCALE);
            } else if (this.state === 'running'){
                this.animation = new Animation(spriteSheets['running flip'], 180, 180, 12, 0.05, 12, true, SCALE);
            }
        }
    }
    
}


//test method for debugging
Pharaoh.prototype.testAnimation = function () {
    //test here
    //console.log("testing animation");
}

// called by the update method. controlls the animations.
function controlAnimation(pharaoh){
    if(pharaoh.playingTempAnimation && pharaoh.animation.isDone()){
        pharaoh.setToDefault();
    }
}

Pharaoh.prototype.collideSlash = function(other) {
    if ((other.x - 300) < this.x && this.x < (other.x + 300) && (other.y - 70) < this.y && this.y < (other.y + 70)) {
        return true; 
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
            for(var i = 0; i < underworldPlatforms.length; i++) {
                var pf = underworldPlatforms[i];
                if ((pharaoh.boundingBox.right > pf.boundingBox.left + 20 || pharaoh.boundingBox.left < pf.boundingBox.right - 20) && pharaoh.boundingBox.collide(pf.boundingBox)) {
                    isSwitchable = false;
                    break;
                } else {
                    isSwitchable = true;
                }
            }
            for (var i = 0; i < platforms.length; i++) {
                var pf = platforms[i];
                // if (pharaoh.lastBottom < pf.boundingBox.top && pf.isTopPlatform) {
                //     if (RightKeyPressed === "false" && LeftKeyPressed === "false") {
                //         pharaoh.speed = 0;
                //         pharaoh.lastSpeed = 0;
                        
                //     } else {
                //         if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                //             pharaoh.speed = 0;
                //             pharaoh.lastSpeed = 0;
                //         } else {
                //             if (pharaoh.direction === "right") {
                //                 pharaoh.speed = 300;
                //             }
                //             if (pharaoh.direction === "left") {
                //                 pharaoh.speed = -300;
                //             }
                //         }
                //     }
                // }
                if (pharaoh.boundingBox.collide(pf.boundingBox) && pharaoh.lastBottom < pf.boundingBox.top && pf.isTopPlatform) {            
                    pharaoh.isJumping = false;
                    pharaoh.onPlatform = true;
                    pharaoh.y = pf.boundingBox.top - pharaoh.animation.frameHeight * SCALE + 30;
                    pharaoh.platform = pf;
                    pharaoh.state = pharaoh.previousState;
                    pharaoh.groundLevel = pharaoh.y;
                    pharaoh.setToDefault();
                    break;
                }                 
                else if (lastRight < pf.boundingBox.left || lastLeft > pf.boundingBox.right) {
                    
                    if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                        if (pharaoh.direction === "right") {
                            pharaoh.lastSpeed = pharaoh.speed;
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.left - pharaoh.animation.frameWidth * SCALE + 64;
                            pharaoh.backgroundManager.stopSpeed();
                            pharaoh.underneathPlatform = false;
                            pharaoh.setToDefault();
                            break;
                        } else if (pharaoh.direction === "left") {
                            pharaoh.lastSpeed = pharaoh.speed;
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.right - pharaoh.animation.frameWidth * SCALE + 116;
                            pharaoh.backgroundManager.stopSpeed();
                            pharaoh.underneathPlatform = false;
                            pharaoh.setToDefault();
                            break;
                        }
                    }  
                    else {
                        if (RightKeyPressed === "false" && LeftKeyPressed === "false") {
                            pharaoh.speed = 0;
                            pharaoh.lastSpeed = 0;
                            
                        } else {
                            if (pharaoh.direction === "right") {
                                pharaoh.speed = 300;
                            }
                            if (pharaoh.direction === "left") {
                                pharaoh.speed = -300;
                            }
                        }
                    }
                } 
                else if (lastRight > pf.boundingBox.left || lastLeft < pf.boundingBox.right) {
                    if (pharaoh.boundingBox.collide(pf.boundingBox) && pharaoh.boundingBox.top < pf.boundingBox.bottom) {
                        pharaoh.y = pf.boundingBox.bottom - 10;
                        pharaoh.yVelocity = 0;
                        pharaoh.isJumping = true;
                        pharaoh.underneathPlatform = true;
                        break;
                    }
                }
            }
        // When pharaoh is in underworld
        } else {
            for(var i = 0; i < platforms.length; i++) {
                var pf = platforms[i];
                if ((pharaoh.boundingBox.right > pf.boundingBox.left + 20 || pharaoh.boundingBox.left < pf.boundingBox.right - 20) && pharaoh.boundingBox.collide(pf.boundingBox)) {
                    isSwitchable = false;
                    break;
                } else {
                    isSwitchable = true;
                }
            }
            for (var i = 0; i < underworldPlatforms.length; i++) {
                var pf = underworldPlatforms[i];
                // if (pharaoh.lastBottom < pf.boundingBox.top && pf.isTopPlatform) {
                //     if (RightKeyPressed === "false" && LeftKeyPressed === "false") {
                //         pharaoh.speed = 0;
                //         pharaoh.lastSpeed = 0;
                //     } else {
                //         if (pharaoh.direction === "right") {
                //             pharaoh.speed = 300;
                //         } else if (pharaoh.direction === "left") {
                //             pharaoh.speed = -300;
                //         }
                //     }
                // }
                if (pharaoh.boundingBox.collide(pf.boundingBox) && pharaoh.lastBottom < pf.boundingBox.top && pf.isTopPlatform) {            

                    pharaoh.isJumping = false;
                    pharaoh.onPlatform = true;
                    pharaoh.y = pf.boundingBox.top - pharaoh.animation.frameHeight * SCALE + 30;
                    pharaoh.platform = pf;
                    pharaoh.state = pharaoh.previousState;
                    pharaoh.groundLevel = pharaoh.y;
                    pharaoh.setToDefault();
                    break;
                } 
                else if (lastRight < pf.boundingBox.left || lastLeft > pf.boundingBox.right) {
                    
                    if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                        if (pharaoh.direction === "right") {
                            pharaoh.lastSpeed = pharaoh.speed;
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.left - pharaoh.animation.frameWidth * SCALE + 64;
                            pharaoh.backgroundManager.stopSpeed();
                            pharaoh.underneathPlatform = false;
                            pharaoh.setToDefault();
                            break;
                        } else if (pharaoh.direction === "left") {
                            pharaoh.lastSpeed = pharaoh.speed;
                            pharaoh.speed = 0;
                            pharaoh.x = pf.boundingBox.right - pharaoh.animation.frameWidth * SCALE + 116;
                            pharaoh.backgroundManager.stopSpeed();
                            pharaoh.underneathPlatform = false;
                            pharaoh.setToDefault();
                            break;
                        }
                    } else {
                        if (RightKeyPressed === "false" && LeftKeyPressed === "false") {
                            pharaoh.speed = 0;
                            pharaoh.lastSpeed = 0;
                            
                        } else {
                            if (pharaoh.direction === "right") {
                                pharaoh.speed = 300;
                            }
                            if (pharaoh.direction === "left") {
                                pharaoh.speed = -300;
                            }
                        }
                    }
                } 
                else if (pharaoh.boundingBox.right > pf.boundingBox.left || pharaoh.boundingBox.left < pf.boundingBox.right) {
                    if (pharaoh.boundingBox.collide(pf.boundingBox) && pharaoh.boundingBox.top < pf.boundingBox.bottom) {
                        pharaoh.y = pf.boundingBox.bottom - 10;
                        pharaoh.yVelocity = 0;
                        pharaoh.isJumping = true;
                        pharaoh.underneathPlatform = true;
                        break;
                    }
                }
            }
        }
    // When pharaoh is not jumping
    } else {
        pharaoh.boundingBox = new BoundingBox (pharaoh.x + 65, pharaoh.y + 35, pharaoh.animation.frameWidth * SCALE - 130, pharaoh.animation.frameHeight * SCALE - 65);
        if (!pharaoh.underworld) {
            // check when switch to underworld there is a collision with platforms in that world
            for(var i = 0; i < underworldPlatforms.length; i++) {
                var pf = underworldPlatforms[i];
                if ((pharaoh.boundingBox.right > pf.boundingBox.left + 20 || pharaoh.boundingBox.left < pf.boundingBox.right - 20) && pharaoh.boundingBox.collide(pf.boundingBox)) {
                    isSwitchable = false;
                    break;
                } else {
                    isSwitchable = true;
                }
            }

            //
            for (var i = 0; i < platforms.length; i++) {
                var pf = platforms[i];
                if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                    if (pharaoh.direction === "right") {
                        pharaoh.lastSpeed = pharaoh.speed;
                        pharaoh.speed = 0;
                        pharaoh.x = pf.boundingBox.left - pharaoh.animation.frameWidth * SCALE + 64;
                        pharaoh.backgroundManager.stopSpeed();
                        pharaoh.setToDefault();
                    } else if (pharaoh.direction === "left") {
                        pharaoh.lastSpeed = pharaoh.speed;
                        pharaoh.speed = 0;
                        pharaoh.x = pf.boundingBox.right - pharaoh.animation.frameWidth * SCALE + 116;
                        pharaoh.backgroundManager.stopSpeed();  
                        pharaoh.setToDefault();
                    }
                }
            }
        } else {
            for(var i = 0; i < platforms.length; i++) {
                var pf = platforms[i];
                if ((pharaoh.boundingBox.right > pf.boundingBox.left + 20 || pharaoh.boundingBox.left < pf.boundingBox.right - 20) && pharaoh.boundingBox.collide(pf.boundingBox)) {
                    isSwitchable = false;
                    break;
                } else {
                    isSwitchable = true;
                }
            }
            for (var i = 0; i < underworldPlatforms.length; i++) {
                var pf = underworldPlatforms[i];
                if (pharaoh.boundingBox.collide(pf.boundingBox)) {
                    if (pharaoh.direction === "right") {
                        pharaoh.lastSpeed = pharaoh.speed;
                        pharaoh.speed = 0;
                        pharaoh.x = pf.boundingBox.left - pharaoh.animation.frameWidth * SCALE + 64;
                        pharaoh.backgroundManager.stopSpeed();
                        pharaoh.setToDefault();
                    } else if (pharaoh.direction === "left") {
                        pharaoh.lastSpeed = pharaoh.speed;
                        pharaoh.speed = 0;
                        pharaoh.x = pf.boundingBox.right - pharaoh.animation.frameWidth * SCALE + 116;
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
                if (pharaoh.boundingBox.collide(pf.boundingBox) && pf.isTopPlatform) {
                    pharaoh.isJumping = false;
                    pharaoh.onPlatform = true;
                    pharaoh.speed = pharaoh.lastSpeed;
                    pharaoh.y = pf.boundingBox.top - pharaoh.animation.frameHeight * SCALE + 29;
                    pharaoh.platform = pf;
                    pharaoh.state = pharaoh.previousState;
                    pharaoh.groundLevel = pharaoh.y;
                    pharaoh.setToDefault();
                } else {
                    if (pharaoh.boundingBox.left > pharaoh.platform.boundingBox.right || 
                        pharaoh.boundingBox.right < pharaoh.platform.boundingBox.left) {
                            pharaoh.speed = pharaoh.lastSpeed;
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
                if (pharaoh.boundingBox.collide(pf.boundingBox) && pf.isTopPlatform) {
                    pharaoh.speed = pharaoh.lastSpeed;
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
                            pharaoh.speed = pharaoh.lastSpeed;
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

function controlPowerUps(pharaoh){
   
    powerUps.forEach(powerUp => {
        //console.log(Math.abs(pharaoh.x - (powerUp.x)) + Math.abs(pharaoh.y - (powerUp.y-100)));
        if (Math.abs(pharaoh.x - (powerUp.x-40)) + Math.abs(pharaoh.y - (powerUp.y-100)) < 50){
            if (powerUp.type === "heart") {
                powerUp.giveHealthTo(pharaoh);
                console.log(pharaoh.health);
            } else {
                powerUp.givePowerTo(pharaoh);
            }
        }
    });
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

Pharaoh.prototype.setX = function(value){
    this.x = value;
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
    if (this.won === false){
        this.underworld = !this.underworld;
        this.groundLevel = GROUND_LEVEL;
        this.yVelocity = 0;
        this.isJumping = true;
        // this.onPlatform = false;
        this.setToDefault();

    } else {
        this.underworld = true;
        //this.speed = 0;
    }

}

Pharaoh.prototype.collideWithProjectile = function(other) {
    if (other.name === "rock") {
        if (this.level === 1) {
            if ((other.x - 70) < this.x && this.x < (other.x + 70) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
                return true; 
            }
        } else {
            if ((other.x - 30) < this.x && this.x < (other.x + 30) && (other.y - 30) < this.y && this.y < (other.y + 30)) {
                return true; 
            }
        }
    } else {
        if (this.level === 1) {
            if ((other.x - 30) < this.x && this.x < (other.x + 30) && (other.y - 40) < this.y && this.y < (other.y + 40)) {
                return true; 
            } 
        } else if (this.level === 2) {
            if ((other.x - 25) < this.x && this.x < (other.x + 20) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
                return true; 
            }    
        } else if (this.level === 3) {
            if ((other.x - 110) < this.x && this.x < (other.x + 110) && (other.y - 120) < this.y && this.y < (other.y + 120)) {
                return true; 
            }  
        } else {
            if ((other.x - 110) < this.x && this.x < (other.x + 110) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
                return true; 
            } 
        }
    }
}

Pharaoh.prototype.collide = function(other) {
    if (other.name === "demon") {
        if ((other.x - 120) < this.x && this.x < (other.x + 120) && (other.y - 150) < this.y && this.y < (other.y + 150)) {
            return true; 
        }
    } else if (other.name === "snake") {
        if (other.level === 3) {
            if ((other.x - 130) < this.x && this.x < (other.x + 40) && (other.y - 70) < this.y && this.y < (other.y + 70)) {
                return true; 
            }
        } else {
          if ((other.x - 130) < this.x && this.x < (other.x + 40) && (other.y - 100) < this.y && this.y < (other.y + 100)) {
                return true; 
            }  
        }
    } else {
        if ((other.x - 60) < this.x && this.x < (other.x + 60) && (other.y - 70) < this.y && this.y < (other.y + 70)) {
            return true;
        }
    }
}