	window.setInterval (function (){
		
		var currentHour = new Date().getHours();
		if (currentHour < 10) {
		(currentHour) = ('0' + currentHour);
		} else if (currentHour > 10) {
			currentHour = currentHour;
		};
		var currentMin = new Date().getMinutes();
		if (currentMin < 10) {
		(currentMin) = ('0' + currentMin);
		} else if (currentMin > 10) {
			currentMin = currentMin;
		};
		var currentSec = new Date().getSeconds();
		if (currentSec < 10) {
		(currentSec) = ('0' + currentSec);
		} else if (currentSec > 10) {
			currentSec = currentSec;
		};
	
		var clock = ('#' + currentHour + currentMin + currentSec);
		$('#clock').css('background-color' , clock);
	

	document.getElementById('clock').innerHTML = '#' + currentHour  + currentMin + currentSec + '!!';
	}, 1000);


	window.setInterval (function (){
		$('.clock').toggleClass('change');
	}, 5);



