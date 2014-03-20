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
		case color.SILVER:	return 10;
		case color.GOLD:	return 5;
		case color.BROWN:	return 1;
		case color.RED:		return 2;
		case color.GREEN:	return 0.5;
		case color.BLUE:	return 0.25;
		case color.VIOLET:	return 0.1;
		default: 			return 0;
	}
}
