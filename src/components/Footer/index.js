import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
    
render()
    {
         
     return (
         <div className="footright">
             <a href="https://www.linkedin.com/in/bessygmartinez/" target="_blank" rel="noopener noreferrer">
                 <ion-icon name="logo-linkedin" size="large"></ion-icon></a>
             <br></br>
             <a href="https://github.com/bessygmartinez" target="_blank" rel="noopener noreferrer">
             <ion-icon name="logo-github" size="large"></ion-icon></a>
             <br></br>
             <a href="https://www.linkedin.com/in/bessygmartinez/" target="_blank" rel="noopener noreferrer">
             <ion-icon name="mail-sharp" size="large"></ion-icon></a>
         </div>
        );
    }
}

export default Footer;