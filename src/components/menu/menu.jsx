import React from 'react'
import { StyledMenu } from './menu.styled';
import Icon from '../../icon'
import { bool } from 'prop-types';

const profile_image = require("../../public/images/about.jpg");

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div>
        <nav href="#navbar" className="nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></nav>
        <aside id="aside">
          <div>
            <br/>
            <img className="author-img" src={profile_image} alt="centered image"/>
            <h1 id="logo"><a href="index.html">Jyotin Lad</a></h1>
          </div>
          <nav id="menu-sections" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li><a href="#home" data-nav-section="home">Home</a></li>
                <li><a href="#about" data-nav-section="about">About</a></li>
                <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                <li><a href="#contact" data-nav-section="contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <nav id="menu-ext-links">
            <br/>
            <ul>
              <li><a href="https://www.linkedin.com/in/jyotinlad/" target="_blank" rel="noopener noreferrer"><Icon color="#444" size={30} icon="linkedin"/></a></li>
              <li><a href="https://github.com/jyotinlad" target="_blank" rel="noopener noreferrer"><Icon color="#444" size={30} icon="github"/></a></li>
            </ul>
          </nav>
          <div className="footer">
            <br/>
            <br/>
            <p><small>Made With <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a></small></p>
          </div>
        </aside>
      </div>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;