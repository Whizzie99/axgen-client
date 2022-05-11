import { useState } from "react";
import { Link } from "react-router-dom";
// import Container from "../../components/shared/Container/Container";
import { StyledWrapper, StyledContent, StyledMintSection } from "./styles";

import floorBg from "../../assets/images/clay.png";
import frame from "../../assets/images/frame.png";

const Mint = () => {
  const [mintValue, setMintValue] = useState(1);

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

  return (
    <StyledWrapper>
      <StyledContent>
        <h1>axgen</h1>
        <p>
          The lengendary creature that regenerates. Living eternally on the
          Etheruem network
        </p>
        <div className="mint-btn">
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
        <div className="mint-right-section"></div>
      </StyledMintSection>
      <div className="floor-img">
        <img src={floorBg} alt="" />
      </div>
    </StyledWrapper>
  );
};

export default Mint;
