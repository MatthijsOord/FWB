function isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    const showBg = document.querySelector(".shows-page-background");
    const aboutBg = document.querySelector(".about-section-first");

    if (showBg) {
        showBg.style.position = "absolute";
    }

    if (aboutBg) {
        aboutBg.style.backgroundAttachment = "scroll";
        aboutBg.style.backgroundSize = "cover";
        aboutBg.style.backgroundPosition = "center";
    }

    document.addEventListener("scroll", function () {
        if (showBg) {
            showBg.style.transform = `translateY(${window.scrollY}px)`;
        }
    });
}
