function Platform(game, sprite, x, y, isTopPlatform, underworld, causeDamage) {
    var YOFFSET = 70;
    var SCALE = 70;
    this.x = x * SCALE;
    this.y = y * SCALE + YOFFSET;
    this.width = SCALE;
    this.height = this.width;
    this.platformSheet = sprite;
    this.game = game;
    this.ctx = game.ctx;
    this.type = "platform"; 

    var RightKeyPressed = "false";
    var LeftKeyPressed = "false";

    if (underworld){
        this.underworld = underworld;
    } else {
        this.underworld = false;
    }
    this.isTopPlatform = isTopPlatform;
    this.causeDamage = causeDamage;
    this.boundingBox = new BoundingBox(this.x, this.y, this.width, this.height);
    this.game.addEntity(this);
    var that = this;

    document.addEventListener("keydown", function (e) {
            if (e.code === "Space") {
                e.preventDefault();
                that.underworld = !that.underworld;
            }
            if (e.code === "ArrowRight" && RightKeyPressed === "false"){
                RightKeyPressed = "true";
    
            } 
             if (e.code === "ArrowLeft" && LeftKeyPressed === "false"){
                LeftKeyPressed = "true";
             }
    }, false);    

    document.addEventListener("keyup", function (e) {
        //Running right 
        if (e.code === "ArrowRight" && RightKeyPressed === "true"){
            RightKeyPressed = "false";

        }
         if (e.code === "ArrowLeft" && LeftKeyPressed === "true"){
            LeftKeyPressed = "false";

        }

    }, false);
    
}

Platform.prototype = new Entity();
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function() {

    if (!this.underworld) {
            if(this.RightKeyPressed === "true")
            this.ctx.drawImage(this.platformSheet , this.x - this.game.getCamera().getX() - 3, this.y, this.width, this.height);

            else {
                this.ctx.drawImage(this.platformSheet , this.x - this.game.getCamera().getX() + 3, this.y, this.width, this.height);

            }

    } else {

 
        
    }
}

// Platform.prototype.swichWorlds() = function(){
//     this.underworld = !this.underworld;
// }

// Platform.prototype.update = function() {
//     console.log("platform update is being called"); 
//     Entity.prototype.update.call(this);
// }