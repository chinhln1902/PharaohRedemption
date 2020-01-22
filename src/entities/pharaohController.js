

function pharaohController(mainCharacter){

    //this.Pharaoh = mainCharacter;
    document.addEventListener("keydown", moveSomething, false);
    //document.addEventListener("keypress", dealWithKeyboard, false);
	//document.addEventListener("keyup", dealWithKeyboard, false);
	this.Pharaoh = mainCharacter;
	

}


function moveSomething(e) {
	switch(e.keyCode) {
		case 37:
			// left key pressed
			break;
		case 38:
			// up key pressed
			break;
		case 39:
            console.log("Right key pressed");
			this.Pharaoh.jump();
			//break;
		case 40:
			// down key pressed
			break;	
	}	
}