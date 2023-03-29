
// Top link animations
window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        document.querySelector('.go-top').classList.add('fixed');
    } else {
        document.querySelector('.go-top').classList.remove('fixed');
    }
});




 
// JavaScript form validation
const form = document.getElementById("wpforms-form-7");
form.addEventListener("submit", function(event) {
    const nameInput = document.getElementById("name");
    // const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    let isValid = true;

    // Validate name input
    if (nameInput.value === "") {
      isValid = false;
      nameInput.setCustomValidity("Please enter your name.");
    } else {
      nameInput.setCustomValidity("");
    }

    // Validate email input
    if (emailInput.value === "") {
      isValid = false;
      emailInput.setCustomValidity("Please enter your email address.");
    } else if (!emailInput.checkValidity()) {
      isValid = false;
      emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
      emailInput.setCustomValidity("");
    }

    // Validate message input
    if (messageInput.value === "") {
      isValid = false;
      messageInput.setCustomValidity("Please enter a message.");
    } else {
      messageInput.setCustomValidity("");
    }

    // Submit form if all inputs are valid
    if (!isValid) {
      event.preventDefault();
    }
});

// JavaScript form submission
form.addEventListener("submit", function(event) {
    const nameInput = document.getElementById("wpforms-7-field_0");
    const emailInput = document.getElementById("wpforms-7-field_1");
    const messageInput = document.getElementById("wpforms-7-field_2");
    const contactnumber = document.getElementById("wpforms-7-field_7");
    const makemodel = document.getElementById("wpforms-7-field_3");
    const receiveEmail = "carclubtire@gmail.com"
    const emailButton = document.querySelector('button.wpforms-submit');

    // Compose email message
    const subject = `[Contact-Form] ${nameInput.value}`;
    const body = `${messageInput.value}\n\n${nameInput.value}\n${contactnumber.value}\n${makemodel.value}\n${emailInput.value}`;

    // Open default email app and fill in appropriate fields
    const mailtoUrl = `mailto:${encodeURIComponent(receiveEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Open Email client on click
    window.open(mailtoUrl);

    // Prevent default form submission
    event.preventDefault();
});




// Show current year
document.getElementById("year").innerHTML = new Date().getFullYear();









// animate counters
function countWhenVisible(element, targetCount, speed) {
  let hasCounted = false;
  let startTime = null;
  let observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !hasCounted) {
      hasCounted = true;
      startTime = performance.now();
      let count = 0;
      let duration = speed;
      let interval = setInterval(() => {
        let elapsedTime = performance.now() - startTime;
        let progress = elapsedTime / duration;
        if (progress >= 1) {
          clearInterval(interval);
          element.innerHTML = targetCount;
        } else {
          count = Math.floor(progress * targetCount);
          element.innerHTML = count;
        }
      }, 20);
    }
  });
  observer.observe(element);
}
countWhenVisible(document.querySelector(".elementor-element-f06ee63 .elementor-counter-number"), 5, 1000);
countWhenVisible(document.querySelector(".elementor-element-7dc2ad3 .elementor-counter-number"), 640, 1000);
countWhenVisible(document.querySelector(".elementor-element-d8ba9d1 .elementor-counter-number"), 2200, 2000);
countWhenVisible(document.querySelector(".elementor-element-8c345b6 .elementor-counter-number"), 5000, 3000);




// HIDE PRELOADER
document.getElementById("atf-preloader").classList.add('preloader-hide');

window.onload = setTimeout( function() {
  document.querySelector('.preloader-hide').style.display = 'none';
}, 1000);
