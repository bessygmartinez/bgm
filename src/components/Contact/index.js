import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })
        }

    handleSubmit(e) {
        e.preventDefault();

        const { name, email, message } = this.state;
    }

render()
 {
      
  return (
      <div>
          <div className="row contact-div">
              <form 
              className="col s12 m12 l12"
              onSubmit={this.handleSubmit}>
                  <h3>Send a Message</h3>
                  <div className="row">
                      <div className="input-field col s6 m6 l6">
                          <input 
                          id="name"
                          name="name"
                          type="text"
                          className="validate"
                          onChange={this.handleChange} />
                          <label htmlFor="name">Name</label>
                      </div>
                      <div className="input-field col s6 m6 l6">
                          <input
                          id="email"
                          name="email"
                          type="email"
                          className="validate"
                          onChange={this.handleChange} />
                          <label htmlFor="email">Email</label>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12 m12 l12">
                      <textarea
                      id="message"
                      name="message"
                      className="materialize-textarea"
                      onChange={this.handleChange} />
                        <label htmlFor="message">Your Message</label>
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