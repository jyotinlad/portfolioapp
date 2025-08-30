import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { bool } from 'prop-types';
import About from '../about';
import Contact from '../contact';
import Qualifications from '../qualifications';
import Slideshow from '../slideshow/slideshow';
import Skills from '../skills';
import { StyledMain } from './main.styled';

const Main = ({ open }) => {
  return (
    <StyledMain open={open}>
		  <div id="colorlib-main">
        <ScrollIntoView selector="#home" smooth="true">
          <Slideshow></Slideshow>
        </ScrollIntoView>
        <ScrollIntoView selector="#about" smooth="true">
          <About></About>
        </ScrollIntoView>
        <ScrollIntoView selector="#about" smooth="true">
          <Qualifications></Qualifications>
        </ScrollIntoView>
        <ScrollIntoView selector="#skills" smooth="true">
          <Skills></Skills>
        </ScrollIntoView>
        <ScrollIntoView selector="#contact" smooth="true">
          <Contact></Contact>
        </ScrollIntoView>
        {/* <ScrollIntoView selector="#contact" smooth="true">
          <LinkedInProfile></LinkedInProfile>
        </ScrollIntoView> */}
      </div>
    </StyledMain>
  )
}

Main.propTypes = {
  open: bool.isRequired,
}

export default Main;
