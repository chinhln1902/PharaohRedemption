function AssetManager() {
    this.successCount = 0;
    this.errorCount = 0;
    this.cache = [];
    this.downloadQueue = [];
}

AssetManager.prototype.queueDownload = function (path) {
    console.log("Queueing " + path);
    this.downloadQueue.push(path);
}

AssetManager.prototype.isDone = function () {
    return this.downloadQueue.length === this.successCount + this.errorCount;
}

AssetManager.prototype.downloadAll = function (callback) {
    for (var i = 0; i < this.downloadQueue.length; i++) {
        var img = new Image();
        var that = this;

        var path = this.downloadQueue[i];
        console.log(path);

        img.addEventListener("load", function () {
            console.log("Loaded " + this.src);
            that.successCount++;
            if(that.isDone()) callback();
        });

        img.addEventListener("error", function () {
            console.log("Error loading " + this.src);
            that.errorCount++;
            if (that.isDone()) callback();
        });

        img.src = path;
        this.cache[path] = img;
    }
}

AssetManager.prototype.getAsset = function (path) {
    return this.cache[path];
}

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload('C:/Users/gjand/OneDrive/Documents/CompWorlds/assets/sprites/Anu.png');

ASSET_MANAGER.downloadAll(function() {
    var sprite = ASSET_MANAGER.getAsset('C:/Users/gjand/OneDrive/Documents/CompWorlds/assets/sprites/Anu.png');
    var c = document.getElementById('gameWorld'); 
    var ctx = c.getContext('2d'); 
    ctx.drawImage(sprite, 0, 116.125, 90, 114, 700, 500, 100, 100);
});