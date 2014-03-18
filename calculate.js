var colors = {
	SILVER:	-2,
	GOLD:	-1,
	//Silver and Gold (above) are only for multipliers
	BLACK:  0,
	BROWN:  1,
	RED:    2,
	ORANGE: 3,
	YELLOW: 4,
	GREEN:  5,
	BLUE:   6,
	VIOLET: 7,
	GRAY:   8,
	WHITE:	9
};

function getResistanceStr(bands, multiplier) {
	var resistance = 
			(bands[0] * 10 +
			bands[1]) *
			Math.pow(10, bands[2])
	;
	
	return resistance + " " + tolerance(bands[3]);
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
