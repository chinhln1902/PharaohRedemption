var platformSheets = [];

function loadPlatforms(AM) {
    platformSheets['wooden barrel'] = AM.getAsset("./../assets/platforms/Volcano Level Set_Platformer - Wooden Barrel.png");
}

function platformController (game, assetManager) {
    this.AM = assetManager;
    loadPlatforms(AM);
    this.game = game;
    this.ctx = game.ctx;
}

platformController.prototype = new Entity();
platformController.prototype.constructor = platformController;

platformController.prototype.loadPlatformsLevel1 = function (game) {
    var woodenBarrel = new Platform(game, platformSheets['wooden barrel']);
    woodenBarrel.x = 250;
    woodenBarrel.y = 250;
    this.game.addEntity(woodenBarrel);
}