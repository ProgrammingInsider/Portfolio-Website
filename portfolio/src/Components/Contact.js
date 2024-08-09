// import React from 'react'

// // Images
// import Location from "../Assets/img/maplocation.png";
// import Mail from "../Assets/img/Mail.png";
// import Telegram from "../Assets/img/Telegramcontact.png";


// const Contact = () => {
//   return <>
//     <div className='sectionContainer'>
//          <h1 className='sectionName'>Contact</h1>
//          <h1 className='sectionHeadline'>Don't be shy! Hit me up! 👇</h1>

//          <div className='contactMethodContainer'>
//           <div className='contactMethod'>

//              <img src={Location} alt='Location' className='contactIcon'/>

//              <div className='contactDetail'>
//                <h1 className='contactName'>Location</h1>
//                <p className='contactPara'>Addis Ababa, Ethiopia</p>
//              </div>
//           </div>

//           <div className='contactMethod'>
            
//             <img src={Mail} alt='mail' className='contactIcon'/>

//             <div className='contactDetail'>
//               <h1 className='contactName'>mail</h1>
//               <p className='contactPara'>amanuelabera46@gmail.com</p>
//             </div>
//          </div>

//          <div className='contactMethod'>
            
//             <img src={Telegram} alt='telegram' className='contactIcon'/>

//             <div className='contactDetail'>
//               <h1 className='contactName'>telegram</h1>
//               <p className='contactPara'>@Aman_A2208</p>
//             </div>
//          </div>

//          </div>
//     </div>
//   </>
// }

// export default Contact

import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {

  // const sendEmail = (e) => {
    // e.preventDefault();

    // emailjs.sendForm(
    //   'service_5xugtb3', 
    //   'template_zb6wi6a', 
    //   e.target, 
    //   '6MTaFZZLc-tciOZKY'
    // )
    // .then((result) => {
    //     alert('Message sent successfully!');
    // }, (error) => {
    //   console.log(error);
    //     alert('Failed to send the message, please try again.');
    // });
    // e.target.reset();
// }
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5xugtb3', 'template_zb6wi6a', form.current, {
        publicKey: '6MTaFZZLc-tciOZKY',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Failed to send the message, please try again.')
        },
      );
  };

  return (
    // <div className="contact-container">
    <div className='sectionContainer'>
        <h1 className='sectionName'>Contact</h1>
        <h1 className='sectionHeadline'>Don't be shy! Hit me up! 👇</h1>
      <div className='contactContainer'>
        <div className="form-container">
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Your Subject" required />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Your Message" required />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-methods">
          <h2>Contact Information</h2>
          <p><FaPhoneAlt /> +251922112208</p>
          <button onClick={() => window.location.href = 'tel:+251922112208'}>Call Me</button>
          <p><FaEnvelope /> amanuelabera46@gmail.com</p>
          <button onClick={() => window.location.href = 'mailto:amanuelabera46@gmail.com'}>Email</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
