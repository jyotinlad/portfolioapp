import styled from 'styled-components';

export const StyledMenu = styled.nav`
  #aside {
    padding-top: 1em;
    padding-bottom: 40px;
    float: left;
    width: 300px;
    position: fixed;
    overflow: scroll;
    z-index: 1001;
    background: #f2f3f7;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    height: 100%;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  }
  #aside .author-img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-bottom: 30px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    display: block;
    object-fit: cover;
  }
  .author-img {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
  }
  #aside #logo {
    text-align: right;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 0.5em;
    display: block;
    width: 100%;
  }
  #aside #logo a {
    color: #2c98f0;
    display: block;
    text-align: center;
    color: #000;
    padding-right: 0.3em;
    text-decoration: none !important;
  }
  #aside #logo a:hover, a:active, a:focus {
    outline: none;
    text-decoration: none !important;
  }
  #menu-sections {
    display: block;
    width: 100%;
  }
  #menu-sections .collapse {
    display: block !important;
  }
  #menu-sections ul {
    text-align: center;
    margin: 0;
    padding: 0;
  }
  #menu-sections ul li {
    margin: 0 0 10px 0;
    padding: 0;
    list-style: none;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  #aside #menu-sections ul li {
    margin: 0 0 10px 0;
    padding: 0;
    list-style: none;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  #aside #menu-sections ul li a {
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
    position: relative;
    padding: 10px 0;
    font-family: "Quicksand", Arial, sans-serif;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
  #aside #menu-sections ul li a:after {
    content: "";
    position: absolute;
    height: 1px;
    bottom: 7px;
    left: 0;
    right: 0;
    background-color: #2c98f0;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -ms-transform: scaleX(0);
    -o-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -ms-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  #aside #menu-sections ul li a:hover:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    -moz-transform: scaleX(1);
    -ms-transform: scaleX(1);
    -o-transform: scaleX(1);
    transform: scaleX(1);
  }
  #aside #menu-sections ul li.active a {
    color: #2c98f0;
  }
  #aside #menu-sections ul li.active a:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    -moz-transform: scaleX(1);
    -ms-transform: scaleX(1);
    -o-transform: scaleX(1);
    transform: scaleX(1);
  }
  #menu-sections {
    display: block;
    width: 100%;
  }
  #menu-ext-links .collapse {
    display: block !important;
  }
  #menu-ext-links ul {
    text-align: center;
    margin: 0;
    padding: 0;
  }
  #menu-ext-links ul li {
    margin: 0 0 10px 0;
    padding: 0;
    list-style: none;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .footer {
    font-size: 15px;
    text-align: center;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    padding: 0 20px;
    width: 100%;
  }
`;