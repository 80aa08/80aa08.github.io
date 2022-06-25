const navMobile = document.querySelector('#navbarNavAltMarkup')
const navBtn = document.querySelector('.navbar-toggler')
const footerYear = document.querySelector('.footer__year')
const allNavItems = document.querySelectorAll('.nav-link')


const handleNav = () => {
    allNavItems.forEach(item => {
		item.addEventListener('click', () => {
            navMobile.classList.remove('show')
        })
})
}

navBtn.addEventListener('click', handleNav)






const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()