import React, { Component } from 'react';
import './App.css'
import Contactus from "./pages/Contactus";

import Gallery from "./pages/Gallery";
import Goodtoknow from "./pages/Goodtoknow";
import Members from "./pages/Members";
import Events from "./pages/Events";
import Navbar from "./NavBar/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <switch>
        <Route path="/" exact component={Home} />
        <Route path="/Events" component={Events} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Goodtoknow" component={Goodtoknow} />
        <Route path="/Members" component={Members} />
        <Route path="/Contactus" component={Contactus} />
        

        </switch>
      </div>
      </Router>
    );
  }
}

const  Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
