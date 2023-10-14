import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-corner">
        <h1>Tishyo Saha</h1>
      </div>
      <div className="right-corner">
        <button>Work</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
