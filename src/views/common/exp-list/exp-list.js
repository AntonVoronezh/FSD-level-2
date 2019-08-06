const expList = document.querySelector('.exp-list');

if (expList) {
	expList.addEventListener('click', () => {
		expList.classList.toggle('open');
	});
}
