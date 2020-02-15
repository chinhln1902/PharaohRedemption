var AM = new AssetManager();


// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
    var that = this;
    this.underworld = false;

    document.addEventListener("keydown", function (e) {

		//Running right 
		if (e.code === "Space"){
            console.log("underworld: " + that.underworld);
            e.preventDefault();
            if (that.underworld){
                
                that.switch(AM.getAsset("./assets/backgrounds/egypt.png"));
            } else {
                that.switch(AM.getAsset("./assets/backgrounds/underworld.png"));
            }
            
        }
    });
}

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y,1200,780);
}

Background.prototype.update = function () {
}

Background.prototype.switch = function(background){
    this.spritesheet = background;
    this.underworld = !this.underworld;
}


loadAssets();
var LC = new levelcontroller();

AM.downloadAll(function () {
    LC.level1();
    console.log("All Done!"); 
});




