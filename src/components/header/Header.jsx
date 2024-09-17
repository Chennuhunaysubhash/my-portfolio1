/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

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
