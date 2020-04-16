import React from "react";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  return (
    <div>
      
      <Nav />

      <div className="container">
        <div className="wrapper-div">
         <h1 className="center-align greeny-text">
            Hello. My name is Bessy.<br></br>
          </h1>
          </div>
        
        <div className="scroll-down bounce-top"><i className="large material-icons greeny-text">arrow_downward</i></div>

        <div className="about-me">
          <AboutMe />
        </div>

        
      </div>
    </div>
  );
}

export default App;
