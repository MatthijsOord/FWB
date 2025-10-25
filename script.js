document.addEventListener("DOMContentLoaded", function () {
    const backgroundVideo = document.getElementById('background-video');
    const FADE_DELAY = 1500; // 1.5 seconds delay

    // Check if the device is in battery-saving mode
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            if (battery.savePower) {
                console.log('Battery saving mode is enabled. Background video will not be loaded.');
                backgroundVideo.style.display = 'none';
                return;
            }
            initializeBackgroundVideo();
        });
    } else {
        initializeBackgroundVideo();
    }

    function initializeBackgroundVideo() {
        backgroundVideo.style.display = 'block';
        // Pause the video initially
        backgroundVideo.pause();

        let isLoaded = false;
        let timerComplete = false;

        // Function to start video when both conditions are met
        function startVideoIfReady() {
            if (isLoaded && timerComplete) {
                backgroundVideo.style.opacity = 1;
                backgroundVideo.play();
            }
        }

        // Wait until the video is loaded completely
        backgroundVideo.addEventListener('canplaythrough', function () {
            isLoaded = true;
            startVideoIfReady();
        });

        // Start the timer
        setTimeout(function () {
            timerComplete = true;
            startVideoIfReady();
        }, FADE_DELAY);

        // Handle error cases
        backgroundVideo.addEventListener('error', function () {
            console.error('Video failed to load.');
            // Fallback behavior can be implemented here
        });
    }
});
