import styled from "styled-components";

export const StyledSlideshow = styled.nav`
  @media screen and (max-width: 900px) {
    padding-top: 1em;
    padding-bottom: 1em;
  }
  
  .d-block {
    height: 40vh;
    object-fit: contain;
  }

  p {
    text-align: right;
    padding: 0px 0px;
  }

  a:link, a:visited {
    color: black;
    text-decoration: none;
  }

  .slideshow-link {
    background-color: #e7e7e7;
    font-size: 14px;
    padding: 10px 20px;
    border-radius: 12px;
    opacity: 0.5;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(1);
  }
`;