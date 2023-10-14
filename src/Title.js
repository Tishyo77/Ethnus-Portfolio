import React from 'react';
import './Title.css';

const Title = () => 
{
  return (
    <div className="title-container">
      <div className="text-container">
        <div className="text">
          <p className="small-text">Heya, I'm Tishyo Saha</p>
          <p className="large-text">Front-End and Game Developer</p>
        </div>
        <div className="image-container">
          <img
            src={require('./Profile.jpg')}
            alt="Tishyo Saha"
            className="circular-image"
          />
        </div>
      </div>
      <div className="quote-container">
        <p className="quote">
          "Design creates culture. Culture shapes values. Values determine the future."
        </p>
        <p className="author">– Robert L. Peters</p>
      </div>
    </div>
  );
};

export default Title;
