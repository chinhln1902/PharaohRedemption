var platformSheets = [];
var platforms = [];
var underworldPlatforms = [];   
var decorativePlatforms = [];
var UdecorativePlatforms = [];
var crates = [];
var signs = [];
var powerUps = [];
function loadPlatforms(AM) {
    platformSheets['barrel'] = AM.getAsset("./assets/platforms/Volcano Level Set_Platformer - Wooden Barrel.png");
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
    platformSheets['block'] = AM.getAsset("./assets/platforms/temple/tiles/breakable.png");
    platformSheets['pedestal'] = AM.getAsset("./assets/platforms/temple/tiles/pedestal.png");
    platformSheets['bridge-2'] = AM.getAsset("./assets/platforms/temple/tiles/bridge-2.png");
    platformSheets['bridge-3'] = AM.getAsset("./assets/platforms/temple/tiles/bridge-3.png");
    
    
    platformSheets['stoneMid'] = AM.getAsset("./assets/platforms/volcanoTiles/tiles/02.png");
    platformSheets['stoneTop'] = AM.getAsset("./assets/platforms/volcanoTiles/tiles/01.png");
    //platformSheets['spikes'] = AM.getAsset("./assets/platforms/PNG/Platformer/Spikes.png");
    platformSheets['spikes'] = AM.getAsset("./assets/platforms/temple/tiles/spikes.png");
    platformSheets['silver chest'] = AM.getAsset("./assets/platforms/PNG/Collectable/Treasure Chest.png");
    platformSheets['red flag'] = AM.getAsset("./assets/platforms/PNG/Environment/Red Flag.png");

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
        decorativePlatforms.push(new Platform(this.engine, platformSheets['skull'], -50, 7,));
        decorativePlatforms.push(new Platform(this.engine, platformSheets['arrow 1'], -6, 7,));
        signs.push(new hint(this.engine, platformSheets['question'], -5, 7, false, "wrong way!"));
        signs.push(new hint(this.engine, platformSheets['question'], 5, 7, false, "arrow keys to move"));
        signs.push(new hint(this.engine, platformSheets['question'], 7, 7, false, "up arrow to jump"));
        signs.push(new hint(this.engine, platformSheets['question'], 17, 7, false, "the highest you can jump is 2 blocks"));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 8, 7, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 9, 7, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 10, 7, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 15, 7, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 15, 6, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 19, 7, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 19, 6, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 19, 5, true, false, false));
        signs.push(new hint(this.engine, platformSheets['question'], 21, 7, false, "try pushing space"));

        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 23, 7, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 23, 6, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 23, 5, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 23, 4, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 23, 3, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 23, 2, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 22, 5, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 24, 5, true, false, false));

        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],8, 7, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],9, 7, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],10, 7, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],15, 7, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],15, 6, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],19, 7, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],19, 6, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],19, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],23, 4, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],23, 3, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],23, 2, true, true, false));
        signs.push(new hint(this.engine, platformSheets['question'], 25, 7, false, "now change back to the overworld"));
        signs.push(new hint(this.engine, platformSheets['question'], 27, 7, false, "use 'e' to attack"));
        decorativePlatforms.push(new Platform(this.engine, platformSheets['caution'], 29, 7, true));
        UdecorativePlatforms.push(new Platform(this.engine, platformSheets['caution'], 29, 7, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],30, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],31, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],32, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],33, 6, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],33, 7, true, true, false));
        
        //page 2
        //platforms.push(new Platform(this.engine, platformSheets['spikes'], 39, 7, true, false, true));
        //platforms.push(new Platform(this.engine, platformSheets['spikes'], 40, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 41, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 42, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 43, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 44, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 45, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 46, 7, true, false, true));
        signs.push(new hint(this.engine, platformSheets['question'], 46, 4, false, "that jump is way too far!"));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 47, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 48, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 49, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 50, 7, true, false, true));
        //platforms.push(new Platform(this.engine, platformSheets['spikes'], 51, 7, true, false, true));
        //platforms.push(new Platform(this.engine, platformSheets['spikes'], 52, 7, true, false, true));
        signs.push(new hint(this.engine, platformSheets['question'], 55, 7, false, "use 'q' to throw"));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 40, 6, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 41, 6, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 44, 5, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 45, 5, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 46, 5, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 59, 7, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 59, 6, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 59, 5, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 59, 4, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandMid'], 59, 3, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['sandTop'], 59, 2, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 66, 7, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 66, 6, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 67, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 68, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 69, 7, false, false, true));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 69, 6, false, false, true));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 69, 5, false, false, true));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 69, 4, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 70, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 71, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 72, 7, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 72, 6, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 72, 5, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 72, 4, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 72, 3, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 72, 2, true, false, false));

        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],41, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],42, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],43, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],44, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],45, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],46, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],47, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],48, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],49, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],50, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],51, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],40, 6, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],41, 6, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],44, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],45, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],46, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],47, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],48, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],49, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],50, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],51, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],59, 7, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],59, 6, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'],59, 3, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],59, 2, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],66, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],67, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],68, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],69, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'],70, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],72, 7, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 75, 7, false, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 76, 7, false, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 77, 7, false, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 78, 7, false, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 79, 7, false, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 80, 7, false, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 81, 7, false, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 82, 7, false, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 83, 7, false, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 75, 6, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 76, 6, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 77, 6, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 78, 6, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 79, 6, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 80, 6, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 81, 6, true, true, false));
        
        // //page 3
        //these following spikes kill the pharaoh in the underworld even though they belong to the overworld
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 75, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 76, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 77, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 78, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 79, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 80, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 81, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 82, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 83, 7, true, false, true));      
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 87, 5, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 87, 4, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 87, 3, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 87, 2, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickMid'], 90, 5, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickMid'], 91, 5, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickMid'], 92, 5, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 90, 2, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 91, 2, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 92, 2, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 93, 2, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 94, 2, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 95, 2, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 95, 7, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 95, 6, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 95, 5, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 95, 4, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickChisled'], 95, 3, false, false, false));
        platforms.push(new Platform(this.engine, platformSheets['barrel'], 93, 7, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['barrel'], 94, 7, true, false, false));
        signs.push(new hint(this.engine, platformSheets['question'], 86, 7, false, "this is a door"));
        decorativePlatforms.push(new Platform(this.engine, platformSheets['bridge-3'], 87, 7, true, false, false));
        decorativePlatforms.push(new Platform(this.engine, platformSheets['bridge-2'], 87, 6, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 96, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 97, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 98, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 99, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 100, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 101, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 102, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 103, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 104, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 105, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 106, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 107, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['spikes'], 108, 7, true, false, true));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 98, 4, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 99, 4, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 100, 4, true, false, false));
        platforms.push(new Platform(this.engine, platformSheets['brickTop'], 101, 4, true, false, false));
        signs.push(new hint(this.engine, platformSheets['question'], 98, 3, false, "take a leap of faith"));
        decorativePlatforms.push(new Platform(this.engine, platformSheets['arrow 1'], 101, 3,));

        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 88, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 89, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 90, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 91, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 92, 5, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 90, 2, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 91, 2, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 92, 2, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 93, 2, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 94, 2, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 95, 2, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 95, 7, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 95, 6, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 95, 5, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 95, 4, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 95, 3, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['pedestal'], 94, 7, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['pedestal'], 87, 4, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneMid'], 87, 5, false, true, false));
        UdecorativePlatforms.push(new Platform(this.engine, platformSheets['bridge-2'], 87, 6, true, true, false));
        UdecorativePlatforms.push(new Platform(this.engine, platformSheets['bridge-3'], 87, 7, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['block'], 91, 7, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['block'], 91, 6, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['block'], 91, 4, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['block'], 91, 3, false, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 96, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 97, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 98, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 99, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 100, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 101, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 102, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 103, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 104, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 105, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 106, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 107, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['spikes'], 108, 7, true, true, true));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 102, 4, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 103, 4, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 104, 4, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 105, 4, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 106, 4, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 107, 4, true, true, false));
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'], 108, 4, true, true, false));
   
        underworldPlatforms.push(new Platform(this.engine, platformSheets['stoneTop'],33, 7, true, true, false));

        decorativePlatforms.push(new Platform(this.engine, platformSheets['silver chest'], 107.1, 3.1, true, true, false));
        decorativePlatforms.push(new Platform(this.engine, platformSheets['barrel'], 108, 3.1, true, true, false));
        decorativePlatforms.push(new Platform(this.engine, platformSheets['red flag'], 108.3, 2.2, true, true, false));

}

