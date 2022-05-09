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

    img {
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const StyledRoadMapSection = styled.div`
  position: relative;
  z-index: 2;
  .road-map {
    width: 80%;
    padding: 100px 0;
    margin: 0 auto;

    .road-map-item {
      display: flex;
      align-items: center;

      .road-map-left {
        width: 50%;

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
        width: 50%;

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
      animation: characterBounce 8s infinite;
    }

    .road-map-item:nth-child(2) .road-map-bubble {
      animation: characterBounce 10s infinite;
    }

    .road-map-item:nth-child(3) .road-map-bubble {
      animation: characterBounce 12s infinite;
    }

    .road-map-item:nth-child(4) .road-map-bubble {
      animation: characterBounce 15s infinite;
    }
    .road-map-item:nth-child(5) .road-map-bubble {
      animation: characterBounce 5s infinite;
    }

    .road-map-item:nth-child(6) .road-map-bubble {
      animation: characterBounce 11s infinite;
    }

    .road-map-item:nth-child(7) .road-map-bubble {
      animation: characterBounce 14s infinite;
    }

    /* .road-map-2 .road-map-left,  {
      order: 1;
    } */
  }
`;
