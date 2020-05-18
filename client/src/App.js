import React, { Component } from "react";
import Nav from "./components/Nav";
import Words from "./components/Words";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Work from "./components/Work";
import sun from "./sun.svg";
import Footer from "./components/Footer";
import Flowers from "./components/Flowers";
import Contact from "./components/Contact";
import $ from "jquery";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.onScriptLoad();

    //    let script = document.createElement("script");
    //   script.async = true;
    //   script.src="/bgm/assets/js/words.js";

    // script.onload = () => this.onScriptLoad();

    //   document.body.append(script);
  }

  onScriptLoad = () => {
    window.startWords();
  };

  render() {
    function sunSize() {
      // Get the real width of the sun
      let sunImg = $("#sun");
      // let newImage = new Image();
      sunImg.src = sun;
      let imgWidth = 450;

      // distance over which zoom effect takes place
      let maxScrollDistance = 900;

      // set to window height if larger
      maxScrollDistance = Math.min(maxScrollDistance, $(window).height());

      // width at maximum zoom out (i.e. when window has scrolled maxScrollDistance)
      let widthAtMax = 350;

      // calculate diff and how many pixels to zoom per pixel scrolled
      let widthDiff = imgWidth - widthAtMax;
      let pixelsPerScroll = widthDiff / maxScrollDistance;

      $(window).scroll(function () {
        // the currently scrolled-to position - max-out at maxScrollDistance
        let scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);

        // how many pixels to adjust by
        let scrollChangePx = Math.floor(scrollTopPos * pixelsPerScroll);

        // calculate the new width
        let zoomedWidth = imgWidth - scrollChangePx;

        // set the width
        $(".sun").css("width", zoomedWidth);
      });
    }

    sunSize();

    $(document).ready(function () {
      /* Every time the window is scrolled ... */
      $(window).scroll(function () {
        /* Check the location of each desired element */
        $(".hide-me").each(function (i) {
          let bottom_of_object = $(this).offset().top + $(this).outerHeight(false);
          let bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it */
          if (bottom_of_window > bottom_of_object - 200) {
            $(this).animate({ opacity: "1" }, 350);
          }
        });
      });
    });

    return (
      <div>
        <Nav />

        <div className="container">
          <div className="hero">
            <div className="sun-wrap stop-flickering">
              <img src={sun} alt="sun" className="sun" id="sun" width="100%"></img>
              {/* <img src={sun} alt="sun" className="sun-mob" id="sun" width="100%"></img> */}
            </div>
            <div className="words-div stop-flickering">
              <Words />
            </div>

            <div className="scroll-down bounce-top">
              <small>scroll down</small><br></br>
              <i className="large material-icons">arrow_downward</i>
              
            </div>
          </div>

          <div className="about-me">
            <AboutMe />
          </div>

          <Skills />

          <div className="work">
            <Work />
          </div>
          {/* <div className="ac-animated-svg-icon ac-svg-animated ac-svg-shadow rain">
            <div className="ac-animated-svg-icon-contents rain">
              <div className="ac-animated-svg-cloudrain rain">
                <img src={drop} alt="drop" className="svg-drop svg-drop-1"></img>
                <img src={drop} alt="drop" className="svg-drop svg-drop-2"></img>
                <img src={drop} alt="drop" className="svg-drop svg-drop-3"></img>
                <img src={drop} alt="drop" className="svg-drop svg-drop-4"></img>
                <img src={drop} alt="drop" className="svg-drop svg-drop-5"></img>
                <img src={drop} alt="drop" className="svg-drop svg-drop-6"></img>
              </div>
            </div>
            
          </div> */}
          <Contact />
          

          <Footer />

          <div className="row bottom-dirt">
            <Flowers />
            <div className="col s12 m12 l12">
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
