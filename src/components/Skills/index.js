import React from "react";
import "./skills.css";
import cloud1 from "./cloud1.svg";

function Skills() {
    return (
        <div>
        <div className="designer">
            <div className="cloud1-svg hide-me vibrate-3">
                <img src={cloud1} alt="cloud" className="cloud1 hide-me"></img>
            </div>
            <h3 className="hide-me">
                Designer
            </h3>
            <p className="hide-me">
               I've been a Freelance Graphic Designer for over 15 years and value clean design models, straighforward
               content format, and meaningful interactions. 
            </p>
        </div>

        <div className="developer">
            <div className="cloud2-svg vibrate-2 hide-me">
                <img src={cloud1} alt="cloud" className="cloud2 flip-cloud hide-me"></img>
            </div>
            <h3 className="clearfix dev-heading hide-me">
                Developer
            </h3>
            <p className="hide-me">
                I love to code and watch it come to life in the browser. Some of the languages
                I use and continue to develop are HTML5, CSS3, JavaScript, and SQL. I can also work with React, JSX, jQuery,
                Express Handlebars, Node, Express, MySQL, MongoDB, Passport, JWT, and am familiar with GitHub and Heroku.
            </p>
        </div>
</div>
    )
}

export default Skills;