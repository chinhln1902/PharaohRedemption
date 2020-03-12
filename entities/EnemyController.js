function EnemyController(game, camera){
    this.gameEngine = game;
    this.cam = camera; 
}

// enemyController.prototype = new Entity();
EnemyController.prototype.constructor = EnemyController;

EnemyController.prototype.level1 = function(){
    var goul = new Goul(this.gameEngine, AM, 100, 350);
    var bat = new Bat(this.gameEngine, AM, 80*70, 3.7*70);
    //var demon = new Demon(this.gameEngine, AM, 30*70, 5.8*70, 0); 
    var archer = new Archer(this.gameEngine, AM, 58.2*70, 4.9*70); 
    var snake = new Snake(this.gameEngine, AM, 30.5*70, 8*70);
    var snake1 = new Snake(this.gameEngine, AM, 65.5*70, 5.9*70);
    var snake2 = new Snake(this.gameEngine, AM, 68.5*70, 3.9*70);
    var snake3 = new Snake(this.gameEngine, AM, 71.8*70, 1.9*70);
    var warrior = new Warrior(this.gameEngine, AM, 94*70, 1*70);

 
 
    //this.gameEngine.addEntity(demon);
    this.gameEngine.addEntity(snake);  
    this.gameEngine.addEntity(snake1);
    this.gameEngine.addEntity(snake2);
    this.gameEngine.addEntity(snake3);
    this.gameEngine.addEntity(archer); 
    this.gameEngine.addEntity(bat); 
    //this.gameEngine.addEntity(goul);
    this.gameEngine.addEntity(warrior);

}

EnemyController.prototype.level2 = function() {
    var bat = new Bat(this.gameEngine, AM, 11*70, 1.5*70);
    var archer = new Archer(this.gameEngine, AM, 25.1*70, 1.9*70); 
    var snake = new Snake(this.gameEngine, AM, 31.7*70, .9*70);
    var bat2 = new Bat(this.gameEngine, AM, 72*70, 3*70);
    var bat3 = new Bat(this.gameEngine, AM, 78*70, 3*70);
    var demon = new Demon(this.gameEngine, AM, 93.5*70, 2.8*70, 0); 

    this.gameEngine.addEntity(bat);
    this.gameEngine.addEntity(archer);
    this.gameEngine.addEntity(snake);
    this.gameEngine.addEntity(bat2);
    this.gameEngine.addEntity(bat3);
    this.gameEngine.addEntity(demon); 

}







	