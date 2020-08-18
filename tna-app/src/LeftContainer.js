import React from 'react';
import logo_bg from './images/logo_bg.png';
import logo_main from './images/logo_main.png';
import bgTNA from './images/bgTNA.png';
import'./App.css';
import {Link, Route, Router} from 'react-router'

export default function LeftContainer() {
  return (
    <div className="LeftContainer">
      
      

        
      <div className="menuGrid">
        
      <ul>
      <li>
          <div className="logo">
          <img className="containerLogo"src={require('./images/logo_main.png')} />
          </div>
      </li>
      
      <li>  

          
          <img className="containerTNA" src={require('./images/bgTNA.png')} alt="logo of TNA" ></img>
          <h1 className="centeredTNA">Turku Nepal Association Ry</h1>
          
      </li>

      <li>
          <div class="containerGTK">
          <img src={require('./images/menu_bg.png')} alt="logo of TNA" ></img>
          <h1 class="centeredGTN">Good to know</h1>
          </div>
      </li>
        
      <li>
          <div className="containerEvents">
          <img src={require('./images/menu_bg.png')} alt="logo of TNA" ></img>
          <h1 class="centeredEvents">Events</h1>
          </div>
      </li>

      <li>
          <div class="containerGallery">
          <img src={require('./images/menu_bg.png')} alt="logo of TNA" ></img>
          <h1 class="centeredGallery">Gallery</h1>
          </div>

          <div class="containerMembers">
          <img src={require('./images/menu_bg.png')} alt="logo of TNA" ></img>
          <h1 class="centeredMembers">Members</h1>
          </div>
      </li>

      <li>
          <div class="containerContact">
          <img src={require('./images/menu_bg.png')} alt="logo of TNA" ></img>
          <h1 class="centeredContact">Contact US</h1>
          </div>
      </li>
         
      </ul>
      
      </div>
    
      
    </div>  

    
  
  )
}