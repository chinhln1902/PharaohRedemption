var platformSheets = [];
var platforms = [];
function loadPlatforms(AM) {
    platformSheets['wooden barrel'] = AM.getAsset("./assets/platforms/Volcano Level Set_Platformer - Wooden Barrel.png");
}

function platformController (game, assetManager) {
    this.AM = assetManager;
    loadPlatforms(this.AM);
    this.engine = game;
    this.ctx = game.ctx;
}

platformController.prototype = new Entity();
platformController.prototype.constructor = platformController;

platformController.prototype.loadPlatformsLevel1 = function () {
    platforms.push(new Platform(this.engine, platformSheets['wooden barrel'],300, 540)); //wooden barrel
    
    

    // var woodenBarrel1 = new Platform(this.engine, platformSheets['wooden barrel']);
    // woodenBarrel1.x = 200;
    // woodenBarrel1.y = 540;
    // woodenBarrel.width = 116;
    // woodenBarrel.height = 122;
    // platforms.push(woodenBarrel1);
    // this.engine.addEntity(woodenBarrel1);
}