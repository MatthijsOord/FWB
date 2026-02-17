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

    const repertoireSection = document.getElementById('repertoire');
    const repertoireLink = document.querySelector('.nav-bar a[href="about#repertoire"]');
    const aboutLink = document.querySelector('.nav-bar a.active');

    repertoireSection.addEventListener('mouseenter', () => {
        repertoireLink.classList.add('active');
        aboutLink.classList.remove('active');
    });

    repertoireSection.addEventListener('mouseleave', () => {
        repertoireLink.classList.remove('active');
        aboutLink.classList.add('active');
    });
});