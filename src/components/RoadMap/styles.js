import styled from "styled-components";
import bgImg from "../../assets/images/under_sea.png";

export const StyledWrapper = styled.div`
  position: relative;
  padding: 50px 0;
  /* background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  /* background: var(--purple); */
  background: transparent;
  color: var(--white);

  .under-sea-img {
    position: absolute;
    bottom: 0;
    left: 0;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .left-map-flower {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 85%;
    z-index: 1;

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .right-map-flower {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 85%;
    z-index: 1;

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .school-of-fishes-left {
    position: absolute;
    top: 30%;
    left: 0;
  }

  .school-of-fishes-right {
    position: absolute;
    top: 15%;
    right: 0;
  }

  .horse-fish-one {
    position: absolute;
    top: 15%;
    left: 45%;
  }

  .jelly-fish-one {
    position: absolute;
    top: 40%;
    left: 50%;
  }

  .jelly-fish-two {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: rotate(20deg);
  }

  .horse-fish-two {
    position: absolute;
    top: 30%;
    right: 10%;
  }

  .bubble-section {
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      object-fit: contain;
    }

    .bubble-one {
      left: 55%;
      height: 55px;
      width: 55px;
    }

    .bubble-two {
      top: 80%;
      left: 60%;
      height: 15px;
      width: 15px;
    }

    .bubble-three {
      top: 70%;
      left: 45%;
      height: 60px;
      width: 60px;
    }

    .bubble-four {
      top: 56%;
      left: 24%;
      height: 30px;
      width: 30px;
    }

    .bubble-five {
      top: 62%;
      left: 35%;
    }

    .bubble-seven {
      top: 75%;
      left: 87%;
    }

    .bubble-eight {
      top: 10%;
      left: 87%;
    }

    .bubble-nine {
      top: 25%;
      left: 45%;
    }

    .bubble-ten {
      top: 35%;
      left: 22%;
    }

    .bubble-eleven {
      top: 40%;
      left: 75%;
    }

    .bubble-twelve {
      top: 35%;
      left: 15%;
    }
  }
`;

export const StyledRoadMapSection = styled.div`
  position: relative;
  z-index: 2;
  .road-map {
    /* width: 80%; */
    padding: 100px 0;
    margin: 0 auto;

    .road-map-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 15px 0;

      .road-map-left {
        /* width: 50%; */

        .road-map-description {
          p {
            font-style: italic;

            b {
              font-weight: 800;
            }
          }
        }
      }

      .road-map-right {
        display: flex;
        align-items: center;
        justify-content: center;
        /* width: 50%; */

        .road-map-bubble {
          position: relative;
          z-index: 2;

          .road-map-step {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 4em;
            z-index: 1;
          }
        }
      }
    }

    .road-map-item:nth-child(even) .road-map-left {
      order: 1;
    }

    .road-map-item:nth-child(1) .road-map-bubble {
      animation: characterBounce 5s infinite;
    }

    .road-map-item:nth-child(2) .road-map-bubble {
      animation: characterBounce 6s infinite;
    }

    .road-map-item:nth-child(3) .road-map-bubble {
      animation: characterBounce 4s infinite;
    }

    .road-map-item:nth-child(4) .road-map-bubble {
      animation: characterBounce 2.5s infinite;
    }
    .road-map-item:nth-child(5) .road-map-bubble {
      animation: characterBounce 5s infinite;
    }

    .road-map-item:nth-child(6) .road-map-bubble {
      animation: characterBounce 3s infinite;
    }

    .road-map-item:nth-child(7) .road-map-bubble {
      animation: characterBounce 4s infinite;
    }

    /* .road-map-2 .road-map-left,  {
      order: 1;
    } */
  }

  @media screen and (max-width: 767px) {
    .road-map-item .road-map-left {
      order: 1;
      margin-bottom: 15px;
    }
  }

  @media screen and (min-width: 1200px) {
    .road-map {
      width: 80%;

      .road-map-item {
        flex-direction: row;
        align-items: center;

        .road-map-left,
        .road-map-right {
          width: 50%;
        }
      }
    }
  }
`;
