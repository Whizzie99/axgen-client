import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    83.5% 87.13% at 50% 27.08%,
    #019ffa 0%,
    #0172e1 73.96%
  );
  /* height: 100vh; */
  /* overflow: hidden; */

  .light-rays {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(30%);
    object-fit: contain;
  }

  .floor-img {
    position: absolute;
    bottom: -32%;
    left: 0;
    height: 300px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
    height: 100vh;

    .floor-img {
      bottom: -35%;
    }
  }
`;

export const StyledContent = styled.div`
  position: relative;
  z-index: 2;
  h1 {
    color: var(--white);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;
    margin-top: 35%;
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
    margin-top: 20px;

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
    h1 {
      margin-top: 15%;
    }
  }
`;

export const StyledMintSection = styled.div`
  display: flex;
  width: 700px;
  margin-top: 70px;

  .mint-left-section {
    display: flex;
    justify-content: center;
    width: 100%;
    /* padding: 50px 0; */

    .mint-counter {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: var(--white);
      padding: 40px 20px;
      width: 40%;
      z-index: 998;

      .frame-img {
        position: absolute;
        top: -10%;
        left: -14%;
        height: 300px;
        width: 350px;
        object-fit: contain;
        z-index: 2;
      }
    }

    .mint-total {
      font-size: 2em;
      font-weight: 800;
      color: var(--blue-3);
      letter-spacing: 2px;
      margin: 10px 0;
    }

    .mint-count {
      position: relative;
      z-index: 3;
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 0 auto;
        .mint-group {
          display: flex;
          justify-content: center;
          align-items: center;
          /* margin: 0 auto; */
          margin-bottom: 10px;

          .mint-count-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            color: var(--white);
            background: var(--blue-3);
            border: none;
            margin: 0 10px;
            font-family: var(--font-stack);
            font-size: 1.1em;
          }

          .mint-count-current {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            background: var(--blue-3);
            color: var(--white);
            border: none;
            border-radius: 20px;
            padding: 10px;
            /* margin: 0 auto; */
          }
        }

        .print-mint {
          text-align: center;
          color: var(--white);
          background: var(--blue-3);
          border: none;
          padding: 10px;
          border-radius: 20px;
          margin-top: 10px;
        }
      }
    }
  }

  .mint-right-section {
    display: none;
    width: 50%;

    .characters-gif {
      position: relative;
      width: 280px;
      height: 245px;
      margin-left: 50px;
      z-index: 1;

      .characters-gif-img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }

      .clay-frame {
        position: absolute;
        top: -11%;
        left: -2%;
        height: 290px;
        width: 290px;
        object-fit: contain;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .mint-left-section {
      width: 50%;
      justify-content: flex-start;

      .mint-counter {
        width: 80%;
        padding: 20px;

        .frame-img {
          left: -10%;
        }
      }
    }

    .mint-right-section {
      display: block;
    }
  }
`;
