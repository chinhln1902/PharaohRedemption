var AM = new AssetManager();


// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
    var that = this;
    this.underworld = false;

    document.addEventListener("keydown", function (e) {
        console.log(e);
		//Running right 
		if (e.code === "Space"){
            console.log("underworld: " + that.underworld);
            e.preventDefault();
            if (that.underworld){
                
                that.switch(AM.getAsset("./assets/backgrounds/egypt.png"));
            } else {
                that.switch(AM.getAsset("./assets/backgrounds/underworld.png"));
            }
            
        }
    });
}

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y,1200,780);
}

Background.prototype.update = function () {
}

Background.prototype.switch = function(background){
    this.spritesheet = background;
    this.underworld = !this.underworld;
}


//Background
AM.queueDownload("./assets/backgrounds/desertBackground1.jpg");
AM.queueDownload("./assets/backgrounds/egypt.png");
AM.queueDownload("./assets/backgrounds/underworld.png");

//Pharo
AM.queueDownload("./assets/sprites/2_MUMMY/_IDLE/IDLE SpriteSheet.png"); //idle
AM.queueDownload("./assets/sprites/2_MUMMY/_WALK/WALK SpriteSheet.png"); //walking
AM.queueDownload("./assets/sprites/2_MUMMY/_RUN/RUN SpriteSheet.png"); //running
//Pharaoh right
AM.queueDownload("./assets/sprites/Egyptian Mummy/Dying/Dying SpriteSheet.png");                             //dying 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Falling Down/Falling Down SpriteSheet.png");               //falling down 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Hurt/Hurt SpriteSheet.png");                               //hurt 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet.png");                               //idle
AM.queueDownload("./assets/sprites/Egyptian Mummy/Idle Blinking/Idle Blinking SpriteSheet.png");             //idle blinking 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Jump Loop/Jump Loop SpriteSheet.png");                     //jump loop 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Jump Start/Jump Start SpriteSheet.png");                   //jump start right
AM.queueDownload("./assets/sprites/Egyptian Mummy/Kicking/Kicking SpriteSheet.png");                         //kicking 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Run Slashing/Run Slashing SpriteSheet.png");               //run slashing 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Run Throwing/Run Throwing SpriteSheet.png");               //run throwing
AM.queueDownload("./assets/sprites/Egyptian Mummy/Running/Running SpriteSheet.png");                         //running
AM.queueDownload("./assets/sprites/Egyptian Mummy/Slashing/Slashing SpriteSheet.png");                       //slashing
AM.queueDownload("./assets/sprites/Egyptian Mummy/Slashing in The Air/Slashing in The Air SpriteSheet.png"); //slashing in the air 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Sliding/Sliding SpriteSheet.png");                         //sliding
AM.queueDownload("./assets/sprites/Egyptian Mummy/Throwing/Throwing SpriteSheet.png");                       //throwing 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Throwing in The Air/Throwing in The Air SpriteSheet.png"); //throwing in the air 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Walking/Walking SpriteSheet.png");                         //walking 
//Pharaoh left
AM.queueDownload("./assets/sprites/Egyptian Mummy/Dying/Dying SpriteSheet flip.png");                             //dying 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Falling Down/Falling Down SpriteSheet flip.png");               //falling down 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Hurt/Hurt SpriteSheet flip.png");                               //hurt 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet flip.png");                               //idle
AM.queueDownload("./assets/sprites/Egyptian Mummy/Idle Blinking/Idle Blinking SpriteSheet flip.png");             //idle blinking 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Jump Loop/Jump Loop SpriteSheet flip.png");                     //jump loop 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Jump Start/Jump Start SpriteSheet flip.png");                   //jump start 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Kicking/Kicking SpriteSheet flip.png");                         //kicking 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Run Slashing/Run Slashing SpriteSheet flip.png");               //run slashing 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Run Throwing/Run Throwing SpriteSheet flip.png");               //run throwing
AM.queueDownload("./assets/sprites/Egyptian Mummy/Running/Running SpriteSheet flip.png");                         //running
AM.queueDownload("./assets/sprites/Egyptian Mummy/Slashing/Slashing SpriteSheet flip.png");                       //slashing
AM.queueDownload("./assets/sprites/Egyptian Mummy/Slashing in The Air/Slashing in The Air SpriteSheet flip.png"); //slashing in the air 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Sliding/Sliding SpriteSheet flip.png");                         //sliding
AM.queueDownload("./assets/sprites/Egyptian Mummy/Throwing/Throwing SpriteSheet flip.png");                       //throwing 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Throwing in The Air/Throwing in The Air SpriteSheet flip.png"); //throwing in the air 
AM.queueDownload("./assets/sprites/Egyptian Mummy/Walking/Walking SpriteSheet flip.png");                         //walking 
//Pharaoh right
AM.queueDownload("./assets/sprites/Egyptian Sentry/Dying/Dying SpriteSheet.png");                             //dying 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Falling Down/Falling Down SpriteSheet.png");               //falling down 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Hurt/Hurt SpriteSheet.png");                               //hurt 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Idle/Idle SpriteSheet.png");                               //idle
AM.queueDownload("./assets/sprites/Egyptian Sentry/Idle Blinking/Idle Blinking SpriteSheet.png");             //idle blinking 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Jump Loop/Jump Loop SpriteSheet.png");                     //jump loop 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Jump Start/Jump Start SpriteSheet.png");                   //jump start right
AM.queueDownload("./assets/sprites/Egyptian Sentry/Kicking/Kicking SpriteSheet.png");                         //kicking 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Run Slashing/Run Slashing SpriteSheet.png");               //run slashing 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Run Throwing/Run Throwing SpriteSheet.png");               //run throwing
AM.queueDownload("./assets/sprites/Egyptian Sentry/Running/Running SpriteSheet.png");                         //running
AM.queueDownload("./assets/sprites/Egyptian Sentry/Slashing/Slashing SpriteSheet.png");                       //slashing
AM.queueDownload("./assets/sprites/Egyptian Sentry/Slashing in The Air/Slashing in The Air SpriteSheet.png"); //slashing in the air 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Sliding/Sliding SpriteSheet.png");                         //sliding
AM.queueDownload("./assets/sprites/Egyptian Sentry/Throwing/Throwing SpriteSheet.png");                       //throwing 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Throwing in The Air/Throwing in The Air SpriteSheet.png"); //throwing in the air 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Walking/Walking SpriteSheet.png");                         //walking 
//Pharaoh left
AM.queueDownload("./assets/sprites/Egyptian Sentry/Dying/Dying SpriteSheet flip.png");                             //dying 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Falling Down/Falling Down SpriteSheet flip.png");               //falling down 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Hurt/Hurt SpriteSheet flip.png");                               //hurt 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Idle/Idle SpriteSheet flip.png");                               //idle
AM.queueDownload("./assets/sprites/Egyptian Sentry/Idle Blinking/Idle Blinking SpriteSheet flip.png");             //idle blinking 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Jump Loop/Jump Loop SpriteSheet flip.png");                     //jump loop 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Jump Start/Jump Start SpriteSheet flip.png");                   //jump start 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Kicking/Kicking SpriteSheet flip.png");                         //kicking 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Run Slashing/Run Slashing SpriteSheet flip.png");               //run slashing 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Run Throwing/Run Throwing SpriteSheet flip.png");               //run throwing
AM.queueDownload("./assets/sprites/Egyptian Sentry/Running/Running SpriteSheet flip.png");                         //running
AM.queueDownload("./assets/sprites/Egyptian Sentry/Slashing/Slashing SpriteSheet flip.png");                       //slashing
AM.queueDownload("./assets/sprites/Egyptian Sentry/Slashing in The Air/Slashing in The Air SpriteSheet flip.png"); //slashing in the air 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Sliding/Sliding SpriteSheet flip.png");                         //sliding
AM.queueDownload("./assets/sprites/Egyptian Sentry/Throwing/Throwing SpriteSheet flip.png");                       //throwing 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Throwing in The Air/Throwing in The Air SpriteSheet flip.png"); //throwing in the air 
AM.queueDownload("./assets/sprites/Egyptian Sentry/Walking/Walking SpriteSheet flip.png");   

