document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");
  const body = document.body;
  const header = document.querySelector(".site-header");



  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        body.classList.remove("nav-open");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
        }
      } else {
        body.classList.remove("nav-open");
      }
    });
  });

  window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  });
});
