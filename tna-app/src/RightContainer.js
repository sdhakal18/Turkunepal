import React from 'react';
import Navbar from './NavBar/Navbar'
import Container from './Container';
import Footer from './Footer';
import  "./css/rightcontainer.css";
       
//This div contains navbar, contents and footer
export default function RightContainer() {
  return (
    <div className="RightContainer"> 
      <Navbar className="nav"/>
      <Container />
      <Footer />
      
    </div>
  )
}
