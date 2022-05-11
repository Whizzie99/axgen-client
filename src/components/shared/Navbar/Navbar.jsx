import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { StyledWrapper, StyledNav } from "./styles";

import logo from "../../../assets/icons/logo.png";
import discordIcon from "../../../assets/icons/discord.png";
import twitterIcon from "../../../assets/icons/twitter.png";

const Navbar = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledNav>
          <div className="nav-left">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
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
                <Link to="#">mint</Link>
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
                <a target="_blank" href="#">
                  <img src={discordIcon} alt="discord" />
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <img src={twitterIcon} alt="twitter" />
                </a>
              </li>
            </ul>
          </div>
        </StyledNav>
      </Container>
    </StyledWrapper>
  );
};

export default Navbar;
