import React, { useState } from 'react';
import './header.css';

import { FaBars, FaTimes } from 'react-icons/fa';
export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
     <section classname='header'>
         <div className="contact-info">
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-square-instagram" ></i>
          <i class="fa fa-envelope-o"></i>
          <span style={{color: '#00a7c6'}}> cromtek@cromteksolutions.info</span>
          <i class="fa fa-phone"></i>
           +91 8168616807
        
        </div>
     </section>
    <section className="navbar">
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
       
        <nav className="nav-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">SERVICES</a>
          <a href="#">SOLUTIONS</a>
          <a href="#">MOBILITY</a>
          <a href="#">E-COMMERCE</a>
          <a href="#">CONTACT US</a>
        </nav>
      </div>
    </section>
    </>
  );
};

