function levelcontroller(){
    console.log("welcome to the level controller. Please select a level");
    
}

levelcontroller.prototype.level1 = function(){
    console.log("loading level 1"); 
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var background = new BackgroundManager(AM, gameEngine);
    
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    var camera = new Camera(gameEngine);
    gameEngine.addEntityCamera(camera);
       
    var mainCharacter = new Pharaoh(gameEngine, AM);
    gameEngine.addEntityMainCharacter(mainCharacter);
    var characterControl = new pharaohController(mainCharacter);

    var enemyController = new EnemyController(gameEngine);
    enemyController.level1();

    var platformController = new PlatformController(gameEngine, AM);
    platformController.loadPlatformsLevel1();

    


    
}