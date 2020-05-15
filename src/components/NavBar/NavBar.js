import React, { useState } from 'react';
import Modal from 'react-modal';
import './NavBar.css';

Modal.setAppElement('#root');

function NavBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: '',
      bottom: '',
      left: '',
      right: '',
      padding: '',
      background: 'rgba(255, 255, 255, 0.75);',
    },
  };
  return (
    <nav>
      <a href="/">
        <img
          className="logo"
          src="https://github.com/maximus202/contestphyte-app/blob/223d1478b020322c06713c913fb4d7cee41a010c/public/contestphytelogo.png?raw=true"
          alt="Contestphyte logo."
        />
      </a>
      <section
        type="button"
        onClick={() => setModalIsOpen(true)}
      >
        <img
          className="menu-icon"
          src="https://github.com/maximus202/contestphyte-app/blob/master/public/menu.png?raw=true"
          alt="Menu."
        />
      </section>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/signup">Sign up</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
        <img
          src="https://github.com/maximus202/contestphyte-app/blob/master/public/close.png?raw=true"
          alt="Close."
          onClick={() => setModalIsOpen(false)}
        />
      </Modal>
    </nav>
  );
}

export default NavBar;
