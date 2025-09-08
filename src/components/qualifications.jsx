import React, { Component } from "react";
import Fade from "react-reveal";

const aws_architect_badge = require("../public/images/badges/aws_solutions_architect.png");
const google_leader_badge = require("../public/images/badges/google_cloud_digital_leader.png");
const google_architect_badge = require("../public/images/badges/google_professional_cloud_architect.png");
const scrum_og_psm_badge = require("../public/images/badges/scrum_org_professional_scrum_master.png");
const power_bi_badge = require("../public/images/badges/power_bi.png");
const microsoft_badge = require("../public/images/badges/microsoft.png");
const netsuite_badge = require("../public/images/badges/netsuite.png");

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
                        <p><img className="qualification_img" src={aws_architect_badge}/>AWS Certified Solutions Architect</p>
                        <p><img className="qualification_img" src={google_leader_badge}/>Google Cloud Digital Leader</p>
                        <p><img className="qualification_img" src={google_architect_badge}/>Google Professional Cloud Architect</p>
                        <p><img className="qualification_img" src={scrum_og_psm_badge}/>Scrum.org - Professional Scrum Master</p>
                        <p><img className="qualification_img" src={power_bi_badge}/>Power BI - DAX & Data Modeling</p>
                        <p><img className="qualification_img" src={microsoft_badge}/>Microsoft Office User Specialist</p>
                        <p><img className="qualification_img" src={netsuite_badge}/>NetSuite - Administrator & Scripting</p>
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
