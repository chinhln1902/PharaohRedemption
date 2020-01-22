

function pharaohController(mainCharacter){
	var that = this;
    //this.Pharaoh = mainCharacter;
    document.addEventListener("keydown", function (e) {
		that.Pharaoh.runRight();
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
				that.Pharaoh.slash()
				//break;
			case 40:
				// down key pressed
				break;	
		}	
	}, false);
    //document.addEventListener("keypress", dealWithKeyboard, false);
	//document.addEventListener("keyup", dealWithKeyboard, false);
	this.Pharaoh = mainCharacter;
	

}

