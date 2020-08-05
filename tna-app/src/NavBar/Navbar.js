import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar">
        
        <ul className="nav-link">
          

          <Link to="/Events">
            <li>Events</li>
          </Link>

          <Link to="/Gallery">
            <li>Gallery</li>
          </Link>

          <Link to="/Goodtoknow">
            <li>Good to know</li>
          </Link>

          <Link to="Members">
            <li>Members</li>
          </Link>

          <Link to="/Contactus">
            <li>Contactus</li>
          </Link>
          

        </ul>
        
      </nav>
    );
  }
}

export default Navbar;
