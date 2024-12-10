document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
});


// Scrollreveal animation

const sr=ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal('')
sr.reveal('.intro, .anime',{origin:'bottom'})
sr.reveal('.animetion',{origin:'left'})
sr.reveal('.infomation, .good',{origin:'right'})
sr.reveal('.projects-section, .card-container',{interval: 100})
