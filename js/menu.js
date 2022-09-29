const buttonToggle = document.querySelector('[data-menu-button');
const menuMobile = document.querySelector('[data-menu-mobile]');

buttonToggle.addEventListener('click', () => {
	buttonToggle.classList.toggle('active');
	menuMobile.classList.toggle('open');
});
