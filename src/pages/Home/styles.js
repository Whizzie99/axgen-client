import styled from "styled-components";
import bgImg from "../../assets/images/home_bg.png";
import aboutBg from "../../assets/images/about_section.png";

export const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: url(${bgImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  .light-rays {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(30%);
    object-fit: contain;
  }

  .character {
    position: absolute;
    bottom: -10px;
    height: 230px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .character-one {
    bottom: 30px;
    left: 22%;
    animation: characterBounce 8s infinite;
  }

  .character-two {
    left: 40%;
    animation: characterBounce 14s infinite;
    /* bottom: 100px; */
  }

  .character-three {
    bottom: 30px;
    right: 22%;
    animation: characterBounce 16s infinite;
  }

  /* .floating-bubbles-section {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    img {
      position: absolute;
      left: 0;
      top: 50%;
      left: 50%;
    }
  } */

  .floating-bubbles-section {
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      object-fit: contain;
    }

    .bubble-one {
      top: 50%;
      left: 55%;
    }

    .bubble-two {
      top: 40%;
      left: 60%;
    }

    .bubble-three {
      top: 30%;
      left: 20%;
    }

    .bubble-four {
      left: 25%;
      height: 15px;
      width: 15px;
    }

    .bubble-five {
      left: 35%;
    }

    .bubble-six {
      left: 45%;
      top: 25%;
    }

    .bubble-seven {
      top: 35%;
      left: 40%;
      height: 10px;
      width: 10px;
    }

    .bubble-eight {
      top: 15%;
      left: 48%;
    }

    .bubble-nine {
      top: 23%;
      left: 60%;
      height: 30px;
      width: 30px;
    }

    .bubble-ten {
      top: 30%;
      left: 70%;
      height: 25px;
      width: 25px;
    }
  }
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  z-index: 99;

  h1 {
    color: var(--white);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;
    margin-top: 15%;
    letter-spacing: 0.06em;
    text-shadow: var(--text-shadow);
    text-align: center;
  }

  p {
    color: var(--white);
    font-size: 1.2em;
    margin-top: 20px;
    text-align: center;
  }

  .mint-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    a {
      padding: 15px 20px;
      color: var(--white);
      text-transform: capitalize;
      text-decoration: none;
      background: var(--purple);
      font-size: 1.1em;
      border-radius: 20px;
    }
  }
`;

export const StyledCustomBg = styled.div`
  background: url(${aboutBg}) !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
`;
