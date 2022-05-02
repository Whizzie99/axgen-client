import { Link } from "react-router-dom";
import About from "../../components/About/About";
import RoadMap from "../../components/RoadMap/RoadMap";
import { StyledWrapper, StyledContent } from "./styles";

import rays from "../../assets/images/lightrays.png";
import characterOne from "../../assets/characters/1.png";
import characterTwo from "../../assets/characters/2.png";
import characterThree from "../../assets/characters/3.png";

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
      <About />
      <RoadMap />
    </>
  );
};

export default Home;
