(function() {
	window.load = function(onSucess) {
		var URL = 'https://js.dump.academy/keksobooking/data';
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('GET', URL);
		xhr.send();

		xhr.addEventListener('load', function() {
			onSucess(xhr.response);
			
		})
	}

	window.upload = function(data, onSucess) {
		var URL = 'https://js.dump.academy/keksobooking';

		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';

		xhr.addEventListener('load', function() {
			onSucess(xhr.responseType);
		}

		xhr.open('POST', URL);
		xhr.send(data);
	}


	
})()

