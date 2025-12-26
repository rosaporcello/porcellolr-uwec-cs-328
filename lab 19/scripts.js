
function toggleNav() {
  const targets = document.querySelectorAll(".toggle-nav");
  targets.forEach((el) => el.classList.toggle("open"));
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay.toggle-nav");
  if (overlay) {
    overlay.addEventListener("click", toggleNav);
  }

  const nav = document.querySelector("nav.toggle-nav");
  if (nav) {
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        const targets = document.querySelectorAll(".toggle-nav");
        targets.forEach((el) => el.classList.remove("open"));
      });
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const targets = document.querySelectorAll(".toggle-nav");
      targets.forEach((el) => el.classList.remove("open"));
    }
  });
});
