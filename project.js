// Optional floating effect for desktop
const projectCards = document.querySelectorAll('.project-card');

function floatEffect() {
    projectCards.forEach((card, index) => {
        const x = Math.sin((Date.now() + index * 1000) / 2000) * 5;
        const y = Math.cos((Date.now() + index * 1000) / 2000) * 5;

        card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });

    requestAnimationFrame(floatEffect);
}

if (window.innerWidth > 768) {
    floatEffect();
}
