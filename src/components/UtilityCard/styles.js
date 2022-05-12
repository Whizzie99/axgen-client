import styled from "styled-components";

export const StyledCard = styled.div`
  /* position: relative; */
  /* padding: 15px; */
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
  height: 480px;
  border-radius: 20px;
  border: 0.1rem solid #fff;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.3rem #bc13fe,
    0 0 0.8rem #bc13fe, 0 0 0.8rem #bc13fe, inset 0 0 0.8rem #bc13fe;
  /* box-shadow: 0 0 0.8rem #fff, 0 0 0.5rem #fff, 0 0 0.8rem #bc13fe,
    0 0 0.8rem #bc13fe, 0 0 0.8rem #bc13fe, inset 0 0 0.5rem #bc13fe; */
  /* z-index: 2; */
  /* border-color: #ebc1e6; */
  /* box-shadow: 0 0 5px rgba(235, 193, 230, 0.6),
    inset 0 0 5px rgba(235, 193, 230, 0.5), 0 2px 0 #000; */

  .card-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    img {
      height: 150px;
      width: 150px;
      object-fit: contain;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }

  .card-content {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    .card-title {
      text-align: center;
      text-transform: uppercase;
      font-family: var(--font-stack-1);
      background: var(--blue-gradient-2);
      padding: 10px 0;
      /* padding-bottom: 0; */
      color: var(--white);
      font-weight: 400;
      font-size: 1.2em;
      letter-spacing: 2px;
    }

    .card-description {
      display: flex;
      align-items: flex-end;
      /* position: absolute; */
      /* bottom: -200%; */
      /* left: 0; */
      /* width: 100%; */
      padding: 10px 15px;
      /* padding-top: 25px; */
      color: var(--white);
      font-weight: 200;
      font-size: 0.8em;
      line-height: 1.3;
      background: linear-gradient(
        180deg,
        rgba(65, 59, 148, 0) 0%,
        rgba(62, 55, 141, 0.45) 13.02%,
        rgba(58, 50, 134, 0.837) 28.21%,
        rgba(47, 34, 109, 0.9) 55.13%,
        rgba(60, 28, 108, 0.9) 77.08%,
        rgba(63, 20, 97, 0.9) 96.35%
      );
      backdrop-filter: blur(1px);
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      height: 232px;
      /* transition: all 0.4s ease; */
      /* z-index: 1; */
    }
  }

  /* :hover {
    .card-description {
      bottom: 0;
    }
  } */

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