//snake
AM.queueDownload("./assets/sprites/PSNAKE-IDLE2.png"); 

//Goul 
AM.queueDownload("./assets/sprites/Goul Walk.png");
//AM.queueDownload("./../assets/sprites/Goul Die.png");


//projectile
AM.queueDownload("./assets/sprites/magic/PNG/comet/csheet.png");
AM.queueDownload("./assets/sprites/magic/PNG/comet/csheetflip.png");

//Bat
AM.queueDownload("./assets/sprites/Bat Fly Flip.png");

//Platform
AM.queueDownload("./assets/platforms/Volcano Level Set_Platformer - Wooden Barrel.png");
//Archer
AM.queueDownload("./assets/sprites/Archer-Idle.png");
AM.queueDownload("./assets/sprites/Archer-Shooting.png")

//Arrow for the archer
AM.queueDownload("./assets/sprites/Arrow.png"); 




AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    var loadedGame = false;
    
    while(!loadedGame){
        console.log("Loaded Game?: "+AM.isDone());
        if (AM.isDone()){
            var gameEngine = new GameEngine();
            gameEngine.init(ctx);
            gameEngine.start();

            //Pharaoh class 
            var mainCharacter = new Pharaoh(gameEngine, AM);
            var secondCharacter = new Sentry(gameEngine, AM);
			var goul = new Goul(gameEngine, AM.getAsset("./assets/sprites/Goul Walk.png"));
            var bat = new Bat(gameEngine, AM.getAsset("./assets/sprites/Bat Fly Flip.png"));
            var archer = new Archer(gameEngine, AM); 
			var enemy = new Snake(gameEngine, AM.getAsset("./assets/sprites/PSNAKE-IDLE2.png")); 


            

            //Pharaoh Controller class
            var characterControl = new pharaohController(mainCharacter);
            var otherCharacterControl = new pharaohController(secondCharacter);
            //Add platform for level 1
            var platformLevel1 = new platformController(gameEngine, AM);


            gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./assets/backgrounds/egypt.png")));
            // gameEngine.addEntity(goul);

            gameEngine.addEntity(mainCharacter);
            gameEngine.addEntity(secondCharacter);
            gameEngine.addEntity(enemy);  
            gameEngine.addEntity(bat);  
            
            platformLevel1.loadPlatformsLevel1();

            // gameEngine.addEntity(woodenBarrel);
            gameEngine.addEntity(archer); 
			gameEngine.addEntity(goul);
            loadedGame = true;  
            
        }
    } 
    
    
    console.log("AM Number of assets: " + AM.getNumberOfAssets());
    //mainCharacter.jump();
    //mainCharacter.walkRight();

    console.log("All Done!"); 
});




