import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {

    return (
       <div className="container">
           <h1>test</h1>
           <div class="container">
  <h1>FormSubmit Demo</h1>
  <form target="_blank" action="https://formsubmit.co/7801e72aca46261f4264461e4ada688a" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>
       </div>
    )
}