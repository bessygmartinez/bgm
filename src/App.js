import React, {Component} from "react";
import Nav from "./components/Nav";
import Words from "./components/Words";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import sun from "./sun.svg"
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
  }

  render ()
  {

    let sunSize = function() {
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
      let pixelsPerScroll =(widthDiff / maxScrollDistance);
  
      $(window).scroll(function () {
          // the currently scrolled-to position - max-out at maxScrollDistance
          let scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);
          
          // how many pixels to adjust by
          let scrollChangePx =  Math.floor(scrollTopPos * pixelsPerScroll);
          
          // calculate the new width
          let zoomedWidth = imgWidth - scrollChangePx;
          
          // set the width
          $('.sun').css('width', zoomedWidth);
      });
  };
  
  sunSize();

  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.hide-me').each( function(i){
              
              let bottom_of_object = $(this).offset().top + $(this).outerHeight(false) -100;
              let bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'}, 350);                        
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
        
        <div className="scroll-down bounce-top"><i className="large material-icons">arrow_downward</i></div>
        </div>
          
        <div className="about-me">
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
