// Active Link
const links = Array.from(document.querySelectorAll(".nav-link"));
document.body.addEventListener("click", function (e) {
  if (e.target.className == "nav-link") {
    links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  }
});

// AOS for about section
const aboutPages = document.querySelectorAll("#about .container > div:last-child > div");
aboutPages.forEach((page, i) => {
  page.dataset.aosDelay = 250 * (i + 1);
  page.dataset.aosDuration = 800;
});

// AOS for projects section
const projectCards = document.querySelectorAll("#projects .container > div:last-child > div");

projectCards.forEach((card, i) => {
  card.dataset.aosDelay = 100 * (i + 1);
  card.dataset.aosDuration = 800;
});

// AOS for gallery section
const galleryImages = document.querySelectorAll("#gallery .container > div:last-child > div");

galleryImages.forEach((img, i) => {
  img.dataset.aos = "fade-down";
  img.dataset.aosDelay = 50 * (i + 1);
  img.dataset.aosDuration = 900;
});
