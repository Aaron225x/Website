document.addEventListener('DOMContentLoaded', function () {
	// конечная дата
	const deadline = new Date(2027, 4, 29, 15, 0, 0, 0);
	// id таймера
	let timerId = null;

	// склонение числительных
	function declensionNum(num, words) {
		return words[ (num % 100 > 4 && num % 100 < 20) ? 2 : [ 2, 0, 1, 1, 1, 2 ] [ (num % 10 < 5) ? num % 10 : 5 ] ];
	}

	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {
		const diff = deadline.getTime() - new Date().getTime(); //in miliseconds
		if (diff <= 0) clearInterval(timerId);
		
		// костыли для года и дня, 
		// потому что они не учитывают висакосные года, 
		// а число дней слишком большое, 
		// так как там лежит всё что не влезает в год, 
		// то есть 364 -- 0
		const year = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24 / 365) : 0; //получение года
		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) % 365 : 0; //получение месяца
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
		
		$year.textContent = year < 10 ? '0' + year : year;
		$days.textContent = days < 10 ? '0' + days : days;
		$hours.textContent = hours < 10 ? '0' + hours : hours;
		$minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
		$seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
		
		$year.dataset.title = declensionNum(year, ['год', 'года', 'лет']);
		$days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
		$hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
		$minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
		$seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
	}

	// получаем элементы, содержащие компоненты даты
	const $year = document.querySelector('.timer__year');
	const $days = document.querySelector('.timer__days');
	const $hours = document.querySelector('.timer__hours');
	const $minutes = document.querySelector('.timer__minutes');
	const $seconds = document.querySelector('.timer__seconds');

	// вызываем функцию countdownTimer
	countdownTimer();
	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000);
});

// функция для открытия главного меню на мобильной версии сайта
$(function () {
	$(".header__btn").on("click", function () {
		$(this).toggleClass("header__btn-active"),
		$(".header__menu").toggleClass("header__menu-active");
	}),
	$(".header__menu-link").on("click", function () {
		$(".header__menu").removeClass("header__menu-active");
	});
});
