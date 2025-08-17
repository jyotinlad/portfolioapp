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
                        <p>A presales specialist within the fintech industry, with an experienced background in software engineering and architecture.</p>
                        <p><b><i>I'm obsessed with helping clients modernise legacy systems..</i></b></p>
                        <p>Having started my career in software engineering and architecture, I saw how with good design and execution, it can transform an organisation. So with that experience, I now focus on helping financial institutions modernise systems and adopt cloud technologies.</p>
                        <p>Expertise:</p>
                        <li>Financial Services Industry (FSI) Domain Knowledge</li>
                        <li>Client & Partner Relationship Management</li>
                        <li>Software Architecture & Design</li>
                        <li>Software Engineering</li>
                        <li>Project Management</li>
                        <li>Business Analysis</li>
                        <li>Data Analysis & Management</li>
                        <li>Business Intelligence</li>
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
