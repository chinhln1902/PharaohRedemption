

function pharaohController(mainCharacter){
	var that = this;
    //this.Pharaoh = mainCharacter;
    document.addEventListener("keydown", function (e) {
		t
		switch(e.keyCode) {
			
			case 37:
				// left key pressed
				break;
			case 38:
				// up key pressed
				that.Pharaoh.jump();

				break;
			case 39:
				console.log("Right key pressed");
				that.Pharaoh.slash();
				//break;
			case 40:
				// down key pressed
				break;	

			//Instructions:
			// make it so that you can use arrow keys and asdw. 
			// e = slash, q = throw, f = special attack.
			// space = switch worlds
			// also refer to Marriot's files for more info on event listeners.
		}	
	}, false);
	this.Pharaoh = mainCharacter;
	
	// example for how to make it not infinately press a key
	// if (e.keycode === 38 && alreadypushed === true){

	// }
}

