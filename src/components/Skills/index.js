import React from "react";
import "./skills.css";
import cloud1 from "./cloud1.svg";

function Skills() {
    return (
        <div>
        <div className="designer">
            <div className="cloud1-svg hide-me vibrate-3">
                <img src={cloud1} alt="cloud" className="cloud1"></img>
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
            <div className="cloud2-svg hide-me vibrate-2">
                <img src={cloud1} alt="cloud" className="cloud2 flip-cloud"></img>
            </div>
            <h3 className="hide-me clearfix dev-heading">
                Developer
            </h3>
            <p className="hide-me">
                Coding and watching the code come to life in the browser is one of my favorite pastimes. Some of the languages
                I use and continue to develop are HTML5, CSS3, JavaScript, and SQL. I can also work with React, JSX, jQuery,
                Express Handlebars, Node, Express, MySQL, MongoDB, Passport, JWT, and am familiar with GitHub and Heroku.

            </p>
        </div>
        </div>
    )
}

export default Skills;