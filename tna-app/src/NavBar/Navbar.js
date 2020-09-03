import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Searchbutton from '../NavBar/Searchbutton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import '../css/navbar.css';
import SignInForm from '../LoginForms/SignInForm';
import SignUpForm from '../LoginForms/SignUpForm';

import Hamburger from './Hamburger';

class Navbar extends Component {
  /* state = {
    isOpen: false,
  };
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }; */
  state = {
    seen: false,
  };
  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };
  handleClick = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };
  render() {
    return (
      <Router>
        {/* <div>
          <div className="btn" onClick={this.togglePop}>
            <button>Sign in?</button>
          </div>
          {this.state.seen ? <SignInForm toggle={this.togglePop} /> : null}
        </div> */}
        <div>
          <div className="btn" onClick={this.handleClick}>
            <button>New users?</button>
          </div>
          {this.state.seen ? <SignUpForm toggle={this.handleClick} /> : null}
        </div>
      </Router>
      /* <Router>
        <div className="navOutside">
          <div className="navInside">
            <ul>
              <li>
                <Searchbutton />
              </li>
              <div>
                <li className="{onClick={this.handleClick}">
                  <NavLink
                    to="/sign-in"
                    activeClassName="FormTitle__Link--Active"
                    className={this.state.isOpen ? 'SignInFrom' : 'undefined'}
                    className="FormTitle__Link"
                  >
                    Sign In
                  </NavLink>{' '}
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
      </Router> */
    );
  }
}

export default Navbar;
