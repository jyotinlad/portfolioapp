import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { StyledSlideshow } from "./recommendations.styled";

import "bootstrap/dist/css/bootstrap.min.css";

const recommendation_1 = require("../../public/images/recommendations/recommendation_1.png");
const recommendation_2 = require("../../public/images/recommendations/recommendation_2.png");
const recommendation_3 = require("../../public/images/recommendations/recommendation_3.png");
const linkedin_url = "https://www.linkedin.com/in/jyotinlad/details/recommendations/"

export default class Recommendations extends Component {
  render() {
    return (
      <div>
        <section id="recommendations" className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">Recommendations</span>
                      <h2 className="colorlib-heading">Overview</h2>
                      <StyledSlideshow>
                        <div id="home">
                          <Carousel indicators={false}>
                            <Carousel.Item>
                              <img className="d-block w-100" src={recommendation_1} alt="First" />
                              <Carousel.Caption>
                                <p><a className="slideshow-link" href={linkedin_url} target="noreferrer">Read More..</a></p>
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img className="d-block w-100" src={recommendation_2} alt="Second" />
                              <Carousel.Caption>
                                <p><a className="slideshow-link" href={linkedin_url} target="noreferrer">Read More..</a></p>
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img className="d-block w-100" src={recommendation_3} alt="Third" />
                              <Carousel.Caption>
                                <p><a className="slideshow-link" href={linkedin_url} target="noreferrer">Read More..</a></p>
                              </Carousel.Caption>
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </StyledSlideshow>
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
