// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        // Ignore if it's just "#"
        if (this.getAttribute("href") === "#") return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Dark mode toggle + localStorage
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle?.querySelector(".theme-icon");
const storedTheme = window.localStorage.getItem("theme");

// Apply stored theme or system preference
if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    body.classList.add("dark");
    if (themeIcon) themeIcon.textContent = "☀️";
}

themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
    if (themeIcon) themeIcon.textContent = isDark ? "☀️" : "🌙";
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
