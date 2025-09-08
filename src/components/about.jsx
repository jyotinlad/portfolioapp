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
                        <p>A hard working professional who has a proven track record in sales and delivery, not just an individual, but the teams I have lead and mentored. Focused on delivering commitments with quality, and highly adaptive to fast paced business needs.</p>
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
