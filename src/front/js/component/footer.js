import React, { Component } from "react";
import Logo from '../../img/Logo.png'
import FullLogo from '../../img/fulllogo.jpeg'

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
          
        <div class="container-fluid">
					
						<div style={{ display: 'flex', flexDirection: 'column' }}>
            <div><img src={Logo} style={{maxWidth:'100%',height:'6rem'}}/></div>
							<p class='BakedAndIced' style={{ fontFamily: ' Bebas Neue, cursive' }}>Baked + Iced</p>
							<p class='ByArelys' style={{ fontFamily: 'Great Vibes, cursive', textAlign: 'center' }}>By Arelys</p>
						</div>
          </div>
        </div>
        
        
        
       

       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
        <h5 class="text-uppercase mb-4">Business hours</h5>
  
  <table class="table  text-yellow">
    <tbody class="font-weight-normal">
      <tr>
      <td>Monday to Friday</td>
      <td>8 am - 1 am</td>
      </tr>
      <tr>
        <td>Friday and Saturday</td>
        <td>8am - 1am</td>
      </tr>
      <tr>
        <td>Sunday:</td>
        <td>Closed</td>
      </tr>
    </tbody>
  </table>
        
        </div>
        
        <div class="col-md-3 mx-auto mb-md-2 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4 ">
            Contact
          </h6>
          
          
          <p>
            <i class="fas fa-envelope me-3 fa-lg"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3 fa-lg"></i> + 01 234 567 88</p>
          <p><i class="fab fa-instagram me-3 fa-lg" style={{fontWeight:'bold'}}></i> Follow Us On Instagram</p>
          
          
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
