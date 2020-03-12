function levelcontroller(){
    //console.log("welcome to the level controller. Please select a level");
    
}

levelcontroller.prototype.level1 = function(){
    //console.log("loading level 1"); 
    var canvas = document.getElementById("gameWorld");
    canvas.style.marginTop = ((window.innerHeight - 780)/2) + "px";
    var ctx = canvas.getContext("2d");
    
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    var camera = new Camera(gameEngine);      
    var mainCharacter = new Pharaoh(gameEngine, AM, camera);
    var characterControl = new pharaohController(mainCharacter);

    var enemyController = new EnemyController(gameEngine, camera);
    enemyController.level1();

    var platformController = new PlatformController(gameEngine, AM);
    platformController.loadPlatformsLevel1();

    gameEngine.addEntityMainCharacter(mainCharacter);
    gameEngine.addEntityCamera(camera);

}
levelcontroller.prototype.level2 = function(){
    //console.log("loading level 1"); 
    var canvas = document.getElementById("gameWorld");
    canvas.style.marginTop = ((window.innerHeight - 780)/2) + "px";
    var ctx = canvas.getContext("2d");
    
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    var camera = new Camera(gameEngine);      
    var mainCharacter = new Pharaoh(gameEngine, AM, camera);
    var characterControl = new pharaohController(mainCharacter);

    var enemyController = new EnemyController(gameEngine, camera);
    enemyController.level2();

    var platformController = new PlatformController(gameEngine, AM);
    platformController.loadPlatformsLevel2();

    gameEngine.addEntityMainCharacter(mainCharacter);
    gameEngine.addEntityCamera(camera);

}
levelcontroller.prototype.level3 = function(){
    //console.log("loading level 1"); 
    var canvas = document.getElementById("gameWorld");
    canvas.style.marginTop = ((window.innerHeight - 780)/2) + "px";
    var ctx = canvas.getContext("2d");
    
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    var camera = new Camera(gameEngine);      
    var mainCharacter = new Pharaoh(gameEngine, AM, camera);
    var characterControl = new pharaohController(mainCharacter);

    //var enemyController = new EnemyController(gameEngine, camera);
    //enemyController.level2();

    var platformController = new PlatformController(gameEngine, AM);
    platformController.loadPlatformsLevel3();

    gameEngine.addEntityMainCharacter(mainCharacter);
    gameEngine.addEntityCamera(camera);

}
levelcontroller.prototype.level4 = function(){
    
    var canvas = document.getElementById("gameWorld");
    canvas.style.marginTop = ((window.innerHeight - 780)/2) + "px";
    var ctx = canvas.getContext("2d");
    
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    var camera = new Camera(gameEngine);      
    var mainCharacter = new Pharaoh(gameEngine, AM, camera); 
    var characterControl = new pharaohController(mainCharacter);
    var anubis = new Anubis(mainCharacter, gameEngine, AM, 10*70, 6.15*70);

    var platformController = new PlatformController(gameEngine, AM);
    platformController.loadPlatformsLevel4();

    gameEngine.addEntityMainCharacter(mainCharacter);
    gameEngine.addEntity(anubis);
    camera.level4 = true;
    mainCharacter.backgroundManager.level4 = true;
    gameEngine.addEntityCamera(camera);
}