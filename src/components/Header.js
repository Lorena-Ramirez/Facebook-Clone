import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header___left">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" 
        alt="Facebook Logo"
        />
      </div>
      <div className="header___middle"></div>
      <div className="header___right"></div>
    </div>
  )
}

export default Header;
