var colors = {};
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

function getResistanceStr(bands) {
	var resistance = 
		(
			colors[bands[0]] * 10 +
			colors[bands[1]]
		) *
		Math.pow(10, colors[bands[2]])
	;
	
	return resistance + "Ω " + tolerance(colors[bands[3]]) + "%";
}

function tolerance(color) {
	switch (color) {
		case colors["SILVER"]:	return 10;
		case colors["GOLD"]:	return 5;
		case colors["BROWN"]:	return 1;
		case colors["RED"]:		return 2;
		case colors["GREEN"]:	return 0.5;
		case colors["BLUE"]:	return 0.25;
		case colors["VIOLET"]:	return 0.1;
		default: 			return 0;
	}
}
