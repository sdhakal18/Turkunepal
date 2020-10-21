import React from "react";
import "./App.css";
import "./leftContainer.css";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <LeftContainer />
      <NavBar />
      <Container/>
      <Footer />
    </div>
  );
}

export default App;
