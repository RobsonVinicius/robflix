import React from 'react';
import Logo from '../../assets/img/robflix-logo.png';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Robflix Logo" />
      </a>
    </nav>
  );
}

export default Menu; //super 