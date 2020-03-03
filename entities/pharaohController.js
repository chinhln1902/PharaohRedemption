var RightKeyPressed = "false";
var LeftKeyPressed = "false";
var UpArrowPressed = "false";
function pharaohController(mainCharacter){
	var that = this;
	var inAir = 0;
	var music = document.getElementById('player');
	var playingMusic = false;

	this.Pharaoh = mainCharacter;

	// Listens for key press events
	document.addEventListener("keydown", function (e) {

			if (e.code == "KeyM") {
				if (!playingMusic) music.play();
				if (playingMusic) music.pause();
				playingMusic = !playingMusic;
		  	}

			//Running right 
			if (e.code === "ArrowRight" && RightKeyPressed === "false" && LeftKeyPressed === "false"){
				that.Pharaoh.runRight();
				RightKeyPressed = "true";

			//Running left
			} else if(e.code === "ArrowLeft" && LeftKeyPressed === "false" && RightKeyPressed === "false"){
				
				that.Pharaoh.runLeft();
				LeftKeyPressed = "true";

			//Jumping
		} if(e.code === "ArrowUp" && that.Pharaoh.getState() !== "jumping" && (that.Pharaoh.getY() === that.Pharaoh.getGroundLevel())){
			e.preventDefault();
				that.Pharaoh.jump();
				if (RightKeyPressed === "true"){
					that.Pharaoh.setPreviousState("running");
					//that.Pharaoh.runRight();
				} else if (LeftKeyPressed === "true"){
					that.Pharaoh.setPreviousState("running");
					//that.Pharaoh.runLeft();
				}else {
					that.Pharaoh.setPreviousState("idle");
				}
				
				UpArrowPressed = "true";
			
			//World switching
			} else if(e.code === "Space"){

				that.Pharaoh.swapWorld();

			//Slashing
			} else if(e.code === "KeyE"){
				console.log("Key E pressed");
				that.Pharaoh.slash();
				
			//Bonus attack
			} else if(e.code === "KeyF"){

			//Projectile 
			} else if(e.code === "KeyQ"){
				that.Pharaoh.throw();
			}

	}, false);
	
	//Listends for key up events
	document.addEventListener("keyup", function (e) {
		// console.log(e);

			if (e.code === "ArrowRight" && RightKeyPressed === "true" ){
				//console.log("Right key up");
				that.Pharaoh.idle();
				RightKeyPressed = "false";

			}	else if(e.code === "ArrowLeft" && LeftKeyPressed === "true"){
				//console.log("Left key up");
				that.Pharaoh.idle();
				LeftKeyPressed = "false";

			}   else if(e.code === "ArrowUp" && UpArrowPressed === "true"){
				
				UpArrowPressed = "false";

			} 

	}, false);
			
}