var testLevel =
[
    "                                              ",
    "                                              ",
    "                                              ",
    "                                              ",
    "                             #                ",
    "                         #   #                ",
    "               #     #   #                    ",
    "             #####   #                        "
]

PlatformController.prototype.loadPlatformsLevel2 = function () {
    signs.push(new hint(this.engine, platformSheets['question'], -3, 7, false, "Level 2"));
    signs.push(new hint(this.engine, platformSheets['question'], 6, 7, false, "This is a crate. Hit it with your sword to break it"));
    signs.push(new hint(this.engine, platformSheets['question'], 11, 7, false, "To break this crate, hit it while in the air"));
    signs.push(new hint(this.engine, platformSheets['question'], 20, 3, false, "Danger signs indicate death in the other dimension, switching worlds is risky"));
    signs.push(new hint(this.engine, platformSheets['question'], 36, 7, false, "How did you get in here?"));
    signs.push(new hint(this.engine, platformSheets['question'], 62, 7, false, "Think this through really carefully before breaking any crates"));
    signs.push(new hint(this.engine, platformSheets['question'], 65, 7, false, "Remember, just because you can, doesnt mean you should."));
    signs.push(new hint(this.engine, platformSheets['question'], 85, 7, false, "Collect hearts to replenish your health"));
    decorativePlatforms.push(new Platform(this.engine, platformSheets['arrow 2'], 77, 3,));
    powerUps.push(new PowerUp(this.engine, "heart", 90, 7, false));
    powerUps.push(new PowerUp(this.engine, "heart", 94, 7, true));
    // powerUps.push(new PowerUp(this.engine, "hypno", 21, 4, false));
    decorativePlatforms.push(new Platform(this.engine, platformSheets['silver chest'], 107.1, 3.1, true, true, false));
    decorativePlatforms.push(new Platform(this.engine, platformSheets['barrel'], 108, 3.1, true, true, false));
    decorativePlatforms.push(new Platform(this.engine, platformSheets['red flag'], 108.3, 2.2, true, true, false));
    this.loadLevelFrom(Level2Txt);
}

