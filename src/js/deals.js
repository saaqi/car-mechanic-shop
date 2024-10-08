// Setup Alert Boxes
const alertBoxesData = [
  {
    body: `We are Open 7 days a week.`,
  },
  {
    body: `Both Appointments and Walkins are Welcome.`,
  },
  {
    body: `Special Discounts for Veterans & Military Personel, Students, and Senior Citizens.`,
  },
];
const alertBoxHtml = alertBoxesData.map((bx) => {
  const body = bx.body ? bx.body : ``
  return `<li>${body}</li>`
});
const alertBoxesElement = document.querySelector("#alert-boxes .card-body")
if (alertBoxesElement) alertBoxesElement.innerHTML = alertBoxHtml.join("")







// Setup Deals Slides
const dealsSlidesData = [
  {
    icon: `<i class="icon bx bx-wind display-6"></i>`,
    title: `AC System Flush, Vacuum & Recharge Freon for $119.99!`,
    body: `Beat the heat with our top-notch service! Get an AC System Flush, Vacuum, and Recharge Freon for just $119.99.`,
  },
  {
    icon: `<i class="icon bx bxs-car-wash display-6"></i>`,
    title: `Synthetic Oil Change for just $49.99`,
    body: `Get your car running smoothly with our oil change specials! Synthetic oil change for $49.99. Quality service at great prices!`,
  },
  {
    icon: `<i class="icon bx bxs-car-wash display-6"></i>`,
    title: `Conventional Oil Change for just $18.99`,
    body: `Get your car running smoothly with our oil change specials! Conventional oil change for $18.99. Quality service at great prices!`,
  },
  {
    icon: `<i class="icon bx bx-stop-circle display-6"></i>`,
    title: `Brake Pads starting at just $79.99`,
    body: `Enhance your vehicle's safety with our limited-time brake pads deal! Expert replacements, special pricing. Act now, drive confidently!`,
  },
  {
    icon: `<i class="icon bx bx-color display-6"></i>`,
    title: `Wheel Alignment starting at just $49.99`,
    body: `Wheel alignment for $49.99 & up! Limited time offer. Improved handling and fuel efficiency. Visit us today!`,
  },
  {
    icon: `<i class="icon bx bxs-wrench display-6"></i>`,
    title: `Full Tune Up Starting from just $249.99`,
    body: `Tune up starting at just $249.99! Limited time offer. Optimize performance and reliability. Visit us today!`,
  },
  {
    icon: `<i class="icon bx bxs-color display-6"></i>`,
    title: `4 New Tires from $399.99 & Up`,
    body: `Get rolling with a fantastic deal! 4 new tires for $399.99 & free wheel alignment. Limited time offer. Visit us now!`,
  },
  {
    icon: `<i class="icon bx bxs-color display-6"></i>`,
    title: `4 Used Tires from $199.99 & Up`,
    body: `Get road-ready with our special deal! 4 used tires for $199.99 & free wheel alignment. Limited time offer. Visit us now!`,
  },
  {
    icon: `<i class="icon bx bxs-car-garage display-6"></i>`,
    title: `FREE Check Engine Light diagnostics.`,
    body: `Worried about your check engine light? Get a FREE diagnostic from our expert technicians and drive with confidence!`,
  },
  {
    icon: `<i class="icon bx bxs-car-garage display-6"></i>`,
    title: `Free Vehicle Inspection with any service.`,
    body: `Comprehensive vehicle inspection for FREE with any service! Limited time offer. Visit us today!`,
  },
];
const dealsSlidesHtml = dealsSlidesData.map((sl) => {
  const output =
    `<li class="glide__slide h-auto">`+
      `<div class="ag-courses_item h-100 bg-primary p-3 text-light rounded">`+
        `<div class="ag-courses-item_bg"></div>`+
        `<div class="ag-courses-item_title fs-5 fw-medium mb-2">`+
          `<div>${sl.icon}</div>`+
          `<div>${sl.title}</div>`+
        `</div>`+
        `<div class="ag-course-body">${sl.body}</div>`+
      `</div>`+
    `</li>`
  return output
});
const dealsSlidesElement = document.getElementById("deals-slides")
if (dealsSlidesElement) dealsSlidesElement.innerHTML = dealsSlidesHtml.join("")
