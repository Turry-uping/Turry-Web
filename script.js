const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveNav = () => {
  const current = sections.reduce((active, section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 140 ? section : active;
  }, sections[0]);

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("is-active", isActive);
  });
};

window.addEventListener("scroll", setActiveNav, { passive: true });
window.addEventListener("load", setActiveNav);

const football = document.querySelector(".football-trigger");

if (football) {
  football.addEventListener("click", () => {
    football.classList.remove("is-shooting");
    window.requestAnimationFrame(() => {
      football.classList.add("is-shooting");
    });
  });

  football.addEventListener("animationend", () => {
    football.classList.remove("is-shooting");
  });
}

const status = document.querySelector(".copy-status");
const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      status.textContent = `已复制：${value}`;
    } catch {
      status.textContent = `复制失败，请手动复制：${value}`;
    }
  });
});
