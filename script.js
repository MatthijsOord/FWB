document.addEventListener("DOMContentLoaded", function () {
    const backgroundVideo = document.getElementById('background-video');

    // Check if the device is in battery-saving mode
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            if (battery.savePower) {
                console.log('Battery saving mode is enabled. Background video will not be loaded.');
                // Ensure the video is hidden
                backgroundVideo.style.display = 'none';
                return; // Exit without modifying the background
            }

            // Proceed with the video behavior if battery saving mode is not enabled
            initializeBackgroundVideo();
        });
    } else {
        // If the Battery Status API is not supported, proceed with default behavior
        initializeBackgroundVideo();
    }

    function initializeBackgroundVideo() {
        // Make sure the video is displayed
        backgroundVideo.style.display = 'block';

        // Wait until the video is loaded completely
        backgroundVideo.addEventListener('canplaythrough', function () {
            // Add a 1.5-second delay before fading in the video
            setTimeout(function () {
                backgroundVideo.style.opacity = 1;
            }, 1500);
        });

        // Optionally, handle error cases
        backgroundVideo.addEventListener('error', function () {
            console.error('Video failed to load.');
            // Fallback behavior can be implemented here
        });
    }
});
