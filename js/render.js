(function() {
	
	var map = document.querySelector('.map');
	var pinTempleate = document.querySelector('#pin').content.cloneNode(true);
	

	var renderPin = function(element) {
		var elementPin = pinTempleate.querySelector('.map__pin').cloneNode(true);
		elementPin.style.left = element.location.x + 'px';
		elementPin.style.top = element.location.y + 'px';
		elementPin.querySelector('img').src = element.author.avatar;
		map.appendChild(elementPin)
	}


	var cardTempleate = document.querySelector('#card');
	var renderCard = function(element) {
		var elementCard = cardTempleate.querySelector('.map__card').cloneNode(true);
		elementCard.querySelector('.popup__avatar').src = element.author.avatar;
		elementCard.querySelector('.popup__title').textContent = element.offer.title;
		elementCard.querySelector('.popup__text--address').textContent = element.offer.address;

	}

	window.load(function(element) {
		element.forEach( function(element, index) {
			
			renderPin(element);
			renderCard(element);
	});

	


})


	

})()