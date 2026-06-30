// ===============================
// Mobile Menu Toggle
// ===============================

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// Close menu when a nav link is clicked (mobile)
const navLinks = document.querySelectorAll("#menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("show");
    });
});

// ===============================
// Typing Animation
// ===============================

const text = "Full Stack Web Developer | AI & ML Student";
const typingElement = document.getElementById("typing");

let index = 0;

function typeText() {

    if (index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }
}

window.onload = typeText;

// ===============================
// Scroll Reveal Animation
// ===============================

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealSections);

revealSections();

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent successfully.");

    form.reset();

});

// ===============================
// Active Navbar Link
// ===============================

const navItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Smooth Button Hover Effect
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});