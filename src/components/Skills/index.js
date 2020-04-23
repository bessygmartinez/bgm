import React from "react";
import "./skills.css";
import cloud1 from "./cloud1.svg";

function Skills() {
    return (
        <div className="resourceful">
            <div className="cloud1-svg hide-me vibrate-3">
                <img src={cloud1} alt="cloud1" className="cloud1"></img>
            </div>
            <h3 className="hide-me">
                Skills Go Here
            </h3>
            <p className="hide-me">
               Blah blah blah blah.
            </p>
        </div>
    )
}

export default Skills;