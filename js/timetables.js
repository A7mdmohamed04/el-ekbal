function checkSelections() {
    const gradeValue = document.getElementById('gradeSelect').value;
    const classValue = document.getElementById('classSelect').value;
    const defaultText = document.getElementById('default-text');
    const imageControls = document.querySelector('.image-controls');
    
    const allImages = document.querySelectorAll('.timetable-image');
    
    allImages.forEach(img => {
        img.classList.remove('show');
        img.style.display = 'none';
    });
    
    imageControls.classList.remove('show');
    
    if (gradeValue && classValue) {
        if (gradeValue === 'j6' && classValue === 'D') {
            defaultText.style.display = 'block';
            defaultText.classList.remove('hide');
            defaultText.textContent = 'Class D is not available for Junior 6';
            return;
        }
        
        const imageId = `${gradeValue.toLowerCase()}${classValue.toLowerCase()}-timetable`;
        const selectedImage = document.getElementById(imageId);
        
        if (selectedImage) {
            defaultText.classList.add('hide');
            setTimeout(() => {
                defaultText.style.display = 'none';
                selectedImage.style.display = 'block';
                setTimeout(() => {
                    selectedImage.classList.add('show');
                    imageControls.classList.add('show');
                }, 50);
            }, 300);
        } else {
            defaultText.style.display = 'block';
            setTimeout(() => {
                defaultText.classList.remove('hide');
            }, 50);
        }
    } else {
        defaultText.style.display = 'block';
        setTimeout(() => {
            defaultText.classList.remove('hide');
        }, 50);
    }
}

function toggleFullscreen() {
    const overlay = document.querySelector('.fullscreen-overlay');
    const fullscreenImage = document.querySelector('.fullscreen-image');
    const visibleImage = document.querySelector('.timetable-image.show');
    
    if (visibleImage) {
        fullscreenImage.src = visibleImage.src;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        enableZoom(fullscreenImage);
    }
}

function closeFullscreen() {
    const overlay = document.querySelector('.fullscreen-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function enableZoom(image) {
    let scale = 1;
    image.onwheel = (e) => {
        e.preventDefault();
        scale += e.deltaY * -0.01;
        scale = Math.min(Math.max(1, scale), 3);
        image.style.transform = `scale(${scale})`;
    };
}