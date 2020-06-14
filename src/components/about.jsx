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
                        <p>A hard working professional who has a proven track record in delivery, not just an individual, but the teams I have lead and mentored. Focused on delivering commitments with quality, and highly adaptive to fast paced business needs.</p>
                        <p>Specialising in the analysis of business needs to create financial and business intelligence solutions, using an Agile approach. With over 15 years experience, primarily in the FinTech industry.</p>
                        <p>Attaining a Bachelor of Science (BSc) focused in Computer Science, from The Nottingham Trent University.</p>
                        <p>Expertise:</p>
                        <li>Business Analysis</li>
                        <li>Data Analysis</li>
                        <li>Project Management</li>
                        <li>Software Development Methodologies (Agile Scrum & Kanban)</li>
                        <li>Software Architecture Design, Architecture & Development</li>
                        <li>Data Management, Data Governance & Business Intelligence</li>
                        <li>Software as a Service (SaaS)</li>
                        <li>Software Engineering (Python, Perl, JavaScript & SQL)</li>
                        <li>Vendor Management</li>
                        <li>NetSuite (Administrator & SuiteScripting)</li>
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
