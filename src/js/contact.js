/**
 * @file contact.js
 * @description This file contains functions to determine the store status based on the current date and time,
 *  update the store status in real-time, and handle the contact form submission with validation.
 */


// Function to determine the store status (open or closed) based on the current date and time
/**
 * @function storeStatus
 * @description Determines the store status (open or closed) based on the current date and time.
 * @returns {string} The formatted store status message.
 */
function storeStatus() {
  const timeZone = "America/New_York";
  const now = new Date();
  const localTime = new Date(now.toLocaleString("en-US", { timeZone: timeZone }));
  const options = { weekday: "long" };
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timeZone,
  });
  const orangeCityDayToday = new Intl.DateTimeFormat("en-US", options).format(localTime);
  const outputDay = `${orangeCityDayToday} ${formattedTime}`;
  const hours = localTime.getHours();
  const dayOfWeek = localTime.toLocaleString("en-US", { timeZone, weekday: "long" });

  let outputTime;

  if (
    (dayOfWeek === "Sunday" && hours >= 9 && hours < 17) ||
    (dayOfWeek !== "Sunday" && hours >= 8 && hours < 19)
  ) {
    outputTime = '<span class="open text-success fw-bold">Open</span> come on down';
  } else if (
    (dayOfWeek === "Sunday" && hours >= 17 && hours < 24) ||
    (dayOfWeek !== "Sunday" && hours >= 19 && hours < 24)
  ) {
    outputTime = '<span class="closed text-danger fw-bold">Closed</span> at the moment see you tomorrow. &#128578;';
  } else if (hours >= 0 && (dayOfWeek === "Sunday" ? hours < 8 : hours < 9)) {
    if (dayOfWeek === "Sunday" && hours < 8) {
      outputTime = '<span class="closed text-danger fw-bold">Closed</span> at the moment see you at 08:00 AM. &#128564;';
    } else if (dayOfWeek !== "Sunday" && hours < 9) {
      outputTime = '<span class="closed text-danger fw-bold">Closed</span> at the moment see you at 09:00 AM. &#128564;';
    }
  }

  return `It is ${outputDay}, We are ${outputTime}`;
}

// Function to update the store status in real-time
/**
 * @function updateStatusRealtime
 * @description Updates the store status in real-time by modifying the innerHTML of the element with ID "storestatus".
 */
function updateStatusRealtime() {
  document.getElementById("storestatus").innerHTML = `${storeStatus()}`;
}

// Initial call to update the store status
updateStatusRealtime();

// Set an interval to update the store status every 15 seconds
setInterval(updateStatusRealtime, 15000);








// Import Bootstrap's alert component
import "bootstrap/js/dist/alert.js";

// Define the form ID and get the form element
const formId = 'homepage-contact-form';
const contactForm = document.getElementById(formId);

if (contactForm) {
  const nameInput = document.querySelector('#' + formId + ' #contact-form-name');
  const emailInput = document.querySelector('#' + formId + ' #contact-form-email');
  const messageInput = document.querySelector('#' + formId + ' #contact-form-message');

  // Function to validate email format using a regular expression
  /**
   * @function validateEmail
   * @description Validates the email format using a regular expression.
   * @param {string} email - The email address to validate.
   * @returns {boolean} True if the email format is valid, otherwise false.
   */
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const alertPlaceholder = document.querySelector('#' + formId + ' #errorAlerts');

  // Function to append an alert message to the alert placeholder
  /**
   * @function appendAlert
   * @description Appends an alert message to the alert placeholder.
   * @param {string} message - The alert message to display.
   */
  const appendAlert = message => {
    alertPlaceholder.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `<div>${message}</div>`,
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('');
  }

  // Function to validate the form inputs
  /**
   * @function validateForm
   * @description Validates the form inputs.
   * @returns {boolean} True if all form inputs are valid, otherwise false.
   */
  const validateForm = () => {
    if (nameInput.value.trim() === '') {
      appendAlert('Please enter your name');
      return false;
    }
    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
      appendAlert('Please enter a valid email address.');
      return false;
    }
    if (messageInput.value.trim() === '') {
      appendAlert('Please enter a message.');
      return false;
    }
    return true;
  }

  // Add an event listener for form submission
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const alertDismiss = this.querySelectorAll('#' + formId + ' #errorAlerts > *');
    if (alertDismiss) {
      alertDismiss.forEach(e => {
        e.remove();
      });
    }

    if (!validateForm()) {
      return false;
    } else {
      const receiveEmail = "carclubtire@gmail.com";
      const subject = `[Contact-Form] ${nameInput.value}`;
      const body = `${messageInput.value}\n\n${nameInput.value}\n${emailInput.value}`;
      const mailtoUrl = `mailto:${encodeURIComponent(receiveEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl);
    }
  });
}