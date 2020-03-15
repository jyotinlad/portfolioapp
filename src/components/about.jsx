import React, { Component } from "react";
import Fade from "react-reveal";

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <Fade right>
                        <p>A software development professional with over 15 years experience.</p>
                        <p>Specializing in Python, SQL Server, Analysis Services and Power BI.</p>
                        <p>Currently working as a Software Development Lead within the financial services industry, </p>
                        <p>With a Bachelor of Science (BSc) focused in Computer Science from The Nottingham Trent University.</p>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
