import styled from "styled-components";

export const StyledSlideshow = styled.nav`
  @media screen and (max-width: 900px) {
    padding-top: 1em;
    padding-bottom: 1em;
  }
  
  .d-block {
    height: 100vh;
    opacity: 0.75;
    object-fit: cover;
  }

  h3 {
    text-align: right;
    padding: 20px 0px;
  }

  p {
    text-align: right;
  }

  a:link, a:visited {
    color: black;
    text-decoration: none;
  }

  .slideshow-link {
    background-color: #e7e7e7;
    font-size: 16px;
    padding: 14px 40px;
    border-radius: 12px;
    opacity: 0.6;
  }
`;