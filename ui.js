$(document).ready(function() {
	$('select').change(function() {
		switch ($(this).val()) {
			case "SILVER":	$(this).css('background-color', 'gray');
							$(this).css('color', 'white');
				break;
			case "GOLD":	$(this).css('background-color', 'gold');
							$(this).css('color', 'black');
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
			case "NONE":    $(this).css('background-color', 'white');
							$(this).css('color', 'black');
				break;
		}

		switch (document.getElementById('numBands').value) {
			case "4":
				if ($('#fiveband3').css("display") != "none") {
					$('#fiveband3').next().animate({width: 'hide'});
				}
				if ($('#band6').css("display") != "none") {
					$('#band6').next().animate({width: 'hide'});
				}
				
				$('#result').text("Resistance: " + getResistanceStr(
					new Array(
						document.getElementById('band1').value,
						document.getElementById('band2').value,
						document.getElementById('band3').value,
						document.getElementById('band4').value
					), 4
				));
				break;
			case "5":
				if ($('#fiveband3').css("display") == "none") {
					$('#fiveband3').next().animate({width: 'show'});
				}
				if ($('#band6').css("display") != "none") {
					$('#band6').next().animate({width: 'hide'});
				}
				
				$('#result').text("Resistance: " + getResistanceStr(
					new Array(
						document.getElementById('band1').value,
						document.getElementById('band2').value,
						document.getElementById('fiveband3').value,
						document.getElementById('band3').value,
						document.getElementById('band4').value
					), 5
				));
				break;
			case "6":
				if ($('#fiveband3').css("display") == "none") {
					$('#fiveband3').next().animate({width: 'show'});
				}
				if ($('#band6').css("display") == "none") {
					$('#band6').next().animate({width: 'show'});
				}
				
				$('#result').text("Resistance: " + getResistanceStr(
					new Array(
						document.getElementById('band1').value,
						document.getElementById('band2').value,
						document.getElementById('fiveband3').value,
						document.getElementById('band3').value,
						document.getElementById('band4').value,
						document.getElementById('band6').value
					), 6
				));
				break;
			default: alert("WTF");
				break;
		}
	});
});
