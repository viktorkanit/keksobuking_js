var LIST_TITLE = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"];
var LIST_FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var LIST_PHOTOS = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var LIST_TYPE = ['palace', 'flat', 'house', 'bungalo']
//Генерация случайного числа
var random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var listHere = [
	{
		'author': {
			'avatar': 'img/avatars/user0'+ random(1, 8) + '.png'
		},
		'offer': {
			'title': LIST_TITLE[random(0, LIST_TITLE.length - 1)],
			'address': '600, 350',
			'price': random(1000, 1000000),
			'type': LIST_TYPE[random(0, LIST_TITLE.length-1)],
			'rooms': random(1, 5),
			'guest': random(1, 15),
			'checkin': String(random(12, 14)) + ':00',
			'checkout': String(random(12, 14)) + ':00',
			'features': LIST_FEATURES,
			'description': '',
			'photos': LIST_PHOTOS
		},
		'location': {
			'x': '',
			'y': random(130, 630)
		}

	}
]

document.querySelector('.map').classList.remove('map--faded');
