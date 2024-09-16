// Header.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">My Portfolio</h1>
      <nav className="nav-style">
        <a href="#about" className="nav-link">About</a>
        <a href="#work" className="nav-link">Experience</a>
        <a href="#skill" className="nav-link">Skill</a>
        <a href="#certifications" className="nav-link">Certifications</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
