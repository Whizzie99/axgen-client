import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import About from "../../components/About/About";
import RoadMap from "../../components/RoadMap/RoadMap";
import Utility from "../../components/Utility/Utility";
import Faq from "../../components/Faq/Faq";
import { StyledWrapper, StyledContent, StyledCustomBg } from "./styles";

import rays from "../../assets/images/lightrays.png";
import characterOne from "../../assets/characters/4.png";
import characterTwo from "../../assets/characters/2.png";
import characterThree from "../../assets/characters/3.png";
import bubble from "../../assets/images/bubbles/hero_bubble.png";
// import arcImg from "../../assets/images/arc.png";
import { useEffect } from "react";

const Home = () => {
  const bubble1Ref = useRef();
  const bubble2Ref = useRef();
  const bubble3Ref = useRef();
  const bubble4Ref = useRef();
  const bubble5Ref = useRef();
  const bubble6Ref = useRef();
  const bubble7Ref = useRef();
  const bubble8Ref = useRef();
  const bubble9Ref = useRef();
  const bubble10Ref = useRef();

  useEffect(() => {
    const bubbleSet1 = [
      bubble2Ref.current,
      bubble6Ref.current,
      bubble10Ref.current,
    ];

    const bubbleSet2 = [
      bubble1Ref.current,
      bubble3Ref.current,
      bubble7Ref.current,
    ];

    const bubbleSet3 = [
      bubble4Ref.current,
      bubble9Ref.current,
      bubble8Ref.current,
      bubble5Ref.current,
    ];

    gsap.to(bubbleSet1, 5, {
      y: -400,
      delay: 1,
      ease: "none",
      opacity: 0,
      repeat: -1,
      repeatDelay: 1.5,
    });

    gsap.to(bubbleSet2, 7, {
      y: -300,
      delay: 1.6,
      ease: "none",
      opacity: 0,
      repeat: -1,
      repeatDelay: 1.8,
    });

    gsap.to(bubbleSet3, 10, {
      y: -260,
      delay: 1.9,
      ease: "none",
      opacity: 0,
      repeat: -1,
      repeatDelay: 2,
    });
  });
  return (
    <>
      <StyledWrapper>
        <img src={rays} alt="" className="light-rays" />
        <StyledContent>
          <h1 className="hero-text" data-aos="fade-up" data-aos-duration="1100">
            axgen
          </h1>
          <p data-aos="fade-up" data-aos-duration="1100">
            The lengendary creature that regenerates. Living eternally on the
            Etheruem network
          </p>
          <div className="mint-btn" data-aos="fade-up" data-aos-duration="1100">
            <Link to="/mint">mint now</Link>
          </div>
        </StyledContent>
        <div className="character character-one">
          <img src={characterOne} alt="" />
        </div>
        <div className="character character-two">
          <img src={characterTwo} alt="" />
        </div>
        <div className="character character-three">
          <img src={characterThree} alt="" />
        </div>
        {/* <div className="arc-img">
          <img src={arcImg} alt="" />
        </div> */}
        <div className="floating-bubbles-section">
          <img src={bubble} ref={bubble1Ref} alt="" className="bubble-one" />
          <img src={bubble} ref={bubble2Ref} alt="" className="bubble-two" />
          <img src={bubble} ref={bubble3Ref} alt="" className="bubble-three" />
          <img src={bubble} ref={bubble4Ref} alt="" className="bubble-four" />
          <img src={bubble} ref={bubble5Ref} alt="" className="bubble-five" />
          <img src={bubble} ref={bubble6Ref} alt="" className="bubble-six" />
          <img src={bubble} ref={bubble7Ref} alt="" className="bubble-seven" />
          <img src={bubble} ref={bubble8Ref} alt="" className="bubble-eight" />
          <img src={bubble} ref={bubble9Ref} alt="" className="bubble-nine" />
          <img src={bubble} ref={bubble10Ref} alt="" className="bubble-ten" />
        </div>
      </StyledWrapper>
      <StyledCustomBg className="custom-bg">
        <About />
        <RoadMap />
      </StyledCustomBg>
      <Utility />
      <Faq />
    </>
  );
};

export default Home;
