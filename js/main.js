// Shared site functionality
function toggleTheme() {
  document.body.classList.toggle("light");
}

// Scroll progress bar
const portfolioSide = document.getElementById("portfolioSide");
const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
  if (!portfolioSide || !scrollProgress) return;
  const scrollTop = portfolioSide.scrollTop;
  const scrollHeight = portfolioSide.scrollHeight - portfolioSide.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = progress + "%";

  // Update active nav link
  const sections = [
    "hero",
    "quick-bio",
    "highlights",
    "education",
    "full-bio",
    "philosophy",
    "interests",
    "experience-full",
    "projects-full",
    "writing",
    "contact-full",
    "locations",
  ];
  let current = "";
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && portfolioSide.scrollTop >= el.offsetTop - 120) {
      current = id;
    }
  }
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === "index.html" && current === "hero")
      link.classList.add("active");
    else if (
      href === "about.html" &&
      (current === "full-bio" ||
        current === "philosophy" ||
        current === "interests")
    )
      link.classList.add("active");
    else if (
      href === "work.html" &&
      (current === "experience-full" ||
        current === "projects-full" ||
        current === "writing")
    )
      link.classList.add("active");
    else if (
      href === "contact.html" &&
      (current === "contact-full" || current === "locations")
    )
      link.classList.add("active");
    else link.classList.remove("active");
  });
}

if (portfolioSide) {
  portfolioSide.addEventListener("scroll", updateScrollProgress);
  updateScrollProgress();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target && portfolioSide) {
      portfolioSide.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Ensure iPhone emulator works on page load
document.addEventListener("DOMContentLoaded", function () {
  if (typeof renderHomeScreen === "function") renderHomeScreen();
  if (typeof updateClock === "function") updateClock();
});
