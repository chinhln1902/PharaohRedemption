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
    var demon = new Demon(this.gameEngine, AM, 93.5*70, 3.05*70, 0); 

    this.gameEngine.addEntity(bat);
    this.gameEngine.addEntity(archer);
    this.gameEngine.addEntity(snake);
    this.gameEngine.addEntity(bat2);
    this.gameEngine.addEntity(bat3);
    this.gameEngine.addEntity(demon); 

}

EnemyController.prototype.level3 = function() {
 var bat = new Bat(this.gameEngine, AM, 14*70, 3*70);
 var bat2 = new Bat(this.gameEngine, AM, 20*70, 3*70);
 var bat3 = new Bat(this.gameEngine, AM, 10*70, 1*70);
 var bat4 = new Bat(this.gameEngine, AM, 55*70, 7*70);
 var bat5 = new Bat(this.gameEngine, AM, 57*70, 7*70); 
 var snake = new Snake(this.gameEngine, AM, 10*70, 7.95*70);
 var snake2 = new Snake(this.gameEngine, AM, 17*70, 7.95*70); 
 var warrior = new Warrior(this.gameEngine, AM, 20.2*70, 4.9*70);
 var warrior2 = new Warrior(this.gameEngine, AM, 28.2*70, 4.92*70);
 var archer = new Archer(this.gameEngine, AM, 29.3*70, 2.85*70); 
 var warrior3 = new Warrior(this.gameEngine, AM, 29.2*70, .9*70);
 var demon = new Demon(this.gameEngine, AM, 60.5*70, .2*70, 1);
 var demon2 = new Demon(this.gameEngine, AM, 80*70,  .2*70, 1); 
 var archer2 = new Archer(this.gameEngine, AM, 54.5*70, 3.9*70);
 var snake8 = new Snake(this.gameEngine, AM, 56*70, 4.85*70);
 var warrior5 = new Warrior(this.gameEngine, AM, 61.2*70, 3.95*70); 
 //var snake3 = new Snake(this.gameEngine, AM, 71.5*70, 1.9*70); 
 //var snake7 = new Snake(this.gameEngine, AM, 74*70, 1.9*70);
 var snake4 = new Snake(this.gameEngine, AM, 33*70, 7.95*70);
 var snake5 = new Snake(this.gameEngine, AM, 38*70, 7.95*70);
 var snake6 = new Snake(this.gameEngine, AM, 42*70, 7.95*70);
 var warrior4 = new Warrior(this.gameEngine, AM, 45.2*70, 3.9*70);
 var archer4 = new Archer(this.gameEngine, AM, 69*70, 6.9*70); 
 var demon3 = new Demon(this.gameEngine, AM, 73.5*70, 6.3*70, 0);  
 var demon4 = new Demon(this.gameEngine, AM, 78*70, 6.3*70, 1); 
 var demon5 = new Demon(this.gameEngine, AM, 98*70, .2*70, 0); 
 var demon6 = new Demon(this.gameEngine, AM, 98*70, .2*70, 1); 
 var archer3 = new Archer(this.gameEngine, AM, 73*70, 3.8*70); 
 var bat6 = new Bat(this.gameEngine, AM, 90*70, 10*70); 
 var bat7 = new Bat(this.gameEngine, AM, 96*70, 10*70);
 var demon7 = new Demon(this.gameEngine, AM, 66.2*70, .2*70, 0);  
 //var warrior6 = new Warrior(this.gameEngine, AM, 76.5*70, .95*70);
 var warrior7 = new Warrior(this.gameEngine, AM, 83.5*70, 3.95*70); 
 
 //this.gameEngine.addEntity(bat);  
 //this.gameEngine.addEntity(bat2);  
 //this.gameEngine.addEntity(bat3); 
 this.gameEngine.addEntity(snake); 
 this.gameEngine.addEntity(snake2); 
 this.gameEngine.addEntity(warrior); 
 //this.gameEngine.addEntity(warrior2); 
 //this.gameEngine.addEntity(archer); 
 //this.gameEngine.addEntity(warrior3); 
 this.gameEngine.addEntity(demon); 
 this.gameEngine.addEntity(demon2); 
 this.gameEngine.addEntity(bat4);
 this.gameEngine.addEntity(bat5); 
 this.gameEngine.addEntity(archer2); 
 //this.gameEngine.addEntity(snake3); 
 this.gameEngine.addEntity(snake4);
 this.gameEngine.addEntity(snake5);
 this.gameEngine.addEntity(snake6);
 this.gameEngine.addEntity(warrior4); 
 //this.gameEngine.addEntity(snake7);
 this.gameEngine.addEntity(demon3);  
 this.gameEngine.addEntity(demon4);
 this.gameEngine.addEntity(demon5); 
 this.gameEngine.addEntity(demon6);  
 this.gameEngine.addEntity(archer3); 
 this.gameEngine.addEntity(archer4); 
 this.gameEngine.addEntity(snake8); 
 this.gameEngine.addEntity(warrior5); 
 this.gameEngine.addEntity(bat6);
 this.gameEngine.addEntity(bat7); 
 this.gameEngine.addEntity(demon7);
 //this.gameEngine.addEntity(warrior6);
 this.gameEngine.addEntity(warrior7);  
}







	