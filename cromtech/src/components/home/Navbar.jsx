import React, { useState } from 'react';
import './Navbar.css';
// import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
export default function Navbar({ className = "" }) {
   const [menuOpen, setMenuOpen] = useState(false);
    return (
         <nav  className={`navbar ${className}`}>
        
      <div className="navbar-left">
        <span className="brand-name">
          <span className="cromtek">Cromtek</span>
          <span className="solutions">Solutions</span>
        </span>
      </div>
       <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
       <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
       
        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">SERVICES</a>
          <a href="#">SOLUTIONS</a>
          <a href="#">MOBILITY</a>
          <a href="#">E-COMMERCE</a>
          <a href="#">CONTACT US</a>
        </div>
      </div>
     
    </nav>
    )
}