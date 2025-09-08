import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { StyledSlideshow } from "./slideshow.styled";

import "bootstrap/dist/css/bootstrap.min.css";

const image_1 = require("../../public/images/meeting.jpg");
const image_2 = require("../../public/images/business_intelligence.jpg");
const image_3 = require("../../public/images/programming.jpg");

export default class Slideshow extends Component {
  render() {
    return (
      <StyledSlideshow>
        <div id="home">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={image_1} alt="First slide" />
              <Carousel.Caption>
                <h3>Hi, I'm Jyotin</h3>
                <p><a className="slideshow-link" href="#about" data-nav-section="about">About</a></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image_2} alt="Second slide" />
              <Carousel.Caption>
                <h3>A Technologist At Heart</h3>
                <p>
                  <a className="slideshow-link" href="#qualifications" data-nav-section="qualificiations">Qualifications</a> <a className="slideshow-link" href="#skills" data-nav-section="skills">Skills</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image_3} alt="Third slide" />
              <Carousel.Caption>
                <h3>Contact Me</h3>
                <p><a className="slideshow-link" href="#contact" data-nav-section="contact">Options</a></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </StyledSlideshow>
    );
  }
}
