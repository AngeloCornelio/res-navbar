const sandwich = document.querySelector('nav button')
const navMenu = document.querySelector('.nav-menu')

sandwich.addEventListener('click', () => {
	navMenu.classList.toggle('show')
})