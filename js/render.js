(function() {
	
	var map = document.querySelector('.map');
	var pinTempleate = document.querySelector('#pin').content.cloneNode(true);
	

	var renderPin = function(element) {
		var elementPin = pinTempleate.querySelector('.map__pin').cloneNode(true);
		elementPin.style.left = element.location.x + 'px';
		elementPin.style.top = element.location.y + 'px';
		map.appendChild(elementPin)
	}

	window.load(function(element) {
	for (var i = 0; i < element.length; i++) {
		renderPin(element[i]);
	}
})


	

})()