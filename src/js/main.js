// const burgerBtn = document.querySelector('.hamburger')
// const navMobile = document.querySelector('.nav-mobile')

// //----------------------------------------------------------------

// const handleNav = () => {
// 	document.body.classList.toggle('sticky-body')
// 	navMobile.classList.toggle('nav-mobile--active')
// 	burgerBtn.classList.toggle('is-active')
// 	// navMobile.style = 'overflow-y: hidden;'
// }

// navMobile.querySelectorAll('a.nav__link').forEach(el =>
// 	el.addEventListener('click', () => {
// 		navMobile.classList.remove('nav-mobile--active')
// 		burgerBtn.classList.remove('is-active')
// 		document.body.classList.remove('sticky-body')
// 	})
// )

// document.querySelector('.hamburger').addEventListener('click', function () {
// 	const body = document.querySelector('body')

// 	// Toggle klasy aktywności dla panelu nawigacji mobilnej
// 	navMobile.classList.toggle('nav-mobile--active')

// 	// Zablokowanie przewijania strony, gdy panel jest aktywny
// 	if (navMobile.classList.contains('nav-mobile--active')) {
// 		// Poprawiono na &-mobile--active
// 		body.style.overflow = 'hidden'
// 	} else {
// 		body.style.overflow = 'auto'
// 	}
// })

// //----------------------------------------------------------------

// const handleCurrentYear = () => {
// 	const footerYear = document.querySelector('.footer__year')

// 	const year = new Date().getFullYear()
// 	footerYear.innerText = year
// }

// //----------------------------------------------------------------

// burgerBtn.addEventListener('click', handleNav)
// handleCurrentYear()

const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');

burgerBtn.addEventListener('click', function () {
    document.body.classList.toggle('sticky-body');
    navMobile.classList.toggle('nav-mobile--active');
    burgerBtn.classList.toggle('is-active');

    // Zablokowanie przewijania strony, gdy panel jest aktywny
    if (navMobile.classList.contains('nav-mobile--active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Obsługa zamykania nawigacji po kliknięciu w link
navMobile.querySelectorAll('a.nav__link').forEach(el =>
    el.addEventListener('click', () => {
        navMobile.classList.remove('nav-mobile--active');
        burgerBtn.classList.remove('is-active');
        document.body.classList.remove('sticky-body');
        document.body.style.overflow = 'auto'; // Upewniamy się, że przewijanie jest włączone po zamknięciu nawigacji
    })
);

// Funkcja aktualizująca rok w stopce
const handleCurrentYear = () => {
    const footerYear = document.querySelector('.footer__year');
    const year = new Date().getFullYear();
    footerYear.innerText = year;
};

// Wywołanie funkcji aktualizującej rok w stopce
handleCurrentYear();
