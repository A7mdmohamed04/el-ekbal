document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const facultyCards = document.querySelectorAll('.faculty-card');
const facultyInfo = document.querySelector('.faculty-info');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.faculty-info .close-btn');

facultyCards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('h3').textContent;
        const info = card.getAttribute('data-info');
        facultyInfo.querySelector('h3').textContent = name;
        facultyInfo.querySelector('p').textContent = info;
        
        facultyInfo.classList.add('active');
        overlay.classList.add('active');
        
        card.style.transform = 'scale(1.05)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 300);
    });
});

const closeFacultyInfo = () => {
    facultyInfo.style.transform = 'translate(-50%, -50%) scale(0.8)';
    facultyInfo.style.opacity = '0';
    overlay.classList.remove('active');
    
    setTimeout(() => {
        facultyInfo.classList.remove('active');
        facultyInfo.style.transform = '';
        facultyInfo.style.opacity = '';
    }, 300);
};

closeBtn.addEventListener('click', closeFacultyInfo);
overlay.addEventListener('click', closeFacultyInfo);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && facultyInfo.classList.contains('active')) {
        closeFacultyInfo();
    }
});

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});