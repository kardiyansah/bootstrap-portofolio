// Active Link
const links = Array.from(document.querySelectorAll(".nav-link"));
document.body.addEventListener("click", function (e) {
  if (e.target.className == "nav-link") {
    links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  }
});
