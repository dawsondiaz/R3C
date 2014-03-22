$(document).ready(function() {
	// $('select').attr('onchange', 'selectChange()');
});

function selectChange() {
	alert(
		"Resistance: " + getResistanceStr(
			new Array(
				document.getElementById('band1'),
				document.getElementById('band2'),
				document.getElementById('band3'),
				document.getElementById('band4')
			)
		)
	);
}