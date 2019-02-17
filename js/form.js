(function() {
	var priceMap = {
		'bungalo': 0,
		'flat': 2000,
		'house': 4000,
		'palace': 100
	}

	//Валидация формы
	var form = document.querySelector('.ad-form');

	var typeForm = form.querySelector('#type');
	var priceForm = form.querySelector('#price');

	typeForm.addEventListener('change', function() {

		priceForm.placeholder = priceMap[typeForm.value];
		priceForm.min = priceMap[typeForm.value];
	})

	var roomForm = form.querySelector('#room_number');
	var capacityForm = form.querySelector('#capacity');

	roomForm.addEventListener('change', function() {
		if (roomForm.value == 100) {
			capacityForm.value = 0;	
		} else {
			capacityForm.value = roomForm.value;	
		}
	})

	var timeInForm = form.querySelector('#timein');
	var timeOutForm = form.querySelector('#timeout');

	timeInForm.addEventListener('change', function() {
		timeOutForm.value = timeInForm.value;
	})
	timeOutForm.addEventListener('change', function() {
		timeInForm.value = timeOutForm.value;
	})

	//Отправляем форму
	var doneTempleate = document.querySelector('#success').content.cloneNode(true);
	var notice = document.querySelector('.notice')

	var errorTempleate = document.querySelector('#error').content.cloneNode(true);


	form.addEventListener('submit', function(evt) {
		window.upload(new FormData(form), function(response) {
			form.reset();
			notice.appendChild(doneTempleate);
			document.addEventListener('keydown', function(evt) {
				if (evt.keyCode == 27) {
					notice.removeChild(notice.querySelector('.success'));
				}
			})

		}, function(err) {
			notice.appendChild(errorTempleate);
			notice.querySelector('.error__button')
			.addEventListener('click', function() {
				notice.removeChild(notice.querySelector('.error'));
			})
			console.log('Ошибка ' + err);
		});
		evt.preventDefault();
	})

	//Резетим форму по клику на кнопку
	var resetForm = document.querySelector('.ad-form__reset');
	resetForm.addEventListener('click', function(evt) {
		form.reset();
	})





})()