function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for(let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        particle.style.animationDuration = `${Math.random() * 4 + 2}s`;
        
        particlesContainer.appendChild(particle);
    }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const teacherCode = document.getElementById('teacherCode').value;
    
    const btn = e.target.querySelector('.login-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => btn.style.transform = 'scale(1)', 200);
});

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.querySelector('i').style.color = '#3498db';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.querySelector('i').style.color = '#003470';
    });
});

window.addEventListener('load', createParticles);