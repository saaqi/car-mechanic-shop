/**
 * @file src/js/hidepreloader.js
 * @description This file contains functions to for the hiding the preloader after the page is loaded.
 */

// Hide Preloader ------------
const preloader = document.getElementById("loader-wrapper");

/**
 * Hides the preloader element after a delay of 2 seconds once the window has loaded.
 * This function sets the `hidden` attribute and `display` style of the preloader element to `none`
 * after a delay of 2 seconds.
 */
window.onload = setTimeout(function () {
  if (preloader) preloader.hidden = true;
  if (preloader) preloader.style.display = "none";
}, 2000);

/**
 * Adds the 'hide-preloader' class to the preloader element once the window has loaded.
 * This function ensures that the preloader element is hidden by adding the 'hide-preloader' class
 * to it when the window has finished loading.
 */
window.onload = function () {
  preloader.classList.add("hide-preloader");
};