import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .section-title {
    display: inline-block;
    text-align: center;
    background: var(--blue-gradient);
    text-transform: uppercase;
    color: var(--white);
    padding: 15px;
    border-radius: 20px;
    margin: 0 auto;
  }
`;
