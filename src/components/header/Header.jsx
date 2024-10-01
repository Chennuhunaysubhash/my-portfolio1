// Header.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS file

import { FaBars } from 'react-icons/fa'; // Importing FontAwesome icon
import NavMenu from './NavMenu/NavMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
      <h1 className="header-title">HUNAY SUBHASH</h1>
      <FaBars className="menu-icon" onClick={toggleMenu} /> {/* Menu Icon */}
      <NavMenu isOpen={menuOpen} closeMenu={closeMenu} /> {/* NavMenu Component */}
    </header>
  );
};

export default Header;
