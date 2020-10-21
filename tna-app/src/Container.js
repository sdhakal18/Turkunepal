import React from "react";
import "./container.css";

export default function Container() {
  return (
    <div className="container">
      <div class="wrapper">
  <div >
  <div class="rtgtk">
    <h3>Good To know</h3>
    <p>
      Here goes the text fot the paragraph thats gonna be inside the Goot to kniow heading
    </p>
  </div>
    <div class="rtgallery">
      <h3>Gallery</h3>
      <p>
        THis is the text or some pictures for the gallery
      </p>
    </div>
    
  
  </div>
  <div >
  <div class="rtbenefits"><h3>Benefits</h3>
  <p>  Here goees the benefits list </p>
  <ul>
    <li>Heavy discount</li>
    <li>Offers on membership</li>
    <li>Free events</li>
  </ul>
    
    </div>  
  <div class="rtevents">
    <h3>Events</h3>
  <p>About all the upcomming events  goes here</p>
  </div>
  
  <div class="rtcontact"><h3>contact</h3>
  <p>Contact details goes here</p>
  </div>
    </div>
</div>
    </div>
  );
}
