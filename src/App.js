import React, {Component} from "react";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import sun from "./sun.svg"
import "./App.css";

class App extends Component {

  componentDidMount() {
    this.script = document.createElement("script");

    this.script.src="%PUBLIC_URL%/assets/js/words.js";
    this.script.async = true;
    this.script.onload = () => this.onScriptLoad();

    document.body.appendChild(this.script);
  }

  onScriptLoad = () => {
    window.startWords();
  }

  render () {
  return (
    <div>
      
      <Nav />

      <div className="container">
        <div className="sun-wrap">
          <img src={sun} alt="sun" className="sun" id="sun" width="100%"></img>
          <img src={sun} alt="sun" className="sun-mob" id="sun" width="100%"></img>
        </div>
        <div className="wrapper-div">
         <h1 className="center-align greeny-text">
            <span className="word">Web &nbsp; Developer</span>
            <span className="word">Graphic &nbsp; Designer</span>
            <span className="word">Miami-based</span>
          </h1>
          </div>
        
        <div className="scroll-down bounce-top"><i className="large material-icons">arrow_downward</i></div>

        <div className="about-me hide-me">
          <AboutMe />
        </div>

        <div className="skills">
          <Skills />
        </div>

        
      </div>
    </div>
    )
  }
}

export default App;
