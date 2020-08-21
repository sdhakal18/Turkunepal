import React from 'react';
import './right-container.scss';
import NavBar from '../nav-bar/nav-bar';
import Container from '../container/container';
import Footer from '../footer/footer';

//This div contains navbar, contents and footer
export default function RightContainer() {
  return (
    <div className="RightContainer">
      <div className="nav">
        <NavBar />{' '}
      </div>
      <div>
        <Container />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
