import React from "react";
import './projectandfooter.css';

const cards = [
  {
    url: "https://www.kailashmanasarovar.org/contact-us.html",
    img: "https://cromteksolutions.info/images/partner/abhiyan.png",
    alt: "Project 1"
  },
  {
    url: "https://www.kailashmanasarovar.org/contact-us.html",
    img: "https://cromteksolutions.info/images/partner/sambha.png",
    alt: "Project 2"
  },
  {
    url: "https://www.kailashmanasarovar.org/contact-us.html",
    img: "https://cromteksolutions.info/images/partner/ii.png",
    alt: "Project 3"
  },
  {
    url: "https://atdcindia.co.in/",
    img: "https://cromteksolutions.info/images/partner/atam1.png",
    alt: "Project 4"
  },
  {
    url: "https://surbhihospital.com/",
    img: "https://cromteksolutions.info/images/partner/hospitallogo1.png",
    alt: "Project 5"
  }
];

export default function Projectandfooter() {
  return (
    <>
      <section className='projects'>
        <div className='project-header'>
          <h2> OUR PROJECTS</h2>
          <div className='star-line'>
            <span className="line"></span>
            <i className='fa fa-star'></i>
            <span className="line"></span>
          </div>
        </div>
        <div className='project-cards'>
          <div className='project-cards-inner'>
            {cards.concat(cards).map((card, i) => (
              <div className='project-card' key={i}>
                <a href={card.url} target="_blank" rel="noopener noreferrer">
                  <img src={card.img} alt={card.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> 
      <footer>
        <div class="top-footer">
          
            <p>+91 8168616807</p>
            <p>SUPPORT - SALES</p>
            <p>cromtek@cromteksolutions.info</p>
            <p>24X7X365</p>
          </div>
          <div class="support-icons">
            <div><i class="fas fa-phone"></i>
            <p>TALK TO US</p>
            </div>
            <div><i class="fas fa-comments"></i><p>LIVE CHAT</p></div>
            <div><i class="fas fa-envelope"></i><p>EMAIL US</p></div>
            <div><i class="fas fa-thumbs-up"></i><p>GOOD SUPPORT</p></div>
          </div>
        
  
        <div class="footer-links">
          <div class="column">
            <h3>MAIN LINK</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Solutions</li>
              <li>Mobility</li>
              <li>E-commerce</li>
              <li>Contact Us</li>
              <div><i class="fab fa-linkedin"></i> </div>
              <div><i class="fab fa-instagram"></i></div>
            </ul>
          </div>
  
          <div class="column">
            <h3>SERVICES</h3>
            <ul>
              <li>ERP Solutions</li>
              <li>Web Development</li>
              <li>Mobile Application</li>
              <li>Maintenance and Support</li>
              <li>Enterprise Solution</li>
              <li>IT Advisory Services</li>
              <li>Business Process</li>
              <li>Governance and Compliances</li>
              <li>Resource Augmentations</li>
              <li>Web3 solutions</li>
              <li>Fintech Solutions</li>
              <li>Power BI Developer</li>
            </ul>
          </div>
  
          <div class="column">
            <h3>SOLUTIONS</h3>
            <ul>
              <li>SAP Solutions</li>
              <li>Omni Channel Solutions</li>
              <li>HRMS and Payroll</li>
              <li>School Management System</li>
              <li>Hospital Management System</li>
            </ul>
          </div>
  
          <div class="column">
            <h3>OTHERS</h3>
            <ul>
              <li>Domain Expertise</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='footer-bottom'>
        <p> © copyright 2023 <a href='#'>Cromtek Solutions Pvt Ltd</a>. All rights reserved.</p>
         </div>     
    </>
  )
}