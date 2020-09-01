import React, { Component } from "react";
import "./css/App.css";
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

class App extends Component {
  render() {
    return (
        <div className="App">
          <LeftContainer />
          <RightContainer />
        </div>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
