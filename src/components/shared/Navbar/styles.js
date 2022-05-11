import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(32, 21, 94, 0.3);
  padding: 15px;
  z-index: 100;
`;

export const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  /* justify-content: space-between; */
  /* align-items: center; */

  .nav-left {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100%; */

    .logo {
      /* /margin-right: 50px; */
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
    display: none;
    flex-direction: column;
    align-items: center;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;

      li {
        margin: 15px 0;

        a {
          text-transform: capitalize;
          text-decoration: none;
          color: var(--white);
          font-size: 600;
        }
      }
    }
  }

  /* @media screen and (max-width: 900px) {
    position: relative;
    z-index: 999;
  } */

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    .nav-left {
      justify-content: flex-start;

      .logo {
        margin-right: 50px;
      }
    }

    .nav-right {
      display: flex;
      flex-direction: row;

      ul {
        flex-direction: row;

        li {
          margin: 0 10px;
        }
      }
    }
  }
`;
