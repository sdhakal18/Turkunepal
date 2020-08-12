import React from 'react';
import Navbar from './NavBar/Navbar';
import Container from './Container';
import Footer from './Footer';

       
//This div contains navbar, contents and footer
export default function RightContainer() {
  return (
    <div className="RightContainer"> 
      <Navbar />
      <Container />
      <Footer />
    </div>
  )
}
