document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
  });

  const sections = document.querySelectorAll("section, footer");
  const navItems = document.querySelectorAll(".nav-item");
  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSections = entries.filter((entry) => entry.isIntersecting);

      if (visibleSections.length > 0) {
        let firstVisible = visibleSections[0].target.id;
        navItems.forEach((nav) => nav.classList.remove("active-nav"));
        document
          .querySelector(`.nav-item[href='#${firstVisible}']`)
          .classList.add("active-nav");
      }
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));

  const hoverSound = new Audio("../assets/sound/hover.mp3");
  hoverSound.volume = 0.5; // Decrease volume to 50%
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      hoverSound.currentTime = 0;
      hoverSound.play();
    });
  });
});
