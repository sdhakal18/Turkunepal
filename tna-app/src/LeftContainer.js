import React from 'react';
import logo_bg from './images/logo_bg.png';
import logo_main from './images/logo_main.png';
import bgTNA from './images/bgTNA.png';
import'./App.css';

export default function LeftContainer() {
  return (
    <div className="LeftContainer">
     
      <div className="logo">
        <img className="bglogo"src={require('./images/logo_main.png')} /> 
      </div>
      <div>
          <div class="containerTNA">
          <img src={require('./images/bgTNA.png')} alt="logo of TNA" ></img>
          <h1 class="centeredTNA">Turku Nepal Association Ry</h1>
          </div>
          <div class="containerGTK">
          <img src={require('./images/menu_bg.png')} alt="logo of TNA" ></img>
          <h1 class="centeredTNA">Good to know</h1>
          </div>
          <div class="containerEvents">
          <img src={require('./images/menu_bg.png')} alt="logo of TNA" ></img>
          <h1 class="centeredTNA">Events</h1>
          </div>
          <div class="containerGallery">
          <img src={require('./images/menu_bg.png')} alt="logo of TNA" ></img>
          <h1 class="centeredTNA">Gallery</h1>
          </div>
          <div class="containercontact">
          <img src={require('./images/menu_bg.png')} alt="logo of TNA" ></img>
          <h1 class="centeredTNA">Contact US</h1>
          </div>

      </div>
    
      
    </div>  

    
  
  )
}