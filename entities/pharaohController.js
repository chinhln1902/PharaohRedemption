
function pharaohController(mainCharacter){
	var that = this;
	var RightKeyPressed = "false";
	var LeftKeyPressed = "false";
	var UpArrowPressed = "false";
	var inAir = 0;

	this.Pharaoh = mainCharacter;

	// Listens for key press events
	document.addEventListener("keydown", function (e) {

			//Running right 
		if (e.code === "ArrowRight" && RightKeyPressed === "false" && LeftKeyPressed === "false"){
			that.Pharaoh.runRight();
			RightKeyPressed = "true";

			//Running left
		} else if(e.code === "ArrowLeft" && LeftKeyPressed === "false" && RightKeyPressed === "false"){
				
			that.Pharaoh.runLeft();
			LeftKeyPressed = "true";

			//Jumping
		} if (e.code === "ArrowUp" && that.Pharaoh.getState() !== "jumping" && (that.Pharaoh.getY() === that.Pharaoh.getGroundLevel())){
			e.preventDefault();
				that.Pharaoh.jump();
				
				if (RightKeyPressed === "true" || LeftKeyPressed === "true"){
					that.Pharaoh.setPreviousState("running");
				} else {
					that.Pharaoh.setPreviousState("idle");
				}
				
				UpArrowPressed = "true";
			
			//World switching
		} if (e.code === "ArrowUp" || e.code === "ArrowRight"  && (RightKeyPressed === "true" || LeftKeyPressed === "true") && that.Pharaoh.getState() === "jumping") {
			//debugger;
			if (that.Pharaoh.getDirection() === "right") {
				that.Pharaoh.runRight();

			} else if (that.Pharaoh.getDirection() === "left"){

				that.Pharaoh.runLeft();
			}
			
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

