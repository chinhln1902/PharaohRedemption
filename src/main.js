var AM = new AssetManager();

loadAssets();
var LC = new levelcontroller();

AM.downloadAll(function () {
    LC.level1();
    console.log("All Done!"); 
});
