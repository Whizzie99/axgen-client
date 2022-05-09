import { Link } from "react-router-dom";
import About from "../../components/About/About";
import RoadMap from "../../components/RoadMap/RoadMap";
import Utility from "../../components/Utility/Utility";
import { StyledWrapper, StyledContent, StyledCustomBg } from "./styles";

import rays from "../../assets/images/lightrays.png";
import characterOne from "../../assets/characters/4.png";
import characterTwo from "../../assets/characters/2.png";
import characterThree from "../../assets/characters/3.png";
import Faq from "../../components/Faq/Faq";

const Home = () => {
  return (
    <>
      <StyledWrapper>
        <img src={rays} alt="" className="light-rays" />
        <StyledContent>
          <h1 className="hero-text">axgen</h1>
          <p>
            The lengendary creature that regenerates. Living eternally on the
            Etheruem network
          </p>
          <div className="mint-btn">
            <Link to="#">mint now</Link>
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
