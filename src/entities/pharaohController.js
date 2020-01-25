
function pharaohController(mainCharacter){
	var that = this;
	var RightKeyPressed = "false";
	var LeftKeyPressed = "false";
	var UpArrowPressed = "false";

	this.Pharaoh = mainCharacter;

	// Listens for key press events
	document.addEventListener("keydown", function (e) {
		console.log(e);

			//Running right 
			if (e.code === "ArrowRight" && RightKeyPressed === "false"){
				console.log("Right key pressed");
				that.Pharaoh.runRight();
				RightKeyPressed = "true";

			//Running left
			} else if(e.code === "ArrowLeft" && LeftKeyPressed === "false"){
				console.log("Left key pressed");
				that.Pharaoh.runLeft();
				LeftKeyPressed = "true";

			//Jumping
			//Add more lines for jumping left/up and jumping right/up
			} else if(e.code === "ArrowUp" && UpArrowPressed === "false"){
				e.preventDefault();

				if(that.Pharaoh.getDirection() === "right") {
					that.Pharaoh.jump();
				} else if(that.Pharaoh.getDirection() === "left") {
					that.Pharaoh.jumpLeft();
					console.log("Jumping left");
				} 

				console.log("Up key pressed");
				UpArrowPressed = "true";
			
			//World switching
			} else if(e.code === "Space"){
				console.log("Space bar pressed");
				//Switch worlds

			//Slashing
			} else if(e.code === "KeyE"){
				console.log("Key E pressed");
				that.Pharaoh.slash();
				
			//Throwing
			} else if(e.code === "KeyF"){
				console.log("Key F pressed");
				//that.Pharaoh.throw();
				//Something is wrong with throwing animation. 
			}

	}, false);
	
	// Listends for key up events
	document.addEventListener("keyup", function (e) {
		console.log(e);

			if (e.code === "ArrowRight" && RightKeyPressed === "true"){
				console.log("Right key up");

				that.Pharaoh.idle();
				RightKeyPressed = "false";

			}	else if(e.code === "ArrowLeft" && LeftKeyPressed === "true"){
				console.log("Left key up");
				that.Pharaoh.idleLeft();
				LeftKeyPressed = "false";

			}   else if(e.code === "ArrowUp" && UpArrowPressed === "true"){
				console.log("Up key released");

		//Still working on this part after jumping
				// if (that.Pharaoh.getDirection() === "right") { //Character is facing right

				// 	if (that.Pharaoh.getState() === "running"){ //running right
				// 		that.Pharaoh.runRight();
				// 	} else {
				// 		that.Pharaoh.idle(); //idle right
				// 	}
				// } else if (that.Pharaoh.getDirection() === "left") {//Character is facing left
				// 	if (that.Pharaoh.getState() === "running"){ //running left
				// 		that.Pharaoh.runLeft();
				// 	} else {
				// 		that.Pharaoh.idleLeft(); //idle left
				// 	}
				// }
				
				UpArrowPressed = "false";

			} 

	}, false);

}

		// 	//Instructions:
		// 	// make it so that you can use arrow keys and asdw. 
		// 	// e = slash, q = throw, f = special attack.
		// 	// space = switch worlds
		// }