PlatformController.prototype.loadPlatformsLevel3 = function () {
    signs.push(new hint(this.engine, platformSheets['question'], -3, 7, false, "Level 3"));
    signs.push(new hint(this.engine, platformSheets['question'], 5, 7, false, "That powerUp gives you the ability to freeze your enemies"));
    signs.push(new hint(this.engine, platformSheets['question'], 6, 7, false, "however, you can only use it once, press f to use"));
    signs.push(new hint(this.engine, platformSheets['question'], 13, 7, false, "Sometimes you can find powerups in crates!"));
    signs.push(new hint(this.engine, platformSheets['question'], 28, 7, false, "How do you get up there? Switch worlds while jumping"));
    signs.push(new hint(this.engine, platformSheets['question'], 50, 4, false, "this requires a perfectly timed jump"));
    signs.push(new hint(this.engine, platformSheets['question'], 59, 4, false, "sometimes u can find loot in crates"));
    powerUps.push(new PowerUp(this.engine, "heart", 73, 1, false));
    powerUps.push(new PowerUp(this.engine, "heart", 64, 1, false));
    powerUps.push(new PowerUp(this.engine, "heart", 37, 7, false));
    powerUps.push(new PowerUp(this.engine, "heart", 60, 4, true));
    powerUps.push(new PowerUp(this.engine, "heart", 61, 4, true));
    powerUps.push(new PowerUp(this.engine, "heart", 95, 4, false));
    powerUps.push(new PowerUp(this.engine, "heart", 77, 4, false));
    powerUps.push(new PowerUp(this.engine, "heart", 69, 7, false));
    powerUps.push(new PowerUp(this.engine, "heart", 45, 1, false));
    powerUps.push(new PowerUp(this.engine, "heart", 62, 7, true));
    powerUps.push(new PowerUp(this.engine, "heart", 90, 7, false));
    powerUps.push(new PowerUp(this.engine, "hypno", 4, 1, false));
    powerUps.push(new PowerUp(this.engine, "hypno", 14, 7, false));
    powerUps.push(new PowerUp(this.engine, "hypno", 47, 4, false));
    powerUps.push(new PowerUp(this.engine, "hypno", 68, 7, true));
    powerUps.push(new PowerUp(this.engine, "hypno", 98, 7, false));
    decorativePlatforms.push(new Platform(this.engine, platformSheets['silver chest'], 107.1, 3.1, true, true, false));
    decorativePlatforms.push(new Platform(this.engine, platformSheets['barrel'], 108, 3.1, true, true, false));
    decorativePlatforms.push(new Platform(this.engine, platformSheets['red flag'], 108.3, 2.2, true, true, false));
    this.loadLevelFrom(Level3Txt);
}

