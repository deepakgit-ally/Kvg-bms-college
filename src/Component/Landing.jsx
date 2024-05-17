// import React from 'react'
// // import image1 from "../Assets/Image/WhatsApp Image 2024-05-13 at 19.05.08_262f5424.jpg"
// // import Image2 from "../Assets/Image/Untitled-1.jpg"
// // import image3 from "../Assets/Image/WhatsApp Image 2024-05-13 at 19.05.08_75c3c4e4.jpg"
// import image4 from "../Assets/Image/Ayurveda.jpg"


// function Landing() {
//   return (
 
//   <section id="hero" className="hero section">

//   <img src={image4} alt="image3" data-aos="fade-in"/>

//   <div className="container">
//     <h2 data-aos="fade-up" data-aos-delay="100" className="">
//       {''}
//       Learning Today,<br/>Leading Tomorrow</h2>
//     <p data-aos="fade-up" data-aos-delay="200">We are No1 college in Ayurveda</p>
//     <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
//       <a href="courses.html" className="btn-get-started">Get Started</a>
//     </div>
//   </div>

// </section>
//   )
// }

// export default Landing

import React, { useEffect } from 'react';
import image4 from "../Assets/Image/Ayurveda.jpg";


function Landing() {
  useEffect(() => {
    const text = document.querySelector('.landing-text');
    const textContent = text.textContent;
    text.innerHTML = ''; // Clear the text content

    // Split the text content into individual characters and wrap each character in a span element
    textContent.split('').forEach((char, index) => {
      const character = char === ' ' ? '&nbsp;' : char; // Preserve spaces
      const characterSpan = document.createElement('span');
      characterSpan.innerHTML = character;
      characterSpan.style.animationDelay = `${50 * index}ms`; // Adjust animation delay as needed
      text.appendChild(characterSpan);
    });
  }, []);

  return (
    <section id="hero" className="hero section">
      <img src={image4} alt="image3" data-aos="fade-in"/>
      <div className="container">
        <h2 className="landing-text" data-aos="fade-up" data-aos-delay="100">
          {/* Placeholder text for initial layout */}
          Learning Today,<br/>Leading Tomorrow
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">We are No1 college in Ayurveda</p>
        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <a href="courses.html" className="btn-get-started">Get Started</a>
        </div>
      </div>
    </section>
  );
}

export default Landing;

