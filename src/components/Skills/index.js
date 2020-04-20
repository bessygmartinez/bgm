import React from "react";
import "./skills.css";
import bulb from "./bulb.svg";

function Skills() {
    return (
        <div className="resourceful">
            <div className="bulb-svg hide-me">
                <img src={bulb} alt="ligt bulb" className="bulb"></img>
            </div>
            <h3 className="hide-me">
                Resourceful
            </h3>
            <p className="hide-me">
                My strengths 
            </p>
        </div>
    )
}

export default Skills;