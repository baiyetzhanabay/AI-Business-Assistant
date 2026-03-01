// simple script to highlight nav link based on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function activateLink() {
    let index = sections.length;

    while(--index && window.scrollY + 100 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

activateLink();
window.addEventListener('scroll', activateLink);