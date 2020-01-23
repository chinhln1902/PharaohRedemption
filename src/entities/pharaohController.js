

function pharaohController(mainCharacter){
	var that = this;
	var RightKeyPressed = "false";
	this.Pharaoh = mainCharacter;

	document.addEventListener("keydown", function (e) {
		console.log(e);

			if (e.code === "ArrowRight" && RightKeyPressed === "false"){
				console.log("Right key pressed");
				that.Pharaoh.runRight();
				RightKeyPressed = "true";
			}		
	}, false);
	
	document.addEventListener("keyup", function (e) {
		console.log(e);

			if (e.code === "ArrowRight" && RightKeyPressed === "true"){
				console.log("Right key pressed");
				that.Pharaoh.idle();
				RightKeyPressed = "false";
			}	
	}, false);

}

		// 	//Instructions:
		// 	// make it so that you can use arrow keys and asdw. 
		// 	// e = slash, q = throw, f = special attack.
		// 	// space = switch worlds
		// 	// also refer to Marriot's files for more info on event listeners.
		// }

