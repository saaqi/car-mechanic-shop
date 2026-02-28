/**
 * @file footer.js
 * @description This file contains a script to display the current year in an HTML element with the ID "year".
 */

/**
 * @description Sets the innerHTML of the element with ID "year" to the current year.
 */
document.getElementById("year").innerHTML = new Date().getFullYear();