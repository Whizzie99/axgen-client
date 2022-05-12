import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
// import Container from "../../components/shared/Container/Container";
import { StyledWrapper, StyledContent, StyledMintSection } from "./styles";

import floorBg from "../../assets/images/clay.png";
import frame from "../../assets/images/frame.png";
import charactersGif from "../../assets/images/characters.gif";
import clayFrame from "../../assets/images/clay-frame.png";
import rays from "../../assets/images/lightrays.png";
import bubble from "../../assets/images/bubbles/hero_bubble.png";

const Mint = () => {
  const [mintValue, setMintValue] = useState(1);

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

  const increaseMint = (e) => {
    e.preventDefault();
    setMintValue(mintValue + 1);
  };

  const decreaseMint = (e) => {
    e.preventDefault();
    if (mintValue === 1) {
      setMintValue(1);
    } else {
      setMintValue(mintValue - 1);
    }
  };

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
  }, []);

  return (
    <StyledWrapper>
      <StyledContent>
        <h1 data-aos="fade-up" data-aos-duration="1100">
          axgen
        </h1>
        <p data-aos="fade-up" data-aos-duration="1100">
          The lengendary creature that regenerates. Living eternally on the
          Etheruem network
        </p>
        <div data-aos="fade-up" data-aos-duration="1100" className="mint-btn">
          <Link to="#">mint now</Link>
        </div>
      </StyledContent>
      <StyledMintSection>
        <div className="mint-left-section">
          <div className="mint-counter">
            <div className="mint-total">
              <p>{mintValue}/1000</p>
            </div>
            <div className="mint-count">
              <form>
                <div className="mint-group">
                  <button
                    className="mint-count-btn mint-increase"
                    onClick={increaseMint}
                  >
                    <span>+</span>
                  </button>
                  <span className="mint-count-current">{mintValue}</span>
                  <button
                    className="mint-count-btn mint-decrease"
                    onClick={decreaseMint}
                  >
                    <span>-</span>
                  </button>
                </div>
                <button className="print-mint">mint 1 - 0.6eth</button>
              </form>
            </div>
            <img src={frame} alt="" className="frame-img" />
          </div>
        </div>
        <div className="mint-right-section">
          <div className="characters-gif">
            <img src={charactersGif} className="characters-gif-img" alt="gif" />
            <img src={clayFrame} alt="" className="clay-frame" />
          </div>
        </div>
      </StyledMintSection>
      <div className="floor-img">
        <img src={floorBg} alt="" />
      </div>
      <img src={rays} alt="" className="light-rays" />
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
  );
};

export default Mint;
