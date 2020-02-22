function hint(game, sprite, x, y, underworld, message) {
    var YOFFSET = 70;
    var SCALE = 70;
    this.x = x * SCALE;
    this.y = y * SCALE + YOFFSET;
    this.width = SCALE;
    this.height = this.width;
    this.sprite = sprite;
    this.game = game;
    this.ctx = game.ctx;
    this.underworld = underworld;
    this.message = message;
    this.game.addEntity(this);
    this.boundingBox = new BoundingBox(this.x, this.y, this.width, this.height);
    //this.pharaoh = game.entities[21] //game.entities.indexOf(mainCharacter)
    //console.log("pharaoh is " + game.entities.indexOf("mainCharacter"));
    var that = this;
    document.addEventListener("keydown", function (e) {
            if (e.code === "Space") {
                e.preventDefault();
                that.underworld = !that.underworld;
            }
    });    
    
}

hint.prototype = new Entity();
hint.prototype.constructor = hint;

hint.prototype.update = function() {
    
}


hint.prototype.draw = function() {
    
    this.ctx.drawImage(this.sprite , this.x - this.game.getCamera().getX(), this.y, this.width, this.height);
}

// hint.prototype.swichWorlds() = function(){
//     this.underworld = !this.underworld;
// }

hint.prototype.displayMessage = function(){
    console.log("displaying message");
    var msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = this.message;
   
}

hint.prototype.dontDisplay = function(){
    var msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";
}



