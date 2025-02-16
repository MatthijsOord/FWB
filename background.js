function isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    document.querySelector(".shows-page-background").style.position = "absolute"; // Override fixed

    document.addEventListener("scroll", function () {
        document.querySelector(".shows-page-background", ".about-page-background").style.transform = `translateY(${window.scrollY}px)`;
    });
}
