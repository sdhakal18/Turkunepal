import React from 'react';
import NavBar from './NavBar/Navbar'
import Container from './Container';
import Footer from './Footer';
import  "./css/rightcontainer.css";


       
//This div contains navbar, contents and footer
export default function RightContainer() {
  return (
    <div className="RightContainer"> 
      
      <div className="nav"><NavBar />  </div>
      <div><Container /></div>
      <div><Footer /></div>  
    </div>
  )
}
