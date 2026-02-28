/**
 * @file glide.js
 * @description This file initializes and configures Glide.js carousels for the "deals" and "services" sections of the webpage.
 */

// Import Glide.js CSS files
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

// Import Glide.js library
import Glide from "@glidejs/glide";

// Initialize and configure the Glide.js carousel for the "deals" section
new Glide(".glide-deals", {
  type: "carousel",
  perView: 3,
  swipeThreshold: 40,
  dragThreshold: 60,
  animationDuration: 250,
  peek: 40,
  breakpoints: {
    992: {
      perView: 1,
    },
  },
}).mount();

// Initialize and configure the Glide.js carousel for the "services" section
new Glide(".glide-services", {
  type: "carousel",
  perView: 3,
  swipeThreshold: 40,
  dragThreshold: 60,
  animationDuration: 250,
  peek: 40,
  breakpoints: {
    // 992: {
    //   perView: 1,
    // },
    768: {
      perView: 1,
    },
  },
}).mount();

// Initialize and configure the Glide.js carousel for the "reviews" section
new Glide(".glide-reviews", {
  type: "carousel",
  perView: 3,
  swipeThreshold: 40,
  dragThreshold: 60,
  animationDuration: 250,
  breakpoints: {
    992: {
      perView: 2,
    },
    768: {
      perView: 1,
    },
  },
}).mount();
