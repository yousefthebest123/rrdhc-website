// Navbar Toggle for Mobile
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("show");
});

// Scroll Animation - Sections Appear Smoothly
const sections = document.querySelectorAll(".section");
const revealSection = () => {
    sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight - 50) {
            section.classList.add("show");
        }
    });
};
window.addEventListener("scroll", revealSection);
revealSection();

// Particle Background Effect
particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        size: { value: 3 },
        move: { speed: 1 },
        color: { value: "#ffffff" }
    }
});
