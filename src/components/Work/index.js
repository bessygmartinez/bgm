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
            <div className="col s12 l4 work1 center-align">
                <div className="workpic">
                    <img src="/bgm/assets/img/work/DreMartinez_thumb.jpg" alt="Dre Martinez"
                    className="activator" width="100%"></img>
                </div>
            </div>

            <div className="col s12 l4">
                <div className="card small">
                    <div className="card-image waves-effect waves-block waves-light workpic">
                    <img src="/bgm/assets/img/work/kairos_thumb.jpg" alt="kairos"
                    className="activator" width="100%"></img>
                    </div>
                    <div className="card-content center-align">
                        <span className="card-title activator blue-grey-text text-darken-1">
                            <i className="material-icons right">more_vert</i>
                            </span>
                            <p className="left-align blue-grey-text text-darken-1">
                                Live Demo: <a href="http://kairos2020.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                kairos</a>
                                <br></br>GitHub: <a href="https://github.com/bessygmartinez/kairos" target="_blank" rel="noopener noreferrer">
                                    Repo
                                </a>
                            </p>
                        
                    </div>
                    <div className="card-reveal">
                    <span className="card-title blue-grey-text text-darken-1">
                        kairos<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                {/* <div className="workpic">
                    <img src="/bgm/assets/img/work/kairos_thumb.jpg" alt="kairos" width="100%"></img>
                </div> */}
            </div>

            <div className="col s12 l4 work2">
                <div className="workpic">
                    <img src="/bgm/assets/img/work/GoogleBooksSearch_thumb.jpg" alt="Google Books Search" width="100%"></img>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Work;