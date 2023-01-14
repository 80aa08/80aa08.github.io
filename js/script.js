const navBtn = document.querySelector('.hamburger')
const navLogo = document.querySelector('.nav__logo')
const navMenu = document.querySelector('.nav__menu__links')
const allNavItems = document.querySelectorAll('.link')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMenu.classList.toggle('mobile--active')

	navLogo.addEventListener('click', () => {
		navMenu.classList.remove('mobile--active')
    navBtn.classList.remove('is-active')
	})

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMenu.classList.remove('mobile--active')
			navBtn.classList.remove('is-active')
		})
	})
}

navBtn.addEventListener('click', handleNav)
