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

// Butterfly Effect
const butterfliesContainer = document.getElementById("butterflies-container");

for (let i = 0; i < 10; i++) {
    let butterfly = document.createElement("div");
    butterfly.classList.add("butterfly");
    butterfly.style.left = `${Math.random() * 100}vw`;
    butterfly.style.top = `${Math.random() * 100}vh`;
    butterfly.style.animationDuration = `${Math.random() * 3 + 4}s`;
    butterfliesContainer.appendChild(butterfly);
}
