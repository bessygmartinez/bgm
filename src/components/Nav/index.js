import React from "react";
import $ from "jquery";
import logo from "../../logo.svg";
import "./nav.css";

class Nav extends React.Component {
  handleToggle = () => {
    const bar = $(".bar");
    const head = $(".head");
    const navitems = $(".nav-items");
    const navbg = $(".nav-bg");
    const navwrap = $(".nav-wrap");

    $(bar).toggleClass("active");
    $(head).toggleClass("active");
    $(navitems).toggleClass("active");
    $(navbg).toggleClass("active");
    $(navwrap).toggleClass("active");
  };

  render() {
    return (
      <div className="head">
          <div className="nav-items">
              <div className="nav-col">
                  <h2>About Me</h2>
                  <p>Who am I?</p>
              </div>
              <div className="nav-col">
                  <h2>My Work</h2>
                  <p>Here's my work</p>
              </div>
          </div>
          <div className="nav-bg"></div>
          <div className="nav-wrap"></div>
        <div className="nav-div" onClick={this.handleToggle}>
          <div className="bar first"></div>
          <div className="bar second"></div>
          <div className="bar third"></div>
        </div>
      </div>
    );
  }
}

export default Nav;
