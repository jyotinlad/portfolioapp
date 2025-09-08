import React, { Component } from "react";
import Icon from "../icon";
import emailjs from '@emailjs/browser';
import Fade from "react-reveal";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("submitted: " + this.state.name + " " + this.state.email + " " + this.state.message);

    let email_params = {
      full_name: this.state.name,
      contact_email: this.state.email,
      message: this.state.message
    };

    emailjs
      .send(
        'service_xn5mmdn', 
        'template_gyt3wxg', 
        email_params, 
        { publicKey: 'MiScIH-zd6f5TQdJW' }
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again. ' + error);
        }
      );

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <section id="contact" className="contact" data-section="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
                <span className="heading-meta">Contact</span>
                <h2 className="colorlib-heading">Get In Touch</h2>
              </div>
            </div>
            <div className="row">
              <Fade left>
                <div className="col-md-5">
                  <div className="colorlib-feature colorlib-feature-sm animate-box">
                    <div className="colorlib-icon">
                      <i>
                        <Icon color="#2c98f0" size={40} icon="linkedin" />
                      </i>
                    </div>
                    <div className="colorlib-text">
                      <p>
                        <a href="https://www.linkedin.com/in/jyotinlad/">Jyotin Lad</a>
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="col-md-7 col-md-push-1">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input name="name" type="text" className="form-control" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                          <input name="email" type="email" className="form-control" placeholder="Email" required value={this.state.email} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="7"
                            className="form-control"
                            placeholder="Message"
                            required
                            value={this.state.message}
                            onChange={this.handleInputChange}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <input type="submit" className="btn btn-primary btn-send-message" value="Send Message" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
