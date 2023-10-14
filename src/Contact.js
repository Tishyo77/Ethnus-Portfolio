import React from 'react';
import './Contact.css'; 

const Contact = () => {
  const gmailLink = 'mailto:tishyo77@gmail.com';

  return (
    <div className="contact-container">
      <div className="circular-image">
        <img src={require('./Profile.jpg')} alt="Tishyo Saha" />
      </div>
      <p className="Hello">Say Hello.</p>
      <a href={gmailLink} className="gmail-button">
        tishyo77@gmail.com
      </a>
    </div>
  );
};

export default Contact;
