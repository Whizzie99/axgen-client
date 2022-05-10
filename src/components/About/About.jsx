import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Container from "../shared/Container/Container";
import AboutCarousel from "../AboutCarousel/AboutCarousel";
import { StyledWrapper, StyledContent } from "./styles";

import bubble from "../../assets/images/bubbles/hero_bubble.png";

const About = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();

  useEffect(() => {
    const group1 = [ref7.current, ref4.current, ref1.current];
    const group2 = [ref2.current, ref8.current, ref6.current];
    const group3 = [ref3.current, ref5.current, ref9.current];

    gsap.to(group1, 8, {
      y: -450,
      ease: "none",
      opacity: 0,
      delay: 1.4,
      repeat: -1,
      repeatDelay: 1.6,
    });

    gsap.to(group2, 9, {
      y: -400,
      ease: "none",
      opacity: 0,
      delay: 2.3,
      repeat: -1,
      repeatDelay: 1.6,
    });

    gsap.to(group3, 11, {
      y: -350,
      ease: "none",
      opacity: 0,
      delay: 2.6,
      repeat: -1,
      repeatDelay: 1.8,
    });
  }, []);

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
      <div className="bubble-section">
        <img src={bubble} ref={ref1} alt="" className="bubble-one" />
        <img src={bubble} ref={ref2} alt="" className="bubble-two" />
        <img src={bubble} ref={ref3} alt="" className="bubble-three" />
        <img src={bubble} ref={ref4} alt="" className="bubble-four" />
        <img src={bubble} ref={ref5} alt="" className="bubble-five" />
        <img src={bubble} ref={ref6} alt="" className="bubble-six" />
        <img src={bubble} ref={ref7} alt="" className="bubble-seven" />
        <img src={bubble} ref={ref8} alt="" className="bubble-eight" />
        <img src={bubble} ref={ref9} alt="" className="bubble-nine" />
      </div>
    </StyledWrapper>
  );
};

export default About;
