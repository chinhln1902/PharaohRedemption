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
    this.underworld = false;
    var that = this;
    document.addEventListener("keydown", function (e) {
        console.log(e);
		//Running right 
		if (e.code === "Space"){
            console.log("underworld: " + that.underworld);
            e.preventDefault();
            that.swapWorld();
        }
    });
}

// PlatformController.prototype = new Entity();
PlatformController.prototype.constructor = PlatformController;

PlatformController.prototype.loadPlatformsLevel1 = function () {
    if (!this.underworld) {
        platforms.splice(0, platforms.length);
        platforms.push(new Platform(this.engine, platformSheets['wooden barrel'],0, 7));
        platforms.push(new Platform(this.engine, platformSheets['wooden barrel'],3, 7));
        platforms.push(new Platform(this.engine, platformSheets['wooden barrel'],4, 7));
        
        platforms.push(new Platform(this.engine, platformSheets['sandTop'],7, 5.2));
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
    }
}

PlatformController.prototype.swapWorld = function () {
    this.underworld = !this.underworld;
}