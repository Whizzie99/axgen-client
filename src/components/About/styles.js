import styled from "styled-components";

export const StyledWrapper = styled.div`
  /* background: var(--purple); */
  position: relative;
  padding: 80px 0;
  padding-bottom: 150px;
  background: transparent;

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
      top: 30%;
      left: 25%;
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
      top: 46%;
      left: 20%;
      height: 20px;
      width: 20px;
    }

    .bubble-five {
      top: 62%;
      left: 22%;
    }

    .bubble-seven {
      top: 85%;
      left: 87%;
    }

    .bubble-eight {
      top: 76%;
      left: 58%;
    }

    .bubble-nine {
      top: 23%;
      left: 65%;
    }
  }
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  color: var(--white);
  z-index: 5;

  .left-content {
    width: 50%;

    h1 {
      font-size: 2.8em;
      text-transform: uppercase;
      line-height: 1.5;
    }

    p {
      font-size: 1em;
      font-style: italic;
      margin-top: 10px;
      line-height: 1.5;
    }
  }

  .right-content {
    width: 50%;
  }
`;
