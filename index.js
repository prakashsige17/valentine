// Floating "No" Button
function moveNoButton() {
  const btn = document.getElementById("noBtn");
  const container = btn.parentElement;

  // Get dimensions
  const containerRect = container.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();

  // Calculate max positions (keep button in view)
  const maxX = containerRect.width - btnRect.width - 40;
  const maxY = containerRect.height / 2;

  // Random position
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY - maxY / 2;

  btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// "Yes" Button Handler
function handleYes() {
  const modal = document.getElementById("auth-modal");
  const body = document.getElementById("main-body");
  // const video = document.getElementById("loveVideo");

  // Play video
  // if (video) {
  //   video.play().catch((error) => {
  //     console.log("Video playback:", error);
  //   });
  // }

  // Fade out modal
  modal.style.opacity = "0";

  setTimeout(() => {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }, 600);
}

// Smooth Scroll
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// Parallax effect on banner (optional enhancement)
window.addEventListener("scroll", () => {
  const banner = document.querySelector(".banner");
  if (banner) {
    const scrolled = window.pageYOffset;
    banner.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
/* ============================================
   GENERATE ROMANTIC PARTICLES
============================================ */

const bg = document.querySelector(".romantic-bg");

function createElement(className, sizeRange, durationRange) {
  const el = document.createElement("div");
  el.classList.add(className);

  const size = Math.random() * sizeRange + 10;
  el.style.width = size + "px";
  el.style.height = size + "px";

  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = Math.random() * durationRange + 8 + "s";

  bg.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 15000);
}

// Create hearts
setInterval(() => {
  createElement("heart", 15, 10);
}, 800);

// Create sparkles
setInterval(() => {
  createElement("sparkle", 3, 6);
}, 300);

// Create bubbles
setInterval(() => {
  createElement("bubble", 25, 12);
}, 2000);

const heroParticles = document.querySelector(".hero-particles");

function createHeroLight() {
  const light = document.createElement("span");
  light.style.left = Math.random() * 100 + "vw";
  light.style.animationDuration = Math.random() * 8 + 6 + "s";
  heroParticles.appendChild(light);

  setTimeout(() => light.remove(), 14000);
}

setInterval(createHeroLight, 500);
