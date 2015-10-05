// Target my clock
var hour = $('.hour');
var min = $('.min');
var sec = $('.sec');

	window.setInterval (function (){
	var currentHour = new Date().getHours();
	if (currentHour < 10) {
	(currentHour) = ('0' + currentHour);
	} else if (currentHour > 10) {
		currentHour = currentHour;
	}
	document.getElementById('hour').innerHTML = currentHour;
	}, 500);

	window.setInterval (function (){
	var currentMin = new Date().getMinutes();
	if (currentMin < 10) {
	(currentMin) = ('0' + currentMin);
	} else if (currentMin > 10) {
		currentMin = currentMin;
	}	document.getElementById('min').innerHTML = currentMin;
	}, 500);

	window.setInterval (function (){
	var currentSec = new Date().getSeconds();
	if (currentSec < 10) {
	(currentSec) = ('0' + currentSec);
	} else if (currentSec > 10) {
		currentSec = currentSec;
	}
	document.getElementById('sec').innerHTML = currentSec;
	}, 500);


