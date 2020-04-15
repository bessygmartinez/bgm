import React from "react";
import $ from "jquery";
import logo from "../../logo.svg";
import "./nav.css";

class Navbar extends React.Component {


  handleToggle = (event) => {
    const el = event.target;
    $(el).toggleClass("active");
  }

  render() {
    return (
      <div className="navbar">
        <nav>
        <div className="nav-wrapper">
          <a href="index.html" className="brand-logo">
              <img src={logo} alt="logo" className="App-logo"/>
              <div className="logo-div">Bessy G. Martinez</div></a>
          <ul id="nav-mobile" className ="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
            <li class="" onClick={this.handleToggle}>Testing!</li>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar;