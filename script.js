document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  const navButtons = document.getElementById("nav-buttons");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navButtons.classList.toggle("active");
  });
});


