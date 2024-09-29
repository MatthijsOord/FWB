window.addEventListener("load", function () {
    // Delay hiding the loading screen for 1.5 seconds
    setTimeout(function() {
        // When the delay is over, hide the loading screen with dissolve animation
        const loadingScreen = document.querySelector(".loading-screen");
        loadingScreen.classList.add("hidden"); // Add the 'hidden' class to trigger the dissolve animation

        const scrolllock = document.querySelector(".loading-lock");
        scrolllock.classList.remove("loading-lock"); // Add the 'hidden' class to trigger the dissolve animation
    }, 1000);
});