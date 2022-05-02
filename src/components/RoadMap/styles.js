import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: var(--purple);
  color: var(--white);
`;

export const StyledRoadMapSection = styled.div`
  .road-map {
    width: 80%;
    padding: 100px 0;
    margin: 0 auto;

    .road-map-item {
      display: flex;
      align-items: center;

      .road-map-left {
        width: 50%;
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
            font-size: 2.5em;
            z-index: 1;
          }
        }
      }
    }

    .road-map-item:nth-child(even) .road-map-left {
      order: 1;
    }

    /* .road-map-2 .road-map-left,  {
      order: 1;
    } */
  }
`;
