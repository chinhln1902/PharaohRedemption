var platformSheets = [];
var platforms = [];
var underworldPlatforms = [];   
var decorativePlatforms = [];
function loadPlatforms(AM) {
    platformSheets['wooden barrel'] = AM.getAsset("./assets/platforms/Volcano Level Set_Platformer - Wooden Barrel.png");
    platformSheets['sandTop'] = AM.getAsset("./assets/platforms/DesertPlatforms/tiles/01.png");
    platformSheets['sandMid'] = AM.getAsset("./assets/platforms/DesertPlatforms/tiles/02.png");
    platformSheets['gap1'] = AM.getAsset("./assets/platforms/PNG/Platformer/Gap1.png");
    platformSheets['side left 2'] = AM.getAsset("./assets/platforms/PNG/Platformer/Side Left 2.png");
    platformSheets['side left'] = AM.getAsset("./assets/platforms/PNG/Platformer/Side Left.png");
    platformSheets['side right'] = AM.getAsset("./assets/platforms/PNG/Platformer/Side Right.png");
    platformSheets['side right 2'] = AM.getAsset("./assets/platforms/PNG/Platformer/Side Right 2.png");
    platformSheets['square ground'] = AM.getAsset("./assets/platforms/PNG/Platformer/Square Ground.png");
    platformSheets['arrow 1'] = AM.getAsset("./assets/platforms/PNG/Environment/Arrow1.png");
    platformSheets['arrow 2'] = AM.getAsset("./assets/platforms/PNG/Environment/Arrow2.png");
    platformSheets['arrow 3'] = AM.getAsset("./assets/platforms/PNG/Environment/Arrow3.png");
    platformSheets['caution'] = AM.getAsset("./assets/platforms/PNG/Environment/Caution.png");
    platformSheets['skull'] = AM.getAsset("./assets/platforms/PNG/Environment/Skull.png");
    
    platformSheets['stoneMid'] = AM.getAsset("./assets/platforms/volcanoTiles/tiles/02.png");
    platformSheets['stoneTop'] = AM.getAsset("./assets/platforms/volcanoTiles/tiles/01.png");
    platformSheets['spikes'] = AM.getAsset("./assets/platforms/PNG/Platformer/Spikes.png");
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
        // removePlatforms();
        //page 1
        decorativePlatforms.push(new Platform(this.engine, platformSheets['arrow 1'], -2, 7));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 8, 7, true));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 9, 7, true));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 10, 7, true));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 15, 7, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 15, 6, true));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 19, 7, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 19, 6, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 19, 5, true));
        decorativePlatforms.push(new Platform(this.engine, platformSheets['caution'], 21, 7, true));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 23, 7, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 23, 6, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 23, 5, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 23, 4, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 23, 3, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],8, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],9, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],10, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],15, 7, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],15, 6, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],19, 7, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],19, 6, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],19, 5, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],23, 4, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],23, 3, true));
        //decorativePlatforms.push(new Platform(this.engine, platformSheets['caution'], 29, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],30, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],31, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],32, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],33, 6, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],33, 7, true));
        
        //page 2
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 39, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 40, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 41, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 42, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 43, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 44, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 45, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 46, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 47, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 48, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 49, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 50, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 51, 8, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 52, 8, true));

        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],39, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],40, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],41, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],42, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],43, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],44, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],45, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],46, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],47, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],48, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],49, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],50, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],51, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],52, 7, true));





    // } else {
    //     // removePlatforms();
    //     platforms.splice(0, platforms.length);
    // }
}