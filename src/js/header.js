/**
 * @file header.js
 * @description This file contains functions to for the header section of the page.
 */

// Navigation
/* ## Set Mobile Navigation stuff
--------------------------------------------- */

// Selecting the element
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav.nav-primary");

/**
 * Toggles the visibility of the site navigation and updates the menu button state.
 *
 * This function is triggered when the menu button is clicked. It performs the following actions:
 * - Toggles the 'show' class on the navigation element to show/hide the navigation.
 * - Toggles the 'activated' and 'bx-x' classes on the menu button to update its appearance.
 * - Toggles the 'aria-expanded' attribute on the menu button to indicate whether the menu is expanded.
 * - Toggles the 'aria-pressed' attribute on the menu button to indicate whether the button is pressed.
 */
menuButton.addEventListener("click", function () {
  // Show site navigation
  navigation.classList.toggle("show");

  // Toggle activated class
  menuButton.classList.toggle("activated");
  menuButton.classList.toggle("bx-x");

  // Toggle attrs
  if (menuButton.getAttribute("aria-expanded") === "true") {
    menuButton.setAttribute("aria-expanded", "false");
  } else {
    menuButton.setAttribute("aria-expanded", "true");
  }

  if (menuButton.getAttribute("aria-pressed") === "true") {
    menuButton.setAttribute("aria-pressed", "false");
  } else {
    menuButton.setAttribute("aria-pressed", "true");
  }
});


/**
 * Adds click event listeners to menu links to collapse the navigation menu.
 *
 * This functionality ensures that when any of the specified links are clicked, the main navigation
 * menu is hidden and the menu button state is reset.
 */

// Collapse menu on click
const menuLinks = document.querySelectorAll(
  ".primary-menu .menu-item a, a.top-link, .site-title a"
);

menuLinks.forEach((eachLink) => {
  eachLink.addEventListener("click", function () {
    // Hide Main Navigation on click
    navigation.classList.remove("show");

    // Remove activated class and attributes from menu-toggle button
    menuButton.classList.remove("activated");
    menuButton.classList.remove("bx-x");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-pressed", "false");
  });
});

/* ## Add dark claass to the header and top link
--------------------------------------------- */
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
});






/* ## SETUP SCROLL SPY
--------------------------------------------- */
let menuSection = document.querySelectorAll(".nav-primary li.menu-item a");
// for clickable event
menuSection.forEach((v) => {
  v.onclick = () => {
    setTimeout(() => {
      menuSection.forEach((j) => j.classList.remove("active"));
      v.classList.add("active");
    }, 300);
  };
});
// for window scrolldown event
window.onscroll = () => {
  let mainSection = document.querySelectorAll(
    "main.entry-content section.section"
  );

  mainSection.forEach((v, i) => {
    let rect = v.getBoundingClientRect().y;

    if (rect < window.innerHeight - window.innerHeight + 100) {
      /* caculate till section reaches to top */
      menuSection.forEach((v) => v.classList.remove("active"));
      menuSection[i].classList.add("active");
    }
  });
};

// NATIVE JAVASCRIPT WAY
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView();
//     });
// });

