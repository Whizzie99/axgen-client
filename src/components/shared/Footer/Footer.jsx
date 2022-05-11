import Container from "../Container/Container";
import { StyledWrapper, StyledFooter } from "./styles";

import logo from "../../../assets/icons/logo.png";
import twitter from "../../../assets/icons/twitter.png";
import discord from "../../../assets/icons/discord.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledWrapper>
      <Container>
        <StyledFooter>
          <div className="copyright">
            <p>{`${currentYear} axgen`}</p>
          </div>
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="social-handles">
            <p>follow us</p>
            <ul>
              <li>
                <a href="#" target="_blank" noreferrer>
                  <img src={discord} alt="" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" noreferrer>
                  <img src={twitter} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </StyledFooter>
      </Container>
    </StyledWrapper>
  );
};

export default Footer;
