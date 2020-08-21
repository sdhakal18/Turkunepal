import React from 'react';
import './left-container.scss';

//Images
import bg_tna from '../../assets/img/bgTNA.png';
import menu_bg from '../../assets/img/menu_bg.png';
import logo_main from '../../assets/img/logo_main.png';

export default function LeftContainer() {
  return (
    <div className="LeftContainer">
      <div className="menuGrid">
        <ul>
          <li>
            <div className="logo">
              <img className="containerLogo" alt="Tna logo" src={logo_main} />
            </div>
          </li>

          <li>
            <img className="containerTNA" src={bg_tna} alt="logo of TNA" />
            <h1 className="centeredTNA">Turku Nepal Association Ry</h1>
          </li>

          <li>
            <div className="containerGTK">
              <img src={menu_bg} alt="logo of TNA" />
              <h1 className="centeredGTN">Good to know</h1>
            </div>
          </li>

          <li>
            <div className="containerEvents">
              <img src={menu_bg} alt="logo of TNA" />
              <h1 className="centeredEvents">Events</h1>
            </div>
          </li>

          <li>
            <div className="containerGallery">
              <img src={menu_bg} alt="logo of TNA" />
              <h1 className="centeredGallery">Gallery</h1>
            </div>

            <div className="containerMembers">
              <img src={menu_bg} alt="logo of TNA" />
              <h1 className="centeredMembers">Members</h1>
            </div>
          </li>

          <li>
            <div className="containerContact">
              <img src={menu_bg} alt="logo of TNA" />
              <h1 className="centeredContact">Contact US</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
