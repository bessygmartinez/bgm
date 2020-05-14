import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {

render()
 {
      
  return (
      <div>
          <div className="row contact-div">
              <form className="col s12 m12 l12">
                  <h3>Send a Message</h3>
                  <div className="row">
                      <div className="input-field col s6 m6 l6">
                          <input id="first_name" type="text" className="validate"></input>
                          <label htmlFor="first_name">Name</label>
                      </div>
                      <div className="input-field col s6 m6 l6">
                          <input id="email" type="email" className="validate"></input>
                          <label htmlFor="email">Email</label>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12 m12 l12">
                      <textarea id="text_area" className="materialize-textarea"></textarea>
                        <label htmlFor="text_area">Your Message</label>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12 m12 l12">
                      <button className="btn btn-flat btn-orange waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
  </button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  );
 }
}

export default Contact;