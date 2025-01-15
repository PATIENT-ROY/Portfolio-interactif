import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
         
        <Link to="/" className="navbar__logo">Freelancer Portfolio</Link>
        
         
        <div className="navbar__menu">
          <Link to="/" className="navbar__link">Home</Link>
          <Link to="/about" className="navbar__link">About</Link>
          <Link to="/contact" className="navbar__link">Contact</Link>
          <Link to="/projects" className="navbar__link">Projects</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


















