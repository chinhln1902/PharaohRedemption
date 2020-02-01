//Website for using the keyboard with animations
//http://nokarma.org/2011/02/27/javascript-game-development-keyboard-input/index.html
//https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
// inheritance 
var Key = {
    _pressed: {},
  
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    
    isDown: function(keyCode) {
      return this._pressed[keyCode];
    },
    
    onKeydown: function(event) {
      this._pressed[event.keyCode] = true;
    },
    
    onKeyup: function(event) {
      delete this._pressed[event.keyCode];
    }
  };
// Pharo
function Pharo(game, assetManager) {
    
    this.AM = assetManager;
    this.animation = new Animation(AM.getAsset("./assets/sprites/2_MUMMY/_IDLE/IDLE SpriteSheet.png"), 878, 916, 7, 0.05, 7, true, 0.2); //idle animation
    this.speed = 0;
    this.ctx = game.ctx;

    document.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
    document.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

    Entity.call(this, game, 0, 250);
    this.y = 490;
}

Pharo.prototype = new Entity();
Pharo.prototype.constructor = Pharo;

Pharo.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    //if (this.x > 1200) this.x = -230;

    //New 
    if (Key.isDown(Key.RIGHT)) {
        this.run();
    }
    Entity.prototype.update.call(this);
}

Pharo.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

Pharo.prototype.run = function () {
    this.animation = new Animation(AM.getAsset("./assets/sprites/2_MUMMY/_RUN/RUN SpriteSheet.png"), 1013, 1055, 7, 0.05, 7, true, 0.2); //running animation
    this.speed = 300;
    //this.y -= 20;
    console.log("pharo is running");
}

Pharo.prototype.walk = function () {
    this.animation = new Animation(AM.getAsset("./assets/sprites/2_MUMMY/_WALK/WALK SpriteSheet.png"), 985, 950, 7, 0.05, 7, true, 0.2); //walking animation
    this.speed = 100;
    console.log("pharo is walking");
}

