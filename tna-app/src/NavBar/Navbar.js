import React, { Component } from "react";
import { Link } from "react-router-dom";

import Searchbutton from "../NavBar/Searchbutton";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "../css/navbar.css";
import SignInForm from "../LoginForms/SignInForm";
import SignUpForm from "../LoginForms/SignUpForm";

import Hamburger from "./Hamburger";

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <Router>
        <div className="navOutside">
          <div className="navInside" >
            <ul>
            <li>
                  <Searchbutton />
                </li>
              <div>
              
                
                <li className= "{onClick={this.handleClick}">
                  <NavLink 
                    to="/sign-in"
                    activeClassName="FormTitle__Link--Active" className={this.state.isOpen ? "SignInFrom" : "undefined"}
                    className="FormTitle__Link" 
                  >
                    Sign In
                  </NavLink>{" "}
                  <NavLink 
                    to="/sign-up"
                    activeClassName="FormTitle__Link--Active" 
                    className="FormTitle__Link" 

                    
                  >
                    Sign Up
                  </NavLink>
                </li>
                
              </div>
              

              <div>
                <Route exact path="/sign-up" component={SignUpForm}></Route>
                <Route path="/sign-in" component={SignInForm}></Route>
              </div>
            </ul>
          </div>
          <Hamburger />
        </div>
      </Router>
    );
  }
}

export default Navbar;
