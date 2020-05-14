import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <a href="/">
        <img src="https://github.com/maximus202/contestphyte-app/blob/223d1478b020322c06713c913fb4d7cee41a010c/public/contestphytelogo.png?raw=true" alt="Contestphyte logo." />
      </a>
      <img src="https://github.com/maximus202/contestphyte-app/blob/master/public/menu.png?raw=true" alt="Menu." className="menu-icon" />
    </nav>
  );
}

export default NavBar;
