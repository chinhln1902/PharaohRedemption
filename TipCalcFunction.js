$(document).ready(function() {
	$('#butt').on('click', function() {
		var amount = $('#sub').val(); 
		var service = $('#service').children("option:selected").val(); 
		$(this).hide(); 
		var tip = 0;
		if (service == "Excellent") {
        	tip = .2;
    	} else if (service == "Great") {
        	tip = .15;
    	} else if (service == "Good") {
        	tip = .1;
    	} else if (service == "Fair") {
        	tip = .05;
    	}
    	var add = amount * tip;
    	var num = Number(amount);
    	var total = num + add;  
    	$('#total').append("<p>Your Subtotal including the tip is:</p>"); 
    	$('#total').append("<p>$"+total+"</p>"); 
    	$('#total').append("<p>Thank you for your business, please do come again!</p>"); 
	}); 
}); 

