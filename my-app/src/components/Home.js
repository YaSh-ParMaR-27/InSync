import React from "react";
import Navbar from './Navbar'
import StartPoint from './StartPoint'
import './Home.css'
import Cards from "./Cards";
import SmallTextDesign from "./SmallTextDesign";

export default function Home() {
  return (
    <>  
        <div className="home_container">
          <Navbar/>
          
          <StartPoint/> 

          <SmallTextDesign/>

          <div id="how-it-works" className="howitworks_container"> 
              <p>How it works will come here</p>
          </div>

          <div id="information" className="information_container"> 
              <p>Information will come here</p>
          </div>
          
          <Cards/>
          
        </div>
    </>
  );
}
