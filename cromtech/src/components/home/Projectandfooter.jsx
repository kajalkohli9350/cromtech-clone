import React from "react";
import './projectandfooter.css';
export default function Projectandfooter() {
    return(
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
              <div className='project-card'>
                <a href="https://www.kailashmanasarovar.org/contact-us.html" target="_blank" rel="noopener noreferrer">
                <img src='https://cromteksolutions.info/images/partner/abhiyan.png' alt='Project 1' />
                </a>
                </div>
                <div className='project-card'>
                  <a href="https://www.kailashmanasarovar.org/contact-us.html" target="_blank" rel="noopener noreferrer">
                <img src='https://cromteksolutions.info/images/partner/sambha.png' alt='Project 2' /> 
                </a>
                </div> 
                <div className='project-card'>
                  <a href="https://www.kailashmanasarovar.org/contact-us.html" target="_blank" rel="noopener noreferrer">
                <img src='https://cromteksolutions.info/images/partner/ii.png' alt='Project 3' />
                </a>
                </div>
                <div className='project-card'>
                  <a href="https://atdcindia.co.in/" target="_blank" rel="noopener noreferrer">
                <img src='https://cromteksolutions.info/images/partner/atam1.png' alt='Project 4' />
                </a>
                </div>
                <div className='project-card'>
                  <a href="https://surbhihospital.com/" target="_blank" rel="noopener noreferrer">
                <img src='https://cromteksolutions.info/images/partner/hospitallogo1.png' alt='Project 5' />
                </a>
                </div>
            </div>
          </section> 
        </>
    )
}