const whatsappBtn = document.querySelector('.platform-btn.whatsapp');
const telegramBtn = document.querySelector('.platform-btn.telegram');
const gradeSelector = document.querySelector('.grade-selector');
const sectionButton = document.querySelector('.section-button');
const sectionBtn = document.querySelector('.section-btn');

const whatsappLinks = {
    junior4: "https://chat.whatsapp.com/CECDafTVjPV3VMjbX3n2yW",
    junior5: "https://chat.whatsapp.com/HQ2nM338m1T032lCoGejd7",
    junior6: "https://chat.whatsapp.com/J0J1qGUwrzaEfubFjaDsTy",
    middle1: "https://chat.whatsapp.com/IGU3Wl4bVVt6veyw6B0tvu",
    middle2: "https://chat.whatsapp.com/JMr534wdacM4nl54O6cISZ",
    middle3: "https://chat.whatsapp.com/your-middle3-link",
    senior1: "https://chat.whatsapp.com/G4dpSCRWe6H58inWBDBHeT",
    senior2: "https://chat.whatsapp.com/HzAsGwoBu7IBhqBmLAX62n",
    senior3: "https://chat.whatsapp.com/your-senior3-link"
};

const telegramLinks = {
    junior4: "https://t.me/+PaX1CTiZ8EI3ZjJk",
    junior5: "https://t.me/+Siz9_KXlCVRiZTE8",
    junior6: "https://t.me/+RbeQPUu9t-g1Y2E0",
    middle1: "https://t.me/+dWk_V_L2wCdhMWQ0",
    middle2: "https://t.me/+vu0XsPR5T-ZhMDdk",
    middle3: "https://t.me/+QynoamQV_fcwZTZk",
    senior1: "https://t.me/+2XIz_DSyXKhlMzg0",
    senior2: "https://t.me/+XfgnU9rB03w3NDBk",
    senior3: "https://t.me/+nJFDcmQ6OSw4YmJk"
};

let currentPlatform = '';

whatsappBtn.addEventListener('click', () => {
    currentPlatform = 'whatsapp';
    whatsappBtn.classList.add('active');
    telegramBtn.classList.remove('active');
    sectionBtn.classList.remove('telegram-theme');
    updateButtons();
});

telegramBtn.addEventListener('click', () => {
    currentPlatform = 'telegram';
    telegramBtn.classList.add('active');
    whatsappBtn.classList.remove('active');
    sectionBtn.classList.add('telegram-theme');
    updateButtons();
});

gradeSelector.addEventListener('change', updateButtons);

sectionBtn.addEventListener('click', () => {
    const grade = gradeSelector.value;
    const links = currentPlatform === 'whatsapp' ? whatsappLinks : telegramLinks;
    
    if (links[grade]) {
        window.open(links[grade], '_blank');
    }
});

function updateButtons() {
    const grade = gradeSelector.value;
    if (grade) {
        sectionBtn.classList.add('active');
    } else {
        sectionBtn.classList.remove('active');
    }
}