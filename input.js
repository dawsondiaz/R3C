$(document).ready(function() {
	
});

$('select').change(function() {
	switch ($(this).val()) {
		case "SILVER":	$(this).css('background-color', 'gray');
						$(this).css('color', 'white');
			break;
		case "GOLD":	$(this).css('background-color', 'yellow');
						$(this).css('color', 'white');
			break;
		case "BLACK":	$(this).css('background-color', 'black');
						$(this).css('color', 'white');
			break;
		case "BROWN":	$(this).css('background-color', 'brown');
						$(this).css('color', 'white');
			break;
		case "RED":		$(this).css('background-color', 'red');
						$(this).css('color', 'black');
			break;
		case "ORANGE":	$(this).css('background-color', 'orange');
						$(this).css('color', 'black');
			break;
		case "YELLOW":	$(this).css('background-color', 'yellow');
						$(this).css('color', 'black');
			break;
		case "GREEN":	$(this).css('background-color', 'green');
						$(this).css('color', 'white');
			break;
		case "BLUE":	$(this).css('background-color', 'blue');
						$(this).css('color', 'white');
			break;
		case "VIOLET":	$(this).css('background-color', 'purple');
						$(this).css('color', 'white');
			break;
		case "GRAY":	$(this).css('background-color', 'gray');
						$(this).css('color', 'white');
			break;
		case "WHITE":	$(this).css('background-color', 'white');
						$(this).css('color', 'black');
			break;
	}
});
