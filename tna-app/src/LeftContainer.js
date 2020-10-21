import React from "react";
import "./leftContainer.css";

//logo
//     TNA
//GTK         Members
//      Events
//Galley

export default function LeftContainer() {
  return (
    
    <div className="LeftContainer">
      <div class="tna_gridLinks">
        <div class="logo">
          <h1>hi</h1>
        </div>
        <div class="homeName">
          <h1>Turku Nepali Association RY</h1>
        </div>
        <div class="goodToknow">
          <h2>Good to know</h2>
        </div>
        <div class="events">
          <h2>Events</h2>
        </div>
        <div class="gallery">
          <h2>Gallery</h2>
        </div>
        <div class="contactUs">
          <h2>Contact Us</h2>
        </div>

        <div class="members">
          <h2>Members</h2>
        </div>
      </div>
    </div>
  
  );
}
