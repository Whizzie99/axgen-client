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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  /* justify-content: space-between; */
  /* align-items: center; */

  .hamburger-menu {
    position: absolute;
    top: 22px;
    right: 0;
    height: 30px;
    width: 30px;
    color: rgba(255, 255, 255, 0.5);
    /* z-index: 3; */
  }

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

      .nav-btn {
        a {
          background: var(--blue);
          padding: 8px 15px;
          border-radius: 20px;
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

    .hamburger-menu {
      display: none;
    }

    .nav-left {
      justify-content: flex-start;
      flex: 0.1;

      .logo {
        margin-right: 50px;
      }
    }

    .nav-right {
      flex: 0.9;
      display: flex;
      justify-content: space-between;
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
