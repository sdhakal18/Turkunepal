import React from 'react';
import logo_bg from './images/logo_bg.png';
import logo_main from './images/logo_main.png';
import bgTNA from './images/bgTNA.png';
import'./App.css';
import {Link, Route, Router} from 'react-router'

//logo
//     TNA   TNA
//GTK  
//      Events
//Galley


export default function LeftContainer() {
  return (
    <div className="LeftContainer">
        <div classname="logoName">
        <div className="logo"><h1>Logo</h1></div>
        <div className="name"><h1>Turku Nepal Association Ry</h1></div>
      </div>

          <div className="Pages1">
            <div className="gtk"><span>Good to know</span></div>
            <div className="events"><span>Events</span></div>
            <div className="members"><span>Members</span></div>
          </div>
          
      <div className="pages2">
            <div className="gallery"><span>Gallery</span></div>
            <div className="contact"><span>Contact US</span></div>
      </div>
    </div>  

    
  
  )
}
