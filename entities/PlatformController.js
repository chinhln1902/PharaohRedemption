var platformSheets = [];
var platforms = [];
function loadPlatforms(AM) {
    platformSheets['wooden barrel'] = AM.getAsset("./assets/platforms/Volcano Level Set_Platformer - Wooden Barrel.png");
    platformSheets['sandTop'] =       AM.getAsset("./assets/platforms/DesertPlatforms/tiles/01.png");
    platformSheets['sandMid'] =       AM.getAsset("./assets/platforms/DesertPlatforms/tiles/02.png");
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
    platforms.push(new Platform(this.engine, platformSheets['wooden barrel'],3, 5));
    platforms.push(new Platform(this.engine, platformSheets['sandTop'],7, 4));
    platforms.push(new Platform(this.engine, platformSheets['sandMid'],7, 5));
    platforms.push(new Platform(this.engine, platformSheets['sandTop'],6, 5));
    

    // var woodenBarrel1 = new Platform(this.engine, platformSheets['wooden barrel']);
    // woodenBarrel1.x = 200;
    // woodenBarrel1.y = 540;
    // woodenBarrel.width = 116;
    // woodenBarrel.height = 122;
    // platforms.push(woodenBarrel1);
    // this.engine.addEntity(woodenBarrel1);
}