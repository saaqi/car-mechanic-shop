/**
 * @file src/js/testimonials.js
 * @description This file contains functions to for Setting up Alerts.
 */

// Array of testimonial objects
const alertBoxesData = [
  {
    url: `https://goo.gl/maps/zA9qfkUA6gyxb3Ff9`,
    img: `xavier_marin.webp`,
    name: `Xavier Marin`,
    body: `I brought my 2009 Toyota Highlander here with 239,000 miles for a Diagnostic after taking it to 3 other mechanics even paying twice to replace sensors, because that’s why they said. . Car Club Tire found multiple things wrong and showed dedication and patience with my vehicle to ensure it was fixed. The guys are honest, friendly, and understanding. They exceeded the service on my vehicle. I left with my vehicle with a smile. I need some other work done soon on suspension and my wife’s truck. I’m bringing my family’s vehicles here from now on. I’m happy with Car Club Tires. Thank you so much!`,
  },
  {
    url: `https://goo.gl/maps/gzSAfPAC8wQ1D2Rb9`,
    img: false,
    name: `Mubbaya Babar`,
    body: `Excellent and professional service 7 days a week. They are truly a blessing to the neighborhood.  Any make or model it doesn't matter, and they took care of me. Now I have a Mercedes, and they still take good care of me. 100% dependable very Professional work they did. I highly recommend this to everyone for their vehicle need. They are the best in Orange city thanks….`,
  },
  {
    url: `https://goo.gl/maps/XoiAT3zMgmoWBJBt7`,
    img: false,
    name: `Carlos Gonzalez`,
    body: `Good Staff with honesty. They explainde me everything before they did everything on my vehículo Most of the places lying by saying I need this and etc they showed me what was exactly wrong and fixed it in no time. other place try to get more money from me but car club team showed the exact part that needed. I highly recomend this place to everyone. You cant find honest place now a days very Hard. Again thank you so much for helping me and saved my car. I Will definatly coming back for all of my service. 10/10`,
  },
  {
    url: `https://goo.gl/maps/ria7TBqB4D7uDChx8`,
    img: `usman_shah.webp`,
    name: `Usman Shah`,
    body: `I was driving down to Miami and my car broke down in the evening. Car repair shops near me were closing and offered to assist the next morning. I was lucky enough to call this shop. If I remember correctly, the owner was Farhan, and he had my car fixed in no time. It was a wonderful experience. The team is amazing. They also offered complimentary snacks, hands down the best service ever.`,
  },
  {
    url: `https://maps.app.goo.gl/yaGPXqhh7JXkPeQK8`,
    img: false,
    name: `Alejandro Nuve`,
    body: `I had a great experience ay car club tire i went in for brakes ando rotor. The staff was very friendly ando welcoming from the momoent i walked in and they explained me very well which i apperciated as Someone doesnt know much about cars. I drove all the way from Orlando and it's worth it. The service was quick ando efficent and i was back on Road in no time.,My car feels mucho smoother to drive now. Overall, i highly recomend car club tire . They are very honest and prices was very good. Thanks and i Will be back`,
  },
  {
    url: `https://maps.app.goo.gl/Kh5UKYhqnJr9vhy59`,
    img: `Virag_Anna_Szolgyemy.webp`,
    name: `Virag Anna Szolgyemy`,
    body: `We were able to do a walk-in and get our alignment done right away. It took 45 mins from start to finish and it was only $60. All the staff was very friendly and helpful. It’s too bad I don’t live around here or else I would be a regular for sure :)`,
  },
  {
    url: `https://maps.app.goo.gl/TT472PqByJGpnUhh7`,
    img: false,
    name: `Francisco Alfredo`,
    body: `BEST SERVICE I’ve EVER GOT. I highly recommend this place for all your service needs. The staff are very knowledgeable and know what they are doing. They patiently listened and understood my concerns, and they explained all the process before proceeding.and the price was very good. I was very satisfied with their service and will definitely come again.thanks Shan for all the help.`,
  },
  {
    url: `https://goo.gl/maps/yAAVWdtiPJ9v8y5U7`,
    img: `Africans_In_Orlando.webp`,
    name: `Africans In Orlando`,
    body: `When you're looking for honest price, honest diagnostic, weekend service and great customer service, these guys are the best in the area. Shawn and Forhan are amazing professionals who will take good care of you and your car. I'll be coming here on a regular now 🙂 Happy Customer!`,
  },
  {
    url: `https://goo.gl/maps/P5FHwGYWsxGWWU3R7`,
    img: `Eddrina-Delmont.webp`,
    name: `Eddrina Delmont`,
    body: `Amazing amazing ! Fixed my breaks in no time. Customer service was excellent. Definitely recommend for anyone who doesn’t want to get ripped off or overpriced by other dealers. Come in and they will take care of you. Thank you so much Farhan for helping me out today and in a timely manner!`,
  },
  {
    url: `https://maps.app.goo.gl/6gwbvcAP8LdTyMnb6`,
    img: `Danielle_Marie.webp`,
    name: `Danielle Marie`,
    body: `I just bought a used vehicle and a day later turns out I need brakes. I found a Car Club Tire & auto on Groupon. I drove 51 minutes with no brakes just to get there. Thinking I just needed brake pads I was not financially prepared to afford much more than that. Turns out I need orders also. I'm a single mom and can't afford it. Everyone there was super helpful and did their best to help me and found the right option for my situation and I left with all 4 new brake pads and 2 new front rods. I won't be going anywhere else from now on. Everyone was so nice and very professional and treated me very kindly. Thank you so much 👍😊`,
  },
  {
    url: `https://goo.gl/maps/SJc9B8wmXW4ezHcF6`,
    img: `Lex_Scooter.webp`,
    name: `Lex Scooter`,
    body: `I will always be back to this location for service on my vehicles . I read a review for them that read "this location restored their faith in humanity" & I couldn't agree more. Thank you for doing ,all y'all can do ,for your customers. Fair prices & they gave me a fair quote over the phone , WITH EASE, after calling around for days to find the best deal on brakes .. I went the next day , around a general time i thought I could make it & it was one of the best experiences I've had at an auto repair shop. Can't thank them enough super trust worthy, Will be !!`,
  },
  {
    url: `https://goo.gl/maps/hDdZ7p2JEXzQrLyB9`,
    img: `Mercy_Ares.webp`,
    name: `Mercy Ares`,
    body: `Found this place on Groupon, they take appts & walk-ins. Arrived and was serviced immediately, the staff employees are professional and courteous. Amazing customer service experience. Super clean facility with an indoor AC comfortable waiting area, very clean bathrooms and free coffee! Was well worth the over an hour drive to get here but I'll definitely be returning even without Groupon to fix other issues on both my minivan & suv!`,
  },
  {
    url: `https://maps.app.goo.gl/ZrkBPvtVE1q8PyoA7`,
    img: false,
    name: `Sandra Jordan`,
    body: `My fiance was told about how "Great" Car Club Tire is by a co-worker and how Reasonable and Professional they were. I got my struts done on my car, the price was very reasonable. We took my car that morning and they finished the work by evening. Thank you for a Great job👍🏽 …`,
  },
  {
    url: `https://maps.app.goo.gl/kA71gK8pm4hP5vtz9`,
    img: false,
    name: `Shalandra Davis`,
    body: `I have a Toyota Prius, which is a hybrid vehicle. The battery was no good the owner of the shop and his brother fixed my vehicle in record timing. They were very fast very efficient and I highly recommend the services. I will always use them as my mechanics, the honesty and prices you can’t beat.`,
  },
  {
    url: `https://goo.gl/maps/qARRRYUnj4GqAedLA`,
    img: false,
    name: `Maybelline Sierra`,
    body: `I needed 4 new tires, a wheel alignment and rear brake pads and rotors for my 2018 Honda Accord. I called at least 6 places for quotes and Car Club gave me the best deal by far. I called them back several times with new questions while I was still shopping around for price quotes and each time, they were super patien+t and kind with me. When I finally decided to go with them, they got me in for service the very next day and did a great job! Now we will be bringing them our second car as well for some needed routine maintenance. I highly recommend them!`,
  },
]

