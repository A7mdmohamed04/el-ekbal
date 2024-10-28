document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Define your backgrounds for desktop and mobile
    const backgrounds = {
        '/index.html': {
            desktop: 'url("indexdesktop.jpg")',
            mobile: 'url("phone.jpg")'
        },
        '/Teacher_padge.html': {
            desktop: 'url("")',
            mobile: 'url("rm222-mind-24.jpg")'
        },
        '/page3.html': {
            desktop: 'url("background3-desktop.jpg")',
            mobile: 'url("background3-mobile.jpg")'
        },
        // Add more pages as needed
    };

    const currentPath = window.location.pathname;
    const isMobile = window.innerWidth <= 768; // You can adjust the width as needed

    // Set the background based on device type
    if (backgrounds[currentPath]) {
        const bgImage = isMobile ? backgrounds[currentPath].mobile : backgrounds[currentPath].desktop;
        body.style.backgroundImage = bgImage;
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundRepeat = 'no-repeat';
    } else {
        // Default background for other pages
        body.style.backgroundImage = isMobile ? 'url("default-background-mobile.jpg")' : 'url("default-background.jpg")';
    }
});