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

	window.upload = function(data, onLoad, onError) {
		var URL = 'https://js.dump.academy/keksobooking';

		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('POST', URL);
		
		xhr.addEventListener('load', function() {
			if (xhr.status === 200) {
				onLoad(xhr.response);
			} else {
				onError(xhr.status);
			}
			
		})

		
		xhr.send(data);
	}


	
})()

