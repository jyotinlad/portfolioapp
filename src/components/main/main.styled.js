import styled from 'styled-components';

export const StyledMain = styled.nav`
  #colorlib-main {
    width: ${({ open }) => open ? 'calc(100% - 300px)' : 'calc(100%)'};
    float: right;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
  @media screen and (max-width: 900px) {
    #colorlib-main {
      width: 100%;
      padding: 0 1em;
    }
  }
  
  #colorlib-hero {
    min-height: 500px;
    background: #fff url(public/images/loader.gif) no-repeat center center;
    width: 100%;
    float: left;
    margin-bottom: 2em;
    clear: both;
  }
  #colorlib-hero .flexslider {
    border: none;
    z-index: 1;
    margin-bottom: 0;
  }
  #colorlib-hero .flexslider .slides {
    position: relative;
    overflow: visible;
  }
  #colorlib-hero .flexslider .slides li {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
    min-height: 400px;
    position: relative;
  }
  #colorlib-hero .flexslider .flex-control-nav {
    bottom: 20px;
    z-index: 1000;
    left: 20px;
    float: left;
    width: auto;
  }
  @media screen and (max-width: 900px) {
    #colorlib-hero .flexslider .flex-control-nav {
      right: 20px;
      top: 100px;
    }
  }
  #colorlib-hero .flexslider .flex-control-nav li {
    display: block;
    margin-bottom: 10px;
  }
  #colorlib-hero .flexslider .flex-control-nav li a {
    background: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: none;
    box-shadow: none;
    width: 12px;
    height: 12px;
    cursor: pointer;
  }
  #colorlib-hero .flexslider .flex-control-nav li a.flex-active {
    cursor: pointer;
    background: transparent;
    border: 2px solid #2c98f0;
  }
  #colorlib-hero .flexslider .flex-direction-nav {
    display: none;
  }
  #colorlib-hero .flexslider .slider-text {
    display: table;
    opacity: 0;
    min-height: 500px;
    z-index: 9;
  }
  #colorlib-hero .flexslider .slider-text > .slider-text-inner {
    display: table-cell;
    vertical-align: middle;
    min-height: 700px;
    padding: 2.5em;
    position: relative;
  }
  @media screen and (max-width: 900px) {
    #colorlib-hero .flexslider .slider-text > .slider-text-inner {
      text-align: center;
    }
  }
  #colorlib-hero .flexslider .slider-text > .slider-text-inner h1,
  #colorlib-hero .flexslider .slider-text > .slider-text-inner h2 {
    margin: 0;
    padding: 0;
    color: black;
    font-family: "Playfair Display", Georgia, serif;
  }
  #colorlib-hero .flexslider .slider-text > .slider-text-inner h1 {
    margin-bottom: 20px;
    font-size: 60px;
    line-height: 1.3;
    font-weight: 700;
  }
  @media screen and (max-width: 900px) {
    #colorlib-hero .flexslider .slider-text > .slider-text-inner h1 {
      font-size: 28px;
    }
  }
  #colorlib-hero .flexslider .slider-text > .slider-text-inner h2 {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 30px;
    font-weight: 300;
    font-family: "Quicksand", Arial, sans-serif;
  }
  #colorlib-hero .flexslider .slider-text > .slider-text-inner h2 a {
    color: rgba(44, 152, 240, 0.8);
    border-bottom: 1px solid rgba(44, 152, 240, 0.7);
  }
  #colorlib-hero .flexslider .slider-text > .slider-text-inner .heading-section {
    font-size: 50px;
  }
  @media screen and (max-width: 900px) {
    #colorlib-hero
      .flexslider
      .slider-text
      > .slider-text-inner
      .heading-section {
      font-size: 30px;
    }
  }
  #colorlib-hero .flexslider .slider-text > .slider-text-inner s .colorlib-lead {
    font-size: 20px;
    color: #fff;
  }
  #colorlib-hero .flexslider .slider-text > .slider-text-inner p {
    margin-bottom: 0;
  }
  #colorlib-hero .flexslider .slider-text > .slider-text-inner .btn {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #000;
    padding: 10px 15px !important;
    border: none;
    font-weight: 400;
  }
  #colorlib-hero .flexslider .slider-text > .slider-text-inner .btn.btn-learn {
    color: #000;
    border: 1px solid #000;
    background: transparent !important;
  }
  #colorlib-hero
    .flexslider
    .slider-text
    > .slider-text-inner
    .btn.btn-learn:hover {
    background: transparent !important;
    border: 1px solid #000 !important;
  }
  @media screen and (max-width: 900px) {
    #colorlib-hero .flexslider .slider-text > .slider-text-inner .btn {
      width: 100%;
    }
  }
  
  body.offcanvas {
    overflow-x: hidden;
  }
  body.offcanvas #colorlib-aside {
    -moz-transform: translateX(0);
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
    width: 300px;
    background: #f2f3f7;
    z-index: 999;
    position: fixed;
  }
  body.offcanvas #colorlib-main,
  body.offcanvas .colorlib-nav-toggle {
    top: 0;
    -moz-transform: translateX(300px);
    -webkit-transform: translateX(300px);
    -ms-transform: translateX(300px);
    -o-transform: translateX(300px);
    transform: translateX(300px);
  }
  
  .colorlib-narrow-content {
    padding: 0 2.5em;
  }
  @media screen and (max-width: 900px) {
    .colorlib-narrow-content {
      padding: 0;
    }
  }
  
  .no-gutters {
    margin: 0;
    padding: 0;
  }
  
  .colorlib-about,
  .colorlib-services,
  .colorlib-contact {
    padding-top: 2em;
    padding-bottom: 2em;
    clear: both;
    width: 100%;
    display: block;
  }
  @media screen and (max-width: 900px) {
    .colorlib-about,
    .colorlib-services,
    .colorlib-contact {
      padding-top: 5em;
      padding-bottom: 8em;
    }
  }
  
  .colorlib-heading {
    font-size: 18px;
    margin-bottom: 2em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 1.8;
    position: relative;
  }
  .colorlib-heading span {
    display: block;
  }
  @media screen and (max-width: 900px) {
    .colorlib-heading {
      margin-bottom: 3em;
    }
  }
  
  .heading-meta {
    margin-bottom: 15px;
    display: block;
    font-size: 10px;
    text-transform: uppercase;
    color: #999999;
    font-weight: 500;
    letter-spacing: 5px;
  }
  
  .about-img {
    width: 100%;
    height: 600px;
    margin-bottom: 30px;
  }
  
  .about-desc h3 {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 500;
  }
  
  .services {
    margin-bottom: 30px;
    padding: 1.5em;
    -webkit-box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);
    -moz-box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);
    -ms-box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);
    -o-box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);
    box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);
    border-bottom: 2px solid #2c98f0;
  }
  .services .icon2 {
    display: block;
    margin-bottom: 20px;
  }
  .services .icon2 i {
    font-size: 30px;
    color: #2c98f0;
  }
  .services h3 {
    font-family: "Quicksand", Arial, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
  .services.color-2 {
    border-bottom: 2px solid #ec5453;
  }
  .services.color-2 .icon2 i {
    color: #ec5453;
  }
  .services.color-3 {
    border-bottom: 2px solid #f9bf3f;
  }
  .services.color-3 .icon2 i {
    color: #f9bf3f;
  }
  .services.color-4 {
    border-bottom: 2px solid #a84cb8;
  }
  .services.color-4 .icon2 i {
    color: #a84cb8;
  }
  .services.color-5 {
    border-bottom: 2px solid #2fa499;
  }
  .services.color-6 {
    border-bottom: 2px solid #4054b2;
  }
  
  .services {
    margin-bottom: 80px;
    position: relative;
    z-index: 0;
  }
  @media screen and (max-width: 900px) {
    .services {
      margin-bottom: 4em;
    }
  }
  .services .icon {
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    width: 100px;
    height: 50px;
    display: table;
    margin: 0 auto;
    background: #2c98f0;
  }
  .services .icon:before,
  .services .icon:after {
    position: absolute;
    left: 0;
    right: 0;
    content: "";
  }
  .services .icon:before {
    top: -30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 50px 30px 50px;
    border-color: transparent transparent #2c98f0 transparent;
  }
  .services .icon:after {
    bottom: -30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 50px 0 50px;
    border-color: #2c98f0 transparent transparent transparent;
  }
  .services .icon i {
    font-size: 30px;
    color: #fff;
    z-index: 1;
    display: table-cell;
    vertical-align: middle;
  }
  .services .desc {
    margin-top: 60px;
  }
  .services .desc h3 {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .services.color-2 .icon {
    background: #ec5453;
  }
  .services.color-2 .icon:before {
    border-color: transparent transparent #ec5453 transparent;
  }
  .services.color-2 .icon:after {
    border-color: #ec5453 transparent transparent transparent;
  }
  .services.color-3 .icon {
    background: #f9bf3f;
  }
  .services.color-3 .icon:before {
    border-color: transparent transparent #f9bf3f transparent;
  }
  .services.color-3 .icon:after {
    border-color: #f9bf3f transparent transparent transparent;
  }
  .services.color-4 .icon {
    background: #a84cb8;
  }
  .services.color-4 .icon:before {
    border-color: transparent transparent #a84cb8 transparent;
  }
  .services.color-4 .icon:after {
    border-color: #a84cb8 transparent transparent transparent;
  }
  .services.color-5 .icon {
    background: #2fa499;
  }
  .services.color-5 .icon:before {
    border-color: transparent transparent #2fa499 transparent;
  }
  .services.color-5 .icon:after {
    border-color: #2fa499 transparent transparent transparent;
  }
  .services.color-6 .icon {
    background: #4054b2;
  }
  .services.color-6 .icon:before {
    border-color: transparent transparent #4054b2 transparent;
  }
  .services.color-6 .icon:after {
    border-color: #4054b2 transparent transparent transparent;
  }
  
  .colorlib-feature {
    text-align: left;
    width: 100%;
    float: left;
    margin-bottom: 40px;
    position: relative;
  }
  .colorlib-feature .colorlib-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    display: table;
    text-align: center;
    background: #f2f3f7;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    border-radius: 2px;
  }
  .colorlib-feature .colorlib-icon i {
    display: table-cell;
    vertical-align: middle;
    color: #2c98f0;
    font-size: 60px;
    height: 100px;
  }
  @media screen and (max-width: 1200px) {
    .colorlib-feature .colorlib-icon i {
      font-size: 40px;
    }
  }
  .colorlib-feature .colorlib-text {
    padding-left: 120px;
    width: 100%;
  }
  .colorlib-feature .colorlib-text h2,
  .colorlib-feature .colorlib-text h3 {
    margin: 0;
    padding: 0;
  }
  .colorlib-feature .colorlib-text h3 {
    font-weight: 500;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .colorlib-feature.colorlib-feature-sm .colorlib-text {
    margin-top: 30px;
  }
  .colorlib-feature.colorlib-feature-sm .colorlib-icon i {
    color: #2c98f0;
    font-size: 40px;
  }
  @media screen and (max-width: 1200px) {
    .colorlib-feature.colorlib-feature-sm .colorlib-icon i {
      font-size: 28px;
    }
  }
  
  .colorlib-bg-color {
    background: #fafafa;
    position: relative;
  }
  
  .pagination {
    padding: 0;
  }
  .pagination li {
    margin: 2px;
  }
  .pagination li a {
    color: #000;
    background: transparent;
    color: #000;
    margin: 2px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    border-radius: 0;
  }
  .pagination li a:first-child {
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    border-radius: 2px;
  }
  .pagination li a:hover,
  .pagination li a:focus {
    background: #2c98f0;
    color: #fff;
    border: 1px solid #2c98f0;
  }
  @media screen and (max-width: 900px) {
    .pagination li a {
      padding: 7px 15px;
    }
  }
  .pagination li.active a {
    background: #2c98f0;
    border: 1px solid #2c98f0 !important;
  }
  .pagination li.active a:hover,
  .pagination li.active a:focus {
    background: #2c98f0;
    color: #fff;
    border: 1px solid #2c98f0 !important;
  }
  
  .form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: transparent;
    border: transparent;
    background: #f2f3f7;
    height: 54px;
    font-size: 16px;
    font-weight: 400;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    border-radius: 0;
  }
  .form-control:active,
  .form-control:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: transparent;
    background: #f0f0f0;
  }
  
  #message {
    height: 130px;
  }
  
  .row-pt-md {
    padding-top: 3em;
  }
  
  .col-padding {
    padding: 10px !important;
  }
`;