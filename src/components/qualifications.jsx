import React, { Component } from "react";
import Fade from "react-reveal";

const aws_logo = require("../public/images/aws-solutions-architect.png");
const google_leader_logo = require("../public/images/google-cloud-digital-leader.png");
const google_architect_logo = require("../public/images/google-professional-cloud-architect.png");
const power_bi_logo = require("../public/images/power_bi_logo.png");
const microsoft_logo = require("../public/images/microsoft_logo.png");
const netsuite_logo = require("../public/images/netsuite_logo.png");

export default class Qualifications extends Component {
  render() {
    return (
      <div>
        <section id="qualifications" data-section="qualifications">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">Qualifications</span>
                      <h2 className="colorlib-heading">Overview</h2>
                      <Fade right>
                        <p><img className="qualification_img" src={aws_logo}/>AWS Certified Solutions Architect</p>
                        <p><img className="qualification_img" src={google_leader_logo}/>Google Cloud Digital Leader</p>
                        <p><img className="qualification_img" src={google_architect_logo}/>Google Professional Cloud Architect</p>
                        <p><img className="qualification_img" src={power_bi_logo}/>Power BI - DAX & Data Modeling</p>
                        <p><img className="qualification_img" src={microsoft_logo}/>Microsoft Office User Specialist</p>
                        <p><img className="qualification_img" src={netsuite_logo}/>NetSuite - Administrator & Scripting</p>
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
