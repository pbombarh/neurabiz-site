document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("nb-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById("nb-nav-toggle");
  const nav = document.querySelector(".nb-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nb-nav-open");
    });
  }
});
