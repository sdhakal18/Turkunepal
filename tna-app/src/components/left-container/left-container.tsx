import React from 'react';
import './left-container.scss';

//Images
import bg_tna from '../../assets/img/bgTNA.png';
import menu_bg from '../../assets/img/menu_bg.png';
import logo_main from '../../assets/img/logo_main.png';

export default function LeftContainer() {
  return (
    <div className="main">
      <div className="folded"></div>
      <div className="page-container">
        <span>Contents of</span>
      </div>
    </div>
  );
}
