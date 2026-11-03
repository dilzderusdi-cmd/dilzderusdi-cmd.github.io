
/* ==========================
   MOBILE NAVIGATION
========================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active")
        ? "✕"
        : "☰";

});


// CLOSE MENU WHEN LINK CLICKED

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* ==========================
   AUTOMATIC YEAR
========================== */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll(
    ".section-heading, .about-content, .project-card, .contact-box"
).forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
    "%c Welcome to Dilz Portfolio ",
    "background: #9b70ff; color: white; padding: 10px; font-weight: bold;"
);

console.log(
    "Built with HTML, CSS and JavaScript."
);
