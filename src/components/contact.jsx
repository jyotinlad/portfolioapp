import React, { Component } from "react";
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
      user_name: this.state.name,
      user_email: this.state.email,
      message: this.state.message
    };

    // console.log("about to send");
    // emailjs.send("mailjet", "portfolio_contact", email_params, "user_o9dNiLJCzkIThqNzYK9yZ").then(
    //   result => {
    //     console.log(result.text);
    //   },
    //   error => {
    //     console.log(error.text);
    //   }
    // );

    // secret key eb5ff129f209951fac574445acfa89ee
    // public key 97fe24a7f9ee2a97a39929c9feaa4353

    emailjs
      .sendForm(
        'service_1fp98yx', 
        'template_gyt3wxg', 
        email_params, 
        '97fe24a7f9ee2a97a39929c9feaa4353'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again. ' + error.text);
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
