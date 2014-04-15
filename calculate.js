var colors = new Array();
colors["SILVER"]	= -2;
colors["GOLD"]		= -1;
//Silver and Gold (above) are only for multipliers
colors["BLACK"]		= 0;
colors["BROWN"]		= 1;
colors["RED"]		= 2;
colors["ORANGE"]	= 3;
colors["YELLOW"]	= 4;
colors["GREEN"]		= 5;
colors["BLUE"]		= 6;
colors["VIOLET"]	= 7;
colors["GRAY"]		= 8;
colors["WHITE"]		= 9;
colors["NONE"]		= 0;

function getResistanceStr(bands, numBands) {
	switch (numBands) {
		//case 4
		default:
			var resistance = 
				(
					colors[bands[0]] * 10 +
					colors[bands[1]]
				) *
				Math.pow(10, colors[bands[2]])
			;
			
			return resistance + " ohms " + tolerance(colors[bands[3]]) + "%";
		case 5:
			var resistance = 
				(
					colors[bands[0]] * 100 +
					colors[bands[1]] * 10 +
					colors[bands[2]]
				) *
				Math.pow(10, colors[bands[3]])
			;
			
			return resistance + " ohms " + tolerance(colors[bands[4]]) + "%";
		case 6:
			var resistance = 
				(
					colors[bands[0]] * 100 +
					colors[bands[1]] * 10 +
					colors[bands[2]]
				) *
				Math.pow(10, colors[bands[3]])
			;
			
			return resistance + " ohms " + tolerance(colors[bands[4]]) + "% " + temp(colors[bands[5]]) + "ppm";
	}
}

function tolerance(color) {
	switch (color) {
		case colors["SILVER"]:	return 10;
		case colors["GOLD"]:	return 5;
		case colors["BROWN"]:	return 1;
		case colors["RED"]:	return 2;
		case colors["GREEN"]:	return 0.5;
		case colors["BLUE"]:	return 0.25;
		case colors["VIOLET"]:	return 0.1;
		default: 		return 20;
	}
}

function temp(color) {
	switch (color) {
		case colors["BROWN"]:	return 100;
		case colors["RED"]:	return 50;
		case colors["ORANGE"]:	return 15;
		case colors["YELLOW"]:	return 25;
		default:		return 0;
	}
}
