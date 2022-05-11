import styled from "styled-components";

export const StyledWrapper = styled.div``;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
  color: var(--white);

  .copyright p {
    font-weight: 200;
    text-transform: capitalize;
    font-size: 0.9em;
  }

  .footer-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-handles {
    display: flex;
    align-items: center;

    p {
      font-size: 0.9em;
      font-weight: 200;
      text-transform: capitalize;
      margin-right: 20px;
    }

    ul {
      display: flex;
      list-style: none;

      li {
        a {
          text-decoration: none;
        }
      }

      li:nth-child(1) {
        margin-right: 10px;
      }
    }
  }
`;
