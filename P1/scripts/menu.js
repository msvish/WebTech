// Hamburger Menu JavaScript with Two-tier Navigation
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("main-nav");
  const dropdowns = document.querySelectorAll(".dropdown");
  const body = document.body;

  console.log("Menu script loaded");
  console.log("Hamburger:", hamburger);
  console.log("Main nav:", mainNav);
  console.log("Dropdowns:", dropdowns);

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", function () {
      console.log("Hamburger clicked");
      hamburger.classList.toggle("active");
      mainNav.classList.toggle("active");
      body.classList.toggle("menu-open");
    });

    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        if (link.parentElement.classList.contains("dropdown")) {
          console.log("Dropdown parent clicked:", link.textContent);
          return;
        }

        hamburger.classList.remove("active");
        mainNav.classList.remove("active");
        body.classList.remove("menu-open");
      });
    });

    document.addEventListener("click", function (event) {
      if (
        !hamburger.contains(event.target) &&
        !mainNav.contains(event.target)
      ) {
        hamburger.classList.remove("active");
        mainNav.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });
  }

  dropdowns.forEach((dropdown) => {
    const dropdownLink = dropdown.querySelector("a");
    const dropdownMenu = dropdown.querySelector(".nav-tier-2");

    console.log(
      "Setting up dropdown:",
      dropdownLink?.textContent,
      dropdownMenu
    );

    if (dropdownLink && dropdownMenu) {
      dropdownLink.addEventListener("click", function (e) {
        console.log("Dropdown clicked:", dropdownLink.textContent);

        e.preventDefault();

        dropdown.classList.toggle("active");
        console.log("Dropdown active:", dropdown.classList.contains("active"));

        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove("active");
          }
        });
      });
    }
  });

  document.addEventListener("click", function (event) {
    const isClickInsideDropdown = Array.from(dropdowns).some((dropdown) =>
      dropdown.contains(event.target)
    );

    if (!isClickInsideDropdown) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      hamburger.classList.remove("active");
      mainNav.classList.remove("active");
      body.classList.remove("menu-open");
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });
});
