// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
const navLinkItems = document.querySelectorAll('.nav-link');

navLinkItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.classList.remove('active');
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offsetTop = targetSection.offsetTop - 50;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Skill Bars Animation on Scroll
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsTop < windowHeight - 100) {
        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach(skill => {
            const width = skill.getAttribute('data-skill-level');
            skill.style.width = width;
        });
    }
});
// Skill Bars Animation on Scroll
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsTop < windowHeight - 100) {
        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach(skill => {
            const skillLevel = skill.getAttribute('data-skill-level');
            skill.style.setProperty('--skill-level', skillLevel);
            skill.classList.add('animate');
        });
    }
});

