function EnemyController(game, camera){
    this.gameEngine = game;
    this.cam = camera; 
}

// enemyController.prototype = new Entity();
EnemyController.prototype.constructor = EnemyController;

EnemyController.prototype.level1 = function(){
    var goul = new Goul(this.gameEngine, AM, 100, 350);
    var bat = new Bat(this.gameEngine, AM, 1000, 360);
    var archer = new Archer(this.gameEngine, AM, 25, 485); 
    var snake = new Snake(this.gameEngine, AM, 800, 555);
    
    var warrior = new Warrior(this.gameEngine, AM, 600, 410);

    //var snaker = new Snaker(this.gameEngine, AM, 300, 555);  

    //this.gameEngine.addEntity(snaker); 
    this.gameEngine.addEntity(snake);  
    this.gameEngine.addEntity(bat);  
    this.gameEngine.addEntity(archer); 
    this.gameEngine.addEntity(goul);
    this.gameEngine.addEntity(warrior);

}






	