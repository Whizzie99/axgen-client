import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: var(--purple);
  padding: 80px 0;
  padding-bottom: 150px;
`;

export const StyledContent = styled.div`
  display: flex;
  color: var(--white);

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
