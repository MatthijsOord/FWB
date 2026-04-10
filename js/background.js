function isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    const backgrounds = document.querySelectorAll(
        ".shows-page-background, .about-page-background"
    );

    backgrounds.forEach(bg => {
        bg.style.position = "absolute"; // Override fixed
    });

    document.addEventListener("scroll", function () {
        backgrounds.forEach(bg => {
            bg.style.transform = `translateY(${window.scrollY}px)`;
        });
    });
}