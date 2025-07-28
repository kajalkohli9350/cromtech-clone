import React from "react";
import './servicebottom.css';
export default function  Servicebottom(){
    return(
        <>
        <section className='service-bottom'>
              <div className='service-bottom-image'>
                <img src='https://cromteksolutions.info/images/quality.png' alt='Service Bottom' />
                </div>
            <div className='service-bottom-body'>
                 
              <div className='bottomcontent'> 
                  <span className="leftline"><i className="fa fa-arrow-left"></i></span>
                <div className="circleicon">
                   
              <i className="fa fa-mobile"></i>
              </div>
              <div class='para'> <h3>SAP SOLUTIONS</h3>
             <p>Our SAP Practice has a large pool of functional and technical consultants with many man years of combined experience in SAP Consulting...</p>
              </div>
              </div>
               <div className='bottomcontent'>
                 <span className="leftline"><i className="fa fa-arrow-left"></i></span>
                 <div className="circleicon">
              <i className="fa fa-hand"></i>
              </div>
             <div class='para'><h3> OMNI CHANNEL SOLUTIONS</h3>
             <p>Our SAP Practice has a large pool of functional and technical consultants with many man years of combined experience in SAP Consulting...</p>
              </div>
              </div>
              
             <div className='bottomcontent'>
                 <span className="leftline"><i className="fa fa-arrow-left"></i></span>
                 <div className="circleicon">
              <i className="fa fa-bookmark"></i>
              </div>
             <div class='para'> <h3>HRMS AND PAYROLL</h3>
             <p>Our SAP Practice has a large pool of functional and technical consultants with many man years of combined experience in SAP Consulting...</p>
              </div>
              </div> 
            </div>
        </section>
            
          </>    
    )
}