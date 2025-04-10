const navLinks = document.querySelectorAll("nav ul li a");
  
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Optional: Keep menu item active on scroll (enhanced experience)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinksMobile = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinksMobile.classList.toggle("show");
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const closeNav = document.getElementById("closeNav");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.add("show");
    });
  
    closeNav.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  });