const reviewerPics = import.meta.glob('../assets/media/reviewers/**/*', { eager: true });
import fallBackImg from '../assets/media/cc-logo.svg';

const aletBoxHtml = alertBoxesData.map((rv) => {
  const {
    url = '',
    img = '',
    name = '',
    body = ''
  } = rv;
  const coverImage = reviewerPics[`../assets/media/reviewers/${img}`]?.default || fallBackImg;
  const avatar = img
    ? `<img decoding="async" loading="lazy" width="26" height="26" src="${coverImage}" alt="Google Reviewer's Photo">`
    : `<i class='bx bx-user p-1 border rounded-circle'></i>`

  const output =
  `<li class="glide__slide h-auto">`+
      `<figure class="h-100">`+
        `<figcaption class="text-center text-md-start mb-2 fw-medium">`+
          `<a href="${url}" title="5 star Google Review" target="_blank" rel="nofollow">`+
            `${avatar} ${name} &#8212; <i class="bx bxl-google"></i> <i class="bx bx-map-alt"></i>`+
          `</a>`+
        `</figcaption>`+
        `<div class="star-ratings mb-2 text-center text-md-start">`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
          `<i class="bxs-star bx"></i>`+
        `</div>`+
        `<blockquote class="blockquote">"${body}"</blockquote>`+
      `</figure>`+
    `</li>`

  return output;
});

const aletBoxesElement = document.getElementById(`review-slides`)
if (aletBoxesElement) aletBoxesElement.innerHTML = aletBoxHtml.join(``)
