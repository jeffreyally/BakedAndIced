import React, { Component } from "react";
import Logo from '../../img/Logo.png'

export const Footer = () => {

	return(

		
<footer class="text-center text-lg-start bg-light text-muted  m-0">
  
 
    
    {/* <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
     */}
<section class="bg-info">
    <div class="container text-center ">
      
      <div class="row pt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
        
        
       

       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
           Thanks For Stopping By!
          </h6>
          <img src={Logo} style={{maxWidth:'100%', height:'6rem'}}/>
        
        </div>
        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fab fa-instagram"></i> Follow Us On Instagram</p>
        </div>
        
      </div>
    
    </div>
  </section>


  
  <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
  <i class="fas fa-copyright"style={{color:'darkblue'}}></i>&nbsp;
    <span style={{fontWeight:'bold'}}> 2022 Copyright: BAKED AND ICED BY ARELYS</span>
  </div>
  
</footer>


	)
}
