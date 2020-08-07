import React from 'react';
import logo_bg from './images/logo_bg.png';
import logo_main from './images/logo_main.png';
import'./App.css';

export default function LeftContainer() {
  return (
    <div className="LeftContainer">
      <div className="logo">
      
        <img className="bglogo"src={require('./images/logo_main.png')} /> 
      </div>

    </div>
  
  )
}