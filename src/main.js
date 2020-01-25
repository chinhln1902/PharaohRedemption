var AM = new AssetManager();


// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y,1200,780);
};

Background.prototype.update = function () {
};

//Background
AM.queueDownload("./../assets/backgrounds/desertBackground1.jpg");
//Pharo
AM.queueDownload("./../assets/sprites/2_MUMMY/_IDLE/IDLE SpriteSheet.png"); //idle
AM.queueDownload("./../assets/sprites/2_MUMMY/_WALK/WALK SpriteSheet.png"); //walking
AM.queueDownload("./../assets/sprites/2_MUMMY/_RUN/RUN SpriteSheet.png"); //running
//Pharaoh
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Dying/Dying SpriteSheet.png");                             //dying 
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Falling Down/Falling Down SpriteSheet.png");               //falling down 
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Hurt/Hurt SpriteSheet.png");                               //hurt 
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet.png");                               //idle right
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Idle/Idle SpriteSheet flip.png");                               //idle left
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Idle Blinking/Idle Blinking SpriteSheet.png");             //idle blinking 
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Jump Loop/Jump Loop SpriteSheet.png");                     //jump loop 
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Jump Start/Jump Start SpriteSheet.png");                   //jump start right
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Jump Start/Jump Start SpriteSheet flip.png");              //jump start left
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Kicking/Kicking SpriteSheet.png");                         //kicking 
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Run Slashing/Run Slashing SpriteSheet.png");               //run slashing 
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Run Throwing/Run Throwing SpriteSheet.png");               //run throwing
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Running/Running SpriteSheet.png");                         //running right
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Running/Running SpriteSheet flip.png");                    //running left
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Slashing/Slashing SpriteSheet.png");                       //slashing
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Slashing in The Air/Slashing in The Air SpriteSheet.png"); //slashing in the air 
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Sliding/Sliding SpriteSheet.png");                         //sliding
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Throwing/Throwing SpriteSheet.png");                       //throwing 
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Throwing in The Air/Throwing in The Air SpriteSheet.png"); //throwing in the air 
AM.queueDownload("./../assets/sprites/Egyptian Mummy/Walking/Walking SpriteSheet.png");                         //walking 
AM.queueDownload("./../assets/sprites/PSNAKE-IDLE2.png"); 




AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    //Pharaoh class
    var mainCharacter = new Pharaoh(gameEngine, AM);
    var enemy = new Snake(gameEngine, AM.getAsset("./../assets/sprites/PSNAKE-IDLE2.png")); 

    //Pharaoh Controller class
    var characterControl = new pharaohController(mainCharacter);


    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./../assets/backgrounds/desertBackground1.jpg")));
    gameEngine.addEntity(mainCharacter);
    gameEngine.addEntity(enemy); 

    //mainCharacter.jump();
    //mainCharacter.walkRight();

    console.log("All Done!");
});