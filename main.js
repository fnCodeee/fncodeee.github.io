import LenisScrooling from "./src/libs/Lenis.js";
const app = document.getElementById("__app");
LenisScrooling(app);

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add("animate-fill");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach((bar) => observer.observe(bar));
});
