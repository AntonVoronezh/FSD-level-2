const dropdownСount = document.querySelector('.js-dropdown-count');
const dropdownСountOpen = document.querySelector('.dropdown-count');

dropdownСount.addEventListener('click', () => {
	
	dropdownСountOpen.classList.toggle('open');
});

const jsBigMinusCount = document.querySelector('.js-big-count-minus');
const jsBigNumberCount = document.querySelector('.js-big-count-number');
const jsBigPlusCount = document.querySelector('.js-big-count-plus');

jsBigMinusCount.addEventListener('click', () => {
	if (jsBigNumberCount.innerHTML > 0) {
		jsBigNumberCount.innerHTML -= 1;
	}

	if (jsBigNumberCount.innerHTML === '0') {
		jsBigMinusCount.classList.remove('dropdown-count__minus--active');
	}

	count();
});

jsBigPlusCount.addEventListener('click', () => {
	jsBigNumberCount.innerHTML = +jsBigNumberCount.innerHTML + 1;
	jsBigMinusCount.classList.add('dropdown-count__minus--active');
	count();
});

const jsSmallMinus = document.querySelector('.js-small-count-minus');
const jsSmallNumber = document.querySelector('.js-small-count-number');
const jsSmallPlus = document.querySelector('.js-small-count-plus');

jsSmallMinus.addEventListener('click', () => {
	if (jsSmallNumber.innerHTML > 0) {
		jsSmallNumber.innerHTML -= 1;
	}

	if (jsSmallNumber.innerHTML === '0') {
		jsSmallMinus.classList.remove('dropdown-count__minus--active');
	}

	count();
});

jsSmallPlus.addEventListener('click', () => {
	jsSmallNumber.innerHTML = +jsSmallNumber.innerHTML + 1;
	jsSmallMinus.classList.add('dropdown-count__minus--active');
	count();
});

const jsSmallerMinus = document.querySelector('.js-smaller-count-minus');
const jsSmallerNumber = document.querySelector('.js-smaller-count-number');
const jsSmallerPlus = document.querySelector('.js-smaller-count-plus');

jsSmallerMinus.addEventListener('click', () => {
	if (jsSmallerNumber.innerHTML > 0) {
		jsSmallerNumber.innerHTML -= 1;
	}

	if (jsSmallerNumber.innerHTML === '0') {
		jsSmallerMinus.classList.remove('dropdown-count__minus--active');
	}

	count();
});

jsSmallerPlus.addEventListener('click', () => {
	jsSmallerNumber.innerHTML = +jsSmallerNumber.innerHTML + 1;
	jsSmallerMinus.classList.add('dropdown-count__minus--active');
	count();
});

function count() {
	let text1, text2;

	let com = +jsBigNumberCount.innerHTML;
	let bad = +jsSmallNumber.innerHTML;

	if (com > 0 && com < 5) {
		text1 = com + ' спальни, ';
	}

	if (bad > 0 && bad < 3) {
		text2 = bad + ' кровати... ';
	}

	dropdownСount.innerHTML = text1 + text2;
}
