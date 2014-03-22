$(document).ready(function() {
	// $('select').attr('onchange', 'selectChange()');
});

function selectChange() {
	alert("Resistance: " + getResistanceStr(
			new Array(
				document.getElementById('band1').value,
				document.getElementById('band2').value,
				document.getElementById('band3').value,
				document.getElementById('band4').value
			)
		)
	);
}
