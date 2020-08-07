import React from 'react';
import NavBar from './NavBar';
import Container from './Container';
import Footer from './Footer';

       
//This div contains navbar, contents and footer
export default function RightContainer() {
  return (
    <div className="RightContainer"> 
      
      <div><NavBar />  </div>
      <div><Container /></div>
      <div><Footer /></div>  
    </div>
  )
}