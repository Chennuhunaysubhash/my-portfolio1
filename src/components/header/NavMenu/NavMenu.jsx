// NavMenu.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './NavMenu.css'; // Create a new CSS file for NavMenu

// eslint-disable-next-line react/prop-types
const NavMenu = ({ isOpen, closeMenu }) => {
  return (
    <nav className={`nav-style ${isOpen ? 'open' : ''}`}>
      <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
      <a href="#work" className="nav-link" onClick={closeMenu}>Experience</a>
      <a href="#skill" className="nav-link" onClick={closeMenu}>Skill</a>
      <a href="#certifications" className="nav-link" onClick={closeMenu}>Certifications</a>
      <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
    </nav>
  );
};

export default NavMenu;
