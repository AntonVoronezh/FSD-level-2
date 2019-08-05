const mobileMenuOpen = document.querySelector('.js-mobile-menu-open');
const mobileMenu = document.querySelector('.mobile-menu ');
const mobileMenuClose = document.querySelector('.js-mobile-menu-close ');

mobileMenuOpen.addEventListener('click', () => {
    
	mobileMenu.classList.add('open');
});

mobileMenuClose.addEventListener('click', () => {
    
	mobileMenu.classList.remove('open');
});
