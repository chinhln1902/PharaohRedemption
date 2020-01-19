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


AM.queueDownload("./../assets/backgrounds/desertBackground1.jpg");
AM.queueDownload("./../assets/sprites/2_MUMMY/_IDLE/IDLE SpriteSheet.png"); //idle
AM.queueDownload("./../assets/sprites/2_MUMMY/_WALK/WALK SpriteSheet.png"); //walking
AM.queueDownload("./../assets/sprites/2_MUMMY/_RUN/RUN SpriteSheet.png"); //running

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    var pharo = new Pharo(gameEngine, AM)
    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./../assets/backgrounds/desertBackground1.jpg")));
    gameEngine.addEntity(pharo);
    
    // choose to make pharo walk or run:
    //pharo.walk();
    //pharo.run();

    console.log("All Done!");
});