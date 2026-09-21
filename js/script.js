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

  function closeMenu() {
    body.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("nav-open")) {
      closeMenu();
      toggle?.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (header && !header.contains(event.target)) closeMenu();
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
