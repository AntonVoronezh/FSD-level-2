const dropdown = document.querySelector('.js-dropdown');

if (dropdown) {
	const dropdownOpen = document.querySelector('.dropdown');

	dropdown.addEventListener('click', () => {
		dropdownOpen.classList.toggle('open');
	});

	const jsBigMinus = document.querySelector('.js-big-minus');
	const jsBigNumber = document.querySelector('.js-big-number');
	const jsBigPlus = document.querySelector('.js-big-plus');

	const reset = document.querySelector('.gray');
	const jsReset = document.querySelector('.js-reset');

	jsBigMinus.addEventListener('click', () => {
		if (jsBigNumber.innerHTML > 0) {
			jsBigNumber.innerHTML -= 1;
		}

		if (jsBigNumber.innerHTML === '0') {
			jsBigMinus.classList.remove('dropdown__minus--active');
		}

		count();
	});

	jsBigPlus.addEventListener('click', () => {
		jsBigNumber.innerHTML = +jsBigNumber.innerHTML + 1;
		jsBigMinus.classList.add('dropdown__minus--active');
		count();
	});

	const jsSmallMinus = document.querySelector('.js-small-minus');
	const jsSmallNumber = document.querySelector('.js-small-number');
	const jsSmallPlus = document.querySelector('.js-small-plus');

	jsSmallMinus.addEventListener('click', () => {
		if (jsSmallNumber.innerHTML > 0) {
			jsSmallNumber.innerHTML -= 1;
		}

		if (jsSmallNumber.innerHTML === '0') {
			jsSmallMinus.classList.remove('dropdown__minus--active');
		}

		count();
	});

	jsSmallPlus.addEventListener('click', () => {
		jsSmallNumber.innerHTML = +jsSmallNumber.innerHTML + 1;
		jsSmallMinus.classList.add('dropdown__minus--active');
		count();
	});

	const jsSmallerMinus = document.querySelector('.js-smaller-minus');
	const jsSmallerNumber = document.querySelector('.js-smaller-number');
	const jsSmallerPlus = document.querySelector('.js-smaller-plus');

	jsSmallerMinus.addEventListener('click', () => {
		if (jsSmallerNumber.innerHTML > 0) {
			jsSmallerNumber.innerHTML -= 1;
		}

		if (jsSmallerNumber.innerHTML === '0') {
			jsSmallerMinus.classList.remove('dropdown__minus--active');
		}

		count();
	});

	jsSmallerPlus.addEventListener('click', () => {
		jsSmallerNumber.innerHTML = +jsSmallerNumber.innerHTML + 1;
		jsSmallerMinus.classList.add('dropdown__minus--active');
		count();
	});

	function count() {
		let count = +jsSmallerNumber.innerHTML + +jsSmallNumber.innerHTML + +jsBigNumber.innerHTML;

		if (count >= 0) {
			reset.classList.add('open');

			let text;
			if (count === 1) {
				text = ' гость';
			}

			if (count > 1 && count < 5) {
				text = ' гостя';
			}
			if (count > 4) {
				text = ' гостей';
			}
			if (count === 0) {
				text = ' Сколько гостей';
				count = '';
			}

			dropdown.innerHTML = count + text;
		} else {
			reset.classList.reset('open');
		}
	}

	jsReset.addEventListener('click', () => {
		dropdown.innerHTML = ' Сколько гостей';
		jsSmallerNumber.innerHTML = 0;
		jsSmallNumber.innerHTML = 0;
		jsBigNumber.innerHTML = 0;
	});

	const jsDropOk = document.querySelector('.js-ok-dropdown');

	jsDropOk.addEventListener('click', () => {
		dropdownOpen.classList.toggle('open');
	});
}