PlatformController.prototype.loadPlatformsLevel4 = function () {
    //Why doesn't this show up?
     //decorativePlatforms.push(new Platform(this.engine, AM.getAsset("./assets/sprites/pplatforms/Skull.png"), 100, 3.1, true, true, true));
     powerUps.push(new PowerUp(this.engine, "hypno", 8, 3, false));
     powerUps.push(new PowerUp(this.engine, "heart", 10, 7, false));
     powerUps.push(new PowerUp(this.engine, "heart", 11, 7, false));
     powerUps.push(new PowerUp(this.engine, "heart", 12, 7, false));
 
     this.loadLevelFrom(Level4Txt);
 }
PlatformController.prototype.loadLevelFrom = function(textFile) {
    for(var y = 0; y < textFile.length; y++){
        for(var x = 0; x < textFile[y].length; x++){
            var plat;
            var underworld = false;
            if (y>9) underworld = true;
            if       (textFile[y][x] === ' '){
                // dont add a platform
            } else if(textFile[y][x] === 's'){
                plat = new Platform(this.engine, platformSheets['sandMid'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'S'){
                plat = new Platform(this.engine, platformSheets['sandTop'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'b'){
                plat = new Platform(this.engine, platformSheets['brickMid'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'B'){
                plat = new Platform(this.engine, platformSheets['brickTop'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'C'){
                plat = new Platform(this.engine, platformSheets['brickChisled'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'r'){
                plat = new Platform(this.engine, platformSheets['stoneMid'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'R'){
                plat = new Platform(this.engine, platformSheets['stoneTop'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'H'){
                plat = new Platform(this.engine, platformSheets['block'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'P'){
                plat = new Platform(this.engine, platformSheets['pedestal'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === '_'){
                plat = new Platform(this.engine, platformSheets['spikes'], x,y%9, true, underworld, true);
            } else if(textFile[y][x] === 'd'){
                new Platform(this.engine, platformSheets['bridge-3'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'D'){
                new Platform(this.engine, platformSheets['bridge-2'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === '!'){
                new Platform(this.engine, platformSheets['caution'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'f'){
                new Platform(this.engine, platformSheets['red flag'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'A'){
                new Platform(this.engine, platformSheets['arrow 1'], x,y%9, true, underworld, false);
            } else if(textFile[y][x] === 'E'){
                crates.push(new Box(this.engine, x,y%9, underworld));
            }
            
            if (plat && !underworld) {
                platforms.push(plat);
            } else if (plat && underworld){
                underworldPlatforms.push(plat);
            }
        }
    }
}

