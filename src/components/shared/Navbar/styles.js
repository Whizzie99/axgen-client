import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(32, 21, 94, 0.3);
  padding: 15px;
  z-index: 99;
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-left {
    display: flex;
    align-items: center;

    .logo {
      margin-right: 50px;
    }

    ul {
      display: flex;
      list-style: none;

      li {
        margin: 0 10px;

        a {
          text-transform: capitalize;
          text-decoration: none;
          color: var(--white);
          font-size: 600;
        }
      }
    }
  }

  .nav-right {
    ul {
      display: flex;
      align-items: center;
      list-style: none;

      li {
        margin: 0 10px;

        a {
          text-transform: capitalize;
          text-decoration: none;
          color: var(--white);
          font-size: 600;
        }
      }
    }
  }
`;
