
// =========================
// 1. MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuToggle.classList.toggle("open");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close menu after clicking a link

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =========================
// 2. SCROLL ANIMATIONS
// =========================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach((element) => {

    observer.observe(element);

});


// =========================
// 3. AUTOMATIC FOOTER YEAR
// =========================

const yearElement = document.querySelector("#year");

yearElement.textContent = new Date().getFullYear();
// Disable right-click
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

// Block some keyboard shortcuts
document.addEventListener("keydown", function(e) {
    if (
        e.ctrlKey &&
        ["u", "s", "c"].includes(e.key.toLowerCase())
    ) {
        e.preventDefault();
    }

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey &&
        ["i", "j"].includes(e.key.toLowerCase()))
    ) {
        e.preventDefault();
    }
});