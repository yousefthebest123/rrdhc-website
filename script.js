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

// Background Particles Effect
particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        size: { value: 3 },
        move: { speed: 1 },
        color: { value: "#ffffff" }
    }
});
