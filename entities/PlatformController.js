var platformSheets = [];
var platforms = [];
function loadPlatforms(AM) {
    platformSheets['wooden barrel'] = AM.getAsset("./assets/platforms/Volcano Level Set_Platformer - Wooden Barrel.png");
    platformSheets['sandTop'] = AM.getAsset("./assets/platforms/DesertPlatforms/tiles/01.png");
    platformSheets['sandMid'] = AM.getAsset("./assets/platforms/DesertPlatforms/tiles/02.png");
}

function PlatformController (game, assetManager) {
    this.AM = assetManager;
    loadPlatforms(this.AM);
    this.engine = game;
    this.ctx = game.ctx;
}

// PlatformController.prototype = new Entity();
PlatformController.prototype.constructor = PlatformController;

PlatformController.prototype.loadPlatformsLevel1 = function () {
    platforms.push(new Platform(this.engine, platformSheets['wooden barrel'],0, 7));
    platforms.push(new Platform(this.engine, platformSheets['wooden barrel'],3, 7));
    platforms.push(new Platform(this.engine, platformSheets['wooden barrel'],4, 7));
    
    platforms.push(new Platform(this.engine, platformSheets['sandTop'],7, 5));
    platforms.push(new Platform(this.engine, platformSheets['sandTop'],11, 6));
    platforms.push(new Platform(this.engine, platformSheets['sandMid'],11, 7));
    platforms.push(new Platform(this.engine, platformSheets['sandTop'],10, 7));
    platforms.push(new Platform(this.engine, platformSheets['sandTop'],12, 6));
    platforms.push(new Platform(this.engine, platformSheets['sandMid'],12, 7));
    platforms.push(new Platform(this.engine, platformSheets['sandTop'],13, 7));

    platforms.push(new Platform(this.engine, platformSheets['sandTop'],18, 6));
    platforms.push(new Platform(this.engine, platformSheets['sandMid'],18, 7));
    platforms.push(new Platform(this.engine, platformSheets['sandTop'],17, 7));
    platforms.push(new Platform(this.engine, platformSheets['sandMid'],19, 6));
    platforms.push(new Platform(this.engine, platformSheets['sandMid'],19, 7));
    platforms.push(new Platform(this.engine, platformSheets['sandTop'],19, 5));

    // var woodenBarrel1 = new Platform(this.engine, platformSheets['wooden barrel']);
    // woodenBarrel1.x = 200;
    // woodenBarrel1.y = 540;
    // woodenBarrel.width = 116;
    // woodenBarrel.height = 122;
    // platforms.push(woodenBarrel1);
    // this.engine.addEntity(woodenBarrel1);
}