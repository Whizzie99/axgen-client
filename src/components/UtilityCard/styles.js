import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  /* padding: 15px; */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  height: 400px;
  border-radius: 20px;
  border-color: #ebc1e6;
  box-shadow: 0 0 5px rgba(235, 193, 230, 0.6),
    inset 0 0 5px rgba(235, 193, 230, 0.5), 0 2px 0 #000;

  .card-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;

    img {
      height: 150px;
      width: 150px;
      object-fit: contain;
    }
  }

  .card-content {
    .card-title {
      text-align: center;
      text-transform: uppercase;
      font-family: var(--font-stack-1);
      background: var(--blue-gradient-2);
      padding: 10px 0;
      color: var(--white);
      font-weight: 400;
      font-size: 1.3em;
      letter-spacing: 2px;
    }

    .card-description {
      padding: 10px 15px;
      color: var(--white);
      font-weight: 200;
      font-size: 0.9em;
      line-height: 1.5;
    }
  }

  /* keyframes */
  @keyframes glow {
    0% {
      border-color: #393;
      box-shadow: 0 0 5px rgba(0, 255, 0, 0.2),
        inset 0 0 5px rgba(0, 255, 0, 0.1), 0 2px 0 #000;
    }
    100% {
      border-color: #6f6;
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.6),
        inset 0 0 10px rgba(0, 255, 0, 0.4), 0 2px 0 #000;
    }
  }
`;
