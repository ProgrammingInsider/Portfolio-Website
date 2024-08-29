import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
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
          {/* <h2>Contact Me</h2> */}
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" required />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" required />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-methods">
          {/* <h2>Contact Information</h2> */}
          <p><FaPhoneAlt /> +251922112208</p>
          <button onClick={() => window.location.href = 'tel:+251922112208'}>Call Me</button>
          <p><FaEnvelope /> amanuelabera46@gmail.com</p>
          <button onClick={() => window.location.href = 'mailto:amanuelabera46@gmail.com'}>Email Me</button>
          <p><FaTelegramPlane  /> @Aman_A2208</p>
          <button onClick={() => window.location.href = 'https://t.me/Aman_A2208'}>Telegram</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
