var AM = new AssetManager();

loadAssets();
var LC = new levelcontroller();

var loaded = false;
AM.downloadAll(function () {
    loaded = true;
    //console.log("All Done!"); 
});

var levels = [ //make sure to properly name the levels in level controller
    0,
    LC.level1,
    LC.level2,
    LC.level3,
    LC.level4
];
loadLevel = function(level){
    console.log("loading level: " + level);
    if (loaded) {
        levels[level]();
    } else {
        loadLevel(level);
    }
}

