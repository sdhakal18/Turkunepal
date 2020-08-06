import React from 'react';
import NavBar from './NavBar';
import Container from './Container';
import Footer from './Footer';

       
//This div contains navbar, contents and footer
export default function RightContainer() {
  return (
    <div className="RightContainer"> 
      <NavBar />
      <Container />
      <Footer />
    </div>
  )
}
