import React from "react";
import "./work.css";

function Work () {
    return (
        <div>
        <div className="row">
            <div className="col s12">
              <h3>Drizzle of Design</h3>  
            </div>
        </div>
        
        <div className="row work-row">

            <div className="col s12 m6 l4">

                <div className="card trans-bg sticky-action">
                    <div className="card-image waves-effect waves-block waves-light workpic-div">
                    <img src="/bgm/assets/img/work/DreMartinez_thumb.jpg" alt="Dre Martinez"
                    className="activator workpic" width="100%"></img>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator blue-grey-text text-darken-1">
                            DreMartinez.com
                            <i className="material-icons right">more_vert</i>
                            </span>
                            </div>
                            <div className="card-action left-align trans-bg blue-grey-text text-darken-1">
                                <a href="http://www.dremartinez.com" target="_blank" rel="noopener noreferrer">
                                DreMartinez.com</a>
                                <br></br>GitHub: N/A
                    </div>
                    <div className="card-reveal">
                    <span className="card-title blue-grey-text text-darken-1">
                        Dre Martinez<i className="material-icons right">close</i></span>
                    <p className="blue-grey-text text-darken-1">
                        Website for Miami, FL mixed media artist Andre Martinez, created with CMS Squarespace.
                    </p>
                    </div>
                </div>
            </div>

            <div className="col s12 m6 l4">
                <div className="card trans-bg sticky-action">
                    <div className="card-image waves-effect waves-block waves-light workpic-div">
                    <img src="/bgm/assets/img/work/kairos_thumb.jpg" alt="kairos"
                    className="activator workpic" width="100%"></img>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator blue-grey-text text-darken-1">
                            kairos
                            <i className="material-icons right">more_vert</i>
                            </span>
                            </div>
                            <div className="card-action left-align trans-bg blue-grey-text text-darken-1">
                                <a href="http://kairos2020.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                kairos</a>
                                <br></br>GitHub: <a href="https://github.com/bessygmartinez/kairos" target="_blank" rel="noopener noreferrer">
                                    Repo
                                </a>
                            </div>
                    
                    <div className="card-reveal">
                    <span className="card-title blue-grey-text text-darken-1">
                        kairos<i className="material-icons right">close</i></span>
                        <p className="blue-grey-text text-darken-1">
                        A MERN stack web app to ease creation and maintenence of work schedules.
                        </p>
                        <small className="blue-grey-text text-darken-1">
                        HTML5 • CSS3 • JavaScript • React • Node • Express • Mongoose 
                        • Passport • React Redux • bcrypt • jsonwebtoken • React Big Calendar •  
							React-Toastify • Material Design for Bootstrap • Heroku
                            </small>
                    </div>
                </div>
            </div>

            <div className="col s12 m6 l4">
                <div className="card trans-bg sticky-action">
                    <div className="card-image waves-effect waves-block waves-light workpic-div">
                    <img src="/bgm/assets/img/work/GoogleBooksSearch_thumb.jpg" alt="Google Books Search"
                    className="activator workpic" width="100%"></img>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator blue-grey-text text-darken-1">
                            Google Books Search
                            <i className="material-icons right">more_vert</i>
                            </span>
                            </div>
                            <div className="card-action left-align blue-grey-text text-darken-1">
                                <a href="https://warm-taiga-87514.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                Google Books Search</a>
                                <br></br>GitHub: <a href="https://github.com/bessygmartinez/GoogleBooksSearch" target="_blank" rel="noopener noreferrer">
                                    Repo
                                </a>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title blue-grey-text text-darken-1">
                        Google Books Search<i className="material-icons right">close</i></span>
                        <p className="blue-grey-text text-darken-1">Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Work;