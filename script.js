// Fade-in animations
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        }
    });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));

// Dark mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
