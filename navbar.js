// Responsive Navbar JavaScript - R & Design 4.0
console.log('Navbar');

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')

    burger.addEventListener('click', () => {
        nav.classList.toggle('active-nav')
        console.log(nav.classList.contains('active-nav'))
    })
}

// App Wide Function Calls
navSlide()