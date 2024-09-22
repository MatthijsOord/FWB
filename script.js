document.addEventListener("DOMContentLoaded", function() {
    const backgroundVideo = document.getElementById('background-video');

    // Wait until the video is loaded completely
    backgroundVideo.addEventListener('canplaythrough', function() {
        // Add a 1-second delay before fading in the video
        setTimeout(function() {
            backgroundVideo.style.opacity = 1;
        }, 1000); // 1000 milliseconds = 1 second
    });

    // Optionally, handle error cases
    backgroundVideo.addEventListener('error', function() {
        console.error('Video failed to load.');
        // Fallback behavior can be implemented here
    });
});
