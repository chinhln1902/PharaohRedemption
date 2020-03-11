var RightKeyPressed = "false";
var LeftKeyPressed = "false";
var UpArrowPressed = "false";
var AKeyPressed = "false";
var WKeyPressed = "false";
var DKeyPressed = "false";
function pharaohController(mainCharacter){
	var that = this;
	var inAir = 0;
	var music = document.getElementById('player');
	var playingMusic = false;
	var isSwitchable = true;
	this.Pharaoh = mainCharacter;

	// Listens for key press events
	document.addEventListener("keydown", function (e) {
		if(e.code === "Space" && isSwitchable){
			that.Pharaoh.swapWorld();
			isSwitchable = false;
		}
		if (e.code == "KeyM") {
			if (!playingMusic) music.play();
			if (playingMusic) music.pause();
			playingMusic = !playingMusic;
		}

		//Running right 
		if ((e.code === "ArrowRight" && RightKeyPressed === "false" && LeftKeyPressed === "false") || (e.code === "KeyD" && DKeyPressed === "false" && AKeyPressed === "false")){
			//console.log(e.code);
			that.Pharaoh.runRight();
			RightKeyPressed = "true";
			DKeyPressed = "true";

		//Running left
		} else if((e.code === "ArrowLeft" && LeftKeyPressed === "false" && RightKeyPressed === "false") || (e.code === "KeyA" && DKeyPressed === "false" && AKeyPressed === "false")){
				
			that.Pharaoh.runLeft();
			LeftKeyPressed = "true";
			AKeyPressed = "true";

			//Jumping
		} if((e.code === "ArrowUp" || e.code === "KeyW") && that.Pharaoh.getState() !== "jumping" && (that.Pharaoh.getY() === that.Pharaoh.getGroundLevel())){
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
				WKeyPressed = "true";

			//World switching
			} 
			//Slashing
			 else if(e.code === "KeyE"){
				that.Pharaoh.slash();
				crates.forEach(crate =>{
					//console.log(Math.abs(crate.x - that.Pharaoh.x));
					if (Math.abs(crate.x - that.Pharaoh.x)<100 && Math.abs(crate.y - that.Pharaoh.y)<100){
						crate.break();
					}
					
				});
				
			//Bonus attack
			} else if(e.code === "KeyF"){
				that.Pharaoh.staff();
			//Projectile 
			} else if(e.code === "KeyQ"){
				that.Pharaoh.throw();
			}

	}, false);
	
	//Listends for key up events
	document.addEventListener("keyup", function (e) {
		// console.log(e);

			if ((e.code === "ArrowRight" && RightKeyPressed === "true") || (e.code === "KeyD" && DKeyPressed === "true")){

				//console.log("D key up");
				that.Pharaoh.idle();
				RightKeyPressed = "false";
				DKeyPressed = "false"

			}	else if((e.code === "ArrowLeft" && LeftKeyPressed === "true") || (e.code === "KeyA" && AKeyPressed === "true")){
				//console.log("Left key up");
				that.Pharaoh.idle();
				LeftKeyPressed = "false";
				AKeyPressed = "false";


			}   else if((e.code === "ArrowUp" && UpArrowPressed === "true") || (e.code === "KeyW" && WKeyPressed === "true")){
				
				UpArrowPressed = "false";
				WKeyPressed = "false";

			} else if(e.code === "Space"){
				isSwitchable = false;

			}

	}, false);
			
}