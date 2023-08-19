if (document.querySelector('.nav')) {
    const navbar = document.querySelector('.navbar')
    const navBurger = navbar.querySelector('.burger')
    const navMenu = navbar.querySelector('.nav__menu')
    /* burger menu for navbar */
    navBurger.addEventListener('click', () => {
        if (navBurger.classList.contains('active')) {
            navBurger.classList.remove('active')
            navMenu.classList.remove('active')
        } else {
            navBurger.classList.add('active')
            navMenu.classList.add('active')
        }
    })
    /* fixed navbar */
    window.onscroll = () => {
        if (window.scrollY > 1) {
            navbar.classList.add("fixed")
        } else {
            navbar.classList.remove("fixed")
        }
    }
}