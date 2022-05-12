import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import Container from "../Container/Container";
import { StyledWrapper, StyledNav } from "./styles";

import logo from "../../../assets/icons/logo.png";
import discordIcon from "../../../assets/icons/discord.png";
import twitterIcon from "../../../assets/icons/twitter.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <StyledWrapper>
      <Container>
        <StyledNav>
          <div className="nav-left">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav-right">
            <ul>
              <li>
                <Link to="#">home</Link>
              </li>
              <li>
                <Link to="#">staking</Link>
              </li>
              <li>
                <Link to="#">about</Link>
              </li>
              <li>
                <Link to="#">roadmap</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="/mint">mint</Link>
              </li>
            </ul>
            <ul>
              <li className="nav-btn">
                <Link to="#">shop</Link>
              </li>
              <li className="nav-btn">
                <Link to="#">wallet</Link>
              </li>
              <li>
                <a
                  href="https://discord.gg/9GATD4mf84"
                  target="_blank"
                  noreferrer="true"
                  rel="noreferrer"
                >
                  <img src={discordIcon} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/axgennft"
                  target="_blank"
                  noreferrer="true"
                  rel="noreferrer"
                >
                  <img src={twitterIcon} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
            {active ? <XIcon /> : <MenuIcon />}
          </div>
        </StyledNav>
      </Container>
    </StyledWrapper>
  );
};

export default Navbar;
