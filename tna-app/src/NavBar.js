import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./Container";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="menuRight">
        <div className="burgerLines"></div>
        <div className="burgerLines"></div>
        <div className="burgerLines"></div>
      </div>
      <div class="hamburgerMenu">
        <ul>
          <li>Home</li>
          <li>Goot To Know</li>
          <li>Events</li>
          <li>Gallery</li>
          <li>Members</li>
          <li>Contact US</li>
        </ul>
      </div>
      <Container />
    </div>
  );
}
