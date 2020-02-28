var AM = new AssetManager();

loadAssets();
var LC = new levelcontroller();

var loaded = false;

AM.downloadAll(function () {
    loaded = true;
    //console.log("All Done!"); 
});


playLevel1 = function(){
    if (loaded) {
        LC.level1();
    } else {
        playLevel1();
    }
}

