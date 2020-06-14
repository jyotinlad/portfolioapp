import React, { Component } from "react";
import Icon from "../icon";

import Fade from "react-reveal";

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
                        <Icon color="#444" size={40} icon="lightbulb" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Business Analysis</h3>
                      <p>A proven track record of analysing business needs to design and implement, solutions primarily in the financial services domain.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-2">
                    <span className="icon">
                      <i>
                        <Icon color="#444" size={40} icon="bi-graph" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Business Intelligence</h3>
                      <p>Experienced in the art of showcasing key business metrics using tools such as Power BI and Tableau. Together with building Data Warehouses to feed and drive these tools.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-3">
                    <span className="icon">
                      <i>
                        <Icon color="#444" size={40} icon="loop" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Agile</h3>
                      <p>An Agile practioner with many years of experience years using the Scrum and Kanban methodologies. Being a Scrum Master and Product Owner.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-4">
                    <span className="icon">
                      <i>
                        <Icon color="#444" size={40} icon="database" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Back-End Development</h3>
                      <p>Primarily using Python, Perl and SQL to create a range of solutions, including API's, Data Warehouses, and ETL processes. Utilizing Unit & Integration Tests, as well as Continous Integration / Deployment.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-5">
                    <span className="icon">
                      <i>
                        <Icon color="#444" size={40} icon="sphere" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Web Development</h3>
                      <p>Knowledge in building websites using JavaScript, React, HTML and CSS.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="col-md-4 text-center animate-box">
                  <div className="services color-6">
                    <span className="icon">
                      <i>
                        <Icon color="#444" size={40} icon="cogs" />
                      </i>
                    </span>
                    <div className="desc">
                      <h3>Vendor Management</h3>
                      <p>Managing the integration and maintainence of third party solutions such as Azure, AWS, NetSuite and DosuSign.</p>
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
