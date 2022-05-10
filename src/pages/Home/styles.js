import styled from "styled-components";
import bgImg from "../../assets/images/home_bg.png";
// import aboutBg from "../../assets/images/about_section.png";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
    bottom: 20px;
    height: 230px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .character-one {
    display: none;
    bottom: 45px;
    left: 22%;
    /* animation: characterBounce 8s infinite; */
  }

  .character-two {
    left: 25%;
    /* animation: characterBounce 14s infinite; */
    /* bottom: 100px; */
  }

  .character-three {
    display: none;
    bottom: 45px;
    right: 22%;
    /* animation: characterBounce 16s infinite; */
  }

  .character-one:hover,
  .character-two:hover,
  .character-three:hover {
    animation: characterBounce 3s infinite;
  }

  .arc-img {
    position: absolute;
    bottom: -40px;
    left: 0;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .floating-bubbles-section {
    img {
      position: absolute;
      top: 65% !important;
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

  @media screen and (min-width: 1200px) {
    display: block;

    .character-two {
      left: 40%;
      /* animation: characterBounce 14s infinite; */
      /* bottom: 100px; */
    }

    .character-one,
    .character-three {
      display: block;
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
  margin-top: -25%;
  /* margin-top: 50%; */
  z-index: 99;

  h1 {
    color: var(--white);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;
    margin-top: 30%;
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

  @media screen and (min-width: 1200px) {
    margin-top: 0;
    h1 {
      margin-top: 15%;
    }
  }
`;

export const StyledCustomBg = styled.div`
  background: linear-gradient(180deg, #21165f 0.21%, #53217a 63%);
`;
