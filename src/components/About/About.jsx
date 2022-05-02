import Container from "../shared/Container/Container";
import AboutCarousel from "../AboutCarousel/AboutCarousel";
import { StyledWrapper, StyledContent } from "./styles";

const About = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledContent>
          <div className="left-content">
            <h1>
              about <br /> axgen
            </h1>
            <p>
              Scientists are currently investigating how organisms like the
              Axolotl are able to regenerate their limbs and escape age-related
              decline. These studies provide a future where mankind can
              potentially regenerate organs to extend lifespan and improve
              diseased states. AXGEN will be the FIRST NFT to be behind this
              movement. Members of the community can now be at the forefront of
              medicine by owning AXGEN and contributing to the advancement of
              stem cell technology. On top of that, members will also be
              provided utility through collaborative brands and merchandise
              within the AXGEN ecosystem. This is a long term brand with
              benefits for years to come as we grow as a community.
            </p>
          </div>
          <div className="right-content">
            <AboutCarousel />
          </div>
        </StyledContent>
      </Container>
    </StyledWrapper>
  );
};

export default About;
