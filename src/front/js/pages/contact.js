import React from "react";
import { Link } from "react-router-dom";
import FullLogo from '../../img/fulllogo.jpeg'

export const Contact = () => {

  return (

    <div class="container">

      <div class="row d-flex justify-content-center align-items-center mt-3 no-gutters">

        <div class="col-md-4 d-flex justify-content-center" style={{ borderStyle: 'dotted' }}>

          <div class="image">
            <img src={FullLogo} class="img-fluid" style={{ height: 'auto', maxWidth: '100%' }} />
          </div>



        </div>

        <div class="col-md-4" style={{ borderStyle: 'dotted' }}>
          <div class=" d-flex ">

            <form target="_blank" action="https://formsubmit.co/7801e72aca46261f4264461e4ada688a" method="POST">
              <div class="form-group">
                <div class="form-row">
                  <div class="col">
                    <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                  </div>
                  <div class="col">
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea placeholder="Your Message" class="form-control" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit Form</button>
            </form>


          </div>
        </div>

      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>

  )
}

let theform = `    <form target="_blank" action="https://formsubmit.co/7801e72aca46261f4264461e4ada688a" method="POST">
<div class="form-group">
  <div class="form-row">
    <div class="col">
      <input type="text" name="name" class="form-control" placeholder="Full Name" required />
    </div>
    <div class="col">
      <input type="email" name="email" class="form-control" placeholder="Email Address" required />
    </div>
  </div>
</div>
<div class="form-group">
  <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
</div>
<button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
</form>`