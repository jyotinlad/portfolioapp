import React, { Component } from "react";
import Icon from "../icon";

import Fade from "react-reveal";

// update the selection.json file by selecting icons on the following site and exporting the file
// https://icomoon.io/app/#/select

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section id="skills" className="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Skills</span>
                <h2 className="colorlib-heading">Overview</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-1">
                    <span className="icon">
                      <i>
                        <Icon color="#ffffffff" size={40} icon="bank" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>FSI Domain Knowledge</h3>
                      <p>I offer deep expertise in the Financial Services Industry (FSI), with a focus on core banking systems. My knowledge spans across retail and corporate banking, as well as financial markets. I also stay up to date on emerging areas like crypto / digital assets, being able to speak to a wide range of client needs.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-2">
                    <span className="icon">
                      <i>
                        <Icon color="#ffffffff" size={40} icon="cogs" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Software Architecture & Engineering</h3>
                      <p>My skills include designing robust solutions using various architecture design patterns. I am proficient in modern cloud technologies and possess a strong background in software engineering, with hands-on experience in languages like Python and JavaScript. This allows me to effectively bridge the gap between business requirements and technical implementation.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-3">
                    <span className="icon">
                      <i>
                        <Icon color="#ffffffff" size={40} icon="stack" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Solution Design & Implementation</h3>
                      <p>I have extensive experience in the full lifecycle of solution development. With the ability to thoroughly analyse business challenges and applying my problem-solving skills to craft tailored solutions. I conduct detailed business analysis to inform the scoping and solution design, and I'm adept at overseeing the successful implementation of FSI and data solutions.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-4">
                    <span className="icon">
                      <i>
                        <Icon color="#ffffffff" size={40} icon="users" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Client & Partner Relationship Management</h3>
                      <p>I excel at building and nurturing strong relationships with clients and partners. My skills include clear and persuasive communication, delivering compelling presentations and technical demos, and leading interactive workshops to ensure all stakeholders are aligned and engaged.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-5">
                    <span className="icon">
                      <i>
                        <Icon color="#ffffffff" size={40} icon="user-check" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Project Management</h3>
                      <p>I am skilled in coordinating complex projects, ensuring smooth execution from start to finish. My experience in working within an agile framework allows me to collaborate effectively with cross-functional teams and adapt to changing requirements, fostering a spirit of teamwork and shared success.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-6">
                    <span className="icon">
                      <i>
                        <Icon color="#ffffffff" size={40} icon="bi-graph" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Data Management & Business Intelligence</h3>
                      <p>I have helped organizations harness the power of their data. Being proficient in the principles of managing data and leveraging business intelligence tools to transform raw information into actionable insights. Helping clients and organisations to make informed decisions and optimize their operations.</p>
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
