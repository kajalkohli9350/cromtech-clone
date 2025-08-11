
import './header.css';
import React, { useEffect, useState } from "react";
import Navbar from './Navbar'; 


export default function Header(){
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
     
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return(
        <>
     <section className="header">
         <div className="contact-info">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-square-instagram" ></i>
          
          <span style={{color: '#00a7c6'}}> cromtek@cromteksolutions.info</span>
        </div>
        <div className="contact-info">
          <i className="fa fa-phone">  </i>+91 8168616807 
        </div>
     </section>
   <div style={{ height: 'auto' }}>
        <Navbar className={isSticky ? "sticky" : ""} />
      </div>
    </>
  );
};

