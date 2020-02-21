function Platform(game, sprite, x, y, isTopPlatform) {
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
    this.underworld = false;
    this.isTopPlatform = isTopPlatform;
    this.boundingBox = new BoundingBox(this.x, this.y, this.width, this.height);
    this.game.addEntity(this);
    var that = this;
    document.addEventListener("keydown", function (e) {
            if (e.code === "Space") {
                e.preventDefault();
                that.underworld = !that.underworld;
            }
    });    
}

Platform.prototype = new Entity();
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function() {
    if (this.underworld) {
        for (var i = 0; i < underworldPlatforms.length; i++) {
            var pf = underworldPlatforms[i];
            this.ctx.drawImage(pf.platformSheet , pf.x - pf.game.getCamera().getX(), pf.y, pf.width, pf.height);
        }
    } else {
        for (var i = 0; i < platforms.length; i++) {
            var pf = platforms[i];
            this.ctx.drawImage(pf.platformSheet , pf.x - pf.game.getCamera().getX(), pf.y, pf.width, pf.height);
        }
        for (var i = 0; i < decorativePlatforms.length; i++) {
            var pf = decorativePlatforms[i];
            this.ctx.drawImage(pf.platformSheet , pf.x - pf.game.getCamera().getX(), pf.y, pf.width, pf.height);
        }
    }
}

Platform.prototype.swichWorlds() = function(){
    this.underworld = !this.underworld;
}

// Platform.prototype.update = function() {
//     console.log("platform update is being called"); 
//     Entity.prototype.update.call(this);
// }