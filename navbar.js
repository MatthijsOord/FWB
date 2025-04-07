document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('.nav-bar');

    if (navBar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                navBar.classList.remove('transparent'); // Add background color when scrolled
            } else {
                navBar.classList.add('transparent'); // Remove background color at the top
            }
        });
    } else {
        console.warn('Navbar not found on this page');
    }

    // Ensure the correct state on page load
    if (window.scrollY === 0) {
        navBar.classList.add('transparent');
    }
});