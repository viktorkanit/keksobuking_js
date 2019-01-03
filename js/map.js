var pinTempleate = document.querySelector('#pin').content.querySelector('.map__pin');
var MOCK = {
		'author': {
			'avatar': [1, 2, 3, 4, 5, 6, 7, 8]
		},
		'offer': {
			'title': ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", 
					  "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", 
					  "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"],

			'address': {
				'location': {
					'x': {
						'min': 50,
						'max': 150
					},
					'y': {
						'min': 150,
						'max': 600
					}
				}
			},
			'price': {
				'min': 1000,
				'max': 1000000
			},
			'type': ['palace', 'flat', 'house', 'bungalo'],
			'rooms': {
				'min': 1,
				'max': 5
			},
			'guest': {
				'min': 1,
				'max': 15
			},
			'checkin': ['12:00', '13:00', '14:00'],
			'checkout': ['12:00', '13:00', '14:00'],
			'features': ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
			'description': '',
			'photos': ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
		},
		'location': {
			'x': {
				'min': 100,
				'max': 900
			},
			'y': {
				'min': 130,
				'max': 550
			}
		}

}
var COUNT_OBJECT = 8;
//Генерация случайного числа
var random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Массив разной длинны
var randomLength = function(arr) {
	var temp = [];
	for (var i = 0; i < random(1, arr.length); i++) {
		temp.push(arr[i]);
	}
	return temp
}
//Случайный элемент массива 
var randArrElement = function(arr) {

	return arr[Math.floor(Math.random() * arr.length)];	
}
//Сортировка массива(перемешивание)
var compareRandom = function () {
	return Math.random() - 0.5;
}


//Генерируем новые объекты на основе MOCK
var object = function(obj) {
	var arr = [];
	for (var i = 0; i < COUNT_OBJECT; i++) {
		var newObject = {
			'author': {
				'avatar': 'img/avatars/user0' + obj.author.avatar[i] + '.png'
			},
			'offer': {
				'title': randArrElement(obj.offer.title),
				'address': {
					'location': {
					'x': random(obj.offer.address.location.x.min, obj.offer.address.location.x.max),
					'y': random(obj.offer.address.location.y.min, obj.offer.address.location.y.max)
				}
				},
				'price': random(obj.offer.price.min, obj.offer.price.max),
				'type': randArrElement(obj.offer.type),
				'rooms': random(obj.offer.rooms.min, obj.offer.rooms.max),
				'guest': random(obj.offer.guest.min, obj.offer.guest.max),
				'checkin': randArrElement(obj.offer.checkin),
				'checkout': randArrElement(obj.offer.checkout),
				'features': randomLength(obj.offer.features),
				'description': '',
				'photos': obj.offer.photos.sort(compareRandom),
			},
			'location': {
				'x': random(obj.location.x.min, obj.location.x.max),
				'y': random(obj.location.y.min, obj.location.y.max)
			}

		}
		arr.push(newObject)
		
	}
	return arr
}

var newArr = object(MOCK);


//Создаём пин
var pinCreate = function(arr) {
	var element = pinTempleate.cloneNode(true);
	element.style = 'left: ' + arr.location.x + 'px; ' + 'top:' + arr.location.y + 'px;';
	element.querySelector('img').src = arr.author.avatar

	return element
}
//Рендерим наши пины через фрагмент
var fragmentPin = document.createDocumentFragment();
for (var i = 0; i < newArr.length; i++) {
	fragmentPin.appendChild(pinCreate(newArr[i]));
}
var cardTempleate = document.querySelector('#card').content.querySelector('.map__card');
var mapListCard = document.querySelector('.map');

//Создаём карточку объявления
var cardCreate = function(arr) {
	var card = cardTempleate.cloneNode(true);
	card.querySelector('.popup__title').textContent = arr.offer.title;
	card.querySelector('.popup__text--address').textContent = arr.offer.address.location.x + ', ' + arr.offer.address.location.y;
	card.querySelector('.popup__text--price').textContent = arr.offer.price + '₽/ночь';
	card.querySelector('.popup__type').textContent = arr.offer.type;
	card.querySelector('.popup__text--capacity').textContent = arr.offer.rooms + ' комнаты для ' + arr.offer.guest;
	card.querySelector('.popup__text--time').textContent = 'Заезд после ' + arr.offer.checkin + ', выезд до ' + arr.offer.checkout;
	card.querySelector('.popup__features').textContent = arr.offer.features;
	card.querySelector('.popup__description').textContent = arr.offer.description;
	//закончить вывод
	return card
}



var fragmentCard = document.createDocumentFragment();
for (var i = 0; i < newArr.length; i++) {
	fragmentCard.appendChild(cardCreate(newArr[i]));
}
	
	mapListCard.insertBefore(fragmentCard, mapListCard.querySelector('.map__filters-container'))


document.querySelector('.map__pins').appendChild(fragmentPin);








document.querySelector('.map').classList.remove('map--faded');
