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
  height: 100vh;
  /* overflow: hidden; */

  .floor-img {
    position: absolute;
    bottom: -35%;
    left: 0;
    height: 300px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const StyledContent = styled.div`
  h1 {
    color: var(--white);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;
    margin-top: 20%;
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

export const StyledMintSection = styled.div`
  display: flex;
  width: 700px;
  margin-top: 50px;

  .mint-left-section {
    display: flex;
    justify-content: flex-start;
    width: 50%;
    /* padding: 50px 0; */

    .mint-counter {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: var(--white);
      padding: 20px;
      width: 80%;
      z-index: 998;

      .frame-img {
        position: absolute;
        top: -40%;
        left: -7%;
        height: 350px;
        width: 320px;
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
`;
