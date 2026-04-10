function isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    const showBg = document.querySelector(".shows-page-background");
    const aboutBg = document.querySelector(".about-page-background");

    [showBg, aboutBg].forEach((bg) => {
        if (!bg) return;
        bg.style.position = "absolute";
        bg.style.left = "0";
        bg.style.top = "0";
        bg.style.width = "100%";
        bg.style.height = "100%";
        bg.style.transform = "translateY(0px)";
        bg.style.willChange = "transform";
    });

    document.addEventListener("scroll", function () {
        const offset = window.scrollY;

        if (showBg) {
            showBg.style.transform = `translateY(${offset}px)`;
        }
        if (aboutBg) {
            aboutBg.style.transform = `translateY(${offset}px)`;
        }
    });
}
