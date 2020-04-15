import React from "react";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
        {/* <Navbar /> */}

          <Nav />

          <div className="row">
            <div className="col s12">
              <div className="landing-div">
              <h1 className="center-align greeny-text">Hello. My name is Bessy.<br></br>
              <i className="large material-icons">mood</i></h1>
              </div>
            </div>
          </div>
    </div>
  );
}

export default App;
