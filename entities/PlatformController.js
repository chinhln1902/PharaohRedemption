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
    platformSheets['question'] = AM.getAsset("./assets/platforms/PNG/Environment/Question.png");
    platformSheets['skull'] = AM.getAsset("./assets/platforms/PNG/Environment/Skull.png");
    platformSheets['brickTop'] = AM.getAsset("./assets/platforms/temple/tiles/01.png");
    platformSheets['brickMid'] = AM.getAsset("./assets/platforms/temple/tiles/02.png");
    platformSheets['brickChisled'] = AM.getAsset("./assets/platforms/temple/tiles/03.png");
    
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
        decorativePlatforms.push(new Platform(this.engine, platformSheets['question'], 0, 7, true));
        //platforms.push(new Platform(this.engine, platformSheets['side left 2'], 6, 7, true));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 8, 7, true));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 9, 7, true));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 10, 7, true));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 15, 7, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 15, 6, true));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 19, 7, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 19, 6, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 19, 5, true));
        decorativePlatforms.push(new Platform(this.engine, platformSheets['question'], 21, 7, true));
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
        platforms.push(new Platform(this.engine, platformSheets['gap1'], 38.5, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 39, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 40, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 41, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 42, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 43, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 44, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 45, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 46, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 47, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 48, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 49, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 50, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 51, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['square ground'], 52, 7.9, true));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 40, 6, true));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 41, 6, true));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 45, 5, true));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 46, 5, true));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 59, 7, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 59, 6, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 59, 5, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 59, 4, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 59, 3, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 59, 2, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 66, 7, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 66, 6, true));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 69, 7, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 69, 6, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 69, 5, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 69, 4, true));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 72, 7, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 72, 6, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 72, 5, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 72, 4, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 72, 3, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 72, 2, true));

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
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],40, 6, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],41, 6, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],45, 5, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],46, 5, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],47, 5, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],48, 5, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],59, 7, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],59, 6, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],59, 3, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],59, 2, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],66, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],67, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],68, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],69, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],70, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],71, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],72, 7, true));



    // } else {
    //     // removePlatforms();
    //     platforms.splice(0, platforms.length);
    // }
}