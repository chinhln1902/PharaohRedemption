function EnemyController(game, camera){
    this.gameEngine = game;
    this.cam = camera; 
}

// enemyController.prototype = new Entity();
EnemyController.prototype.constructor = EnemyController;

EnemyController.prototype.level1 = function(){
    var goul = new Goul(this.gameEngine, AM.getAsset("./assets/sprites/Goul Walk.png"));
    var bat = new Bat(this.gameEngine, AM.getAsset("./assets/sprites/Bat Fly Flip.png"));
    var archer = new Archer(this.gameEngine, AM); 
    var enemy = new Snake(this.gameEngine, AM.getAsset("./assets/sprites/PSNAKE-IDLE2.png")); 

    this.gameEngine.addEntity(enemy);  
    this.gameEngine.addEntity(bat);  
    this.gameEngine.addEntity(archer); 
	this.gameEngine.addEntity(goul);
}






	