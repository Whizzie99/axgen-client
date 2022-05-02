import Container from "../shared/Container/Container";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { StyledWrapper, StyledRoadMapSection } from "./styles";

import bubble1 from "../../assets/images/bubbles/1.png";
import bubble2 from "../../assets/images/bubbles/2.png";
import bubble3 from "../../assets/images/bubbles/3.png";
import bubble4 from "../../assets/images/bubbles/4.png";
import bubble5 from "../../assets/images/bubbles/5.png";
import bubble6 from "../../assets/images/bubbles/6.png";
import bubble7 from "../../assets/images/bubbles/7.png";

const RoadMap = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledRoadMapSection>
          <SectionTitle title="roadmap" />
          <div className="road-map">
            <div className="road-map-item road-map-1">
              <div className="road-map-left">
                <div className="road-map-description">
                  <p>
                    10% mint. Axgen merch will be launched to help spread and
                    promote the movement! Holders of the NFT will get exclusive
                    discounts to our cute merch line.
                  </p>
                </div>
              </div>
              <div className="road-map-right">
                <div className="road-map-bubble">
                  <img src={bubble1} alt="" />
                  <span className="road-map-step">1</span>
                </div>
              </div>
            </div>

            <div className="road-map-item road-map-2">
              <div className="road-map-left">
                <div className="road-map-description">
                  <p>
                    10% mint. Axgen merch will be launched to help spread and
                    promote the movement! Holders of the NFT will get exclusive
                    discounts to our cute merch line.
                  </p>
                </div>
              </div>
              <div className="road-map-right">
                <div className="road-map-bubble">
                  <img src={bubble2} alt="" />
                  <span className="road-map-step">2</span>
                </div>
              </div>
            </div>

            <div className="road-map-item road-map-3">
              <div className="road-map-left">
                <div className="road-map-description">
                  <p>
                    10% mint. Axgen merch will be launched to help spread and
                    promote the movement! Holders of the NFT will get exclusive
                    discounts to our cute merch line.
                  </p>
                </div>
              </div>
              <div className="road-map-right">
                <div className="road-map-bubble">
                  <img src={bubble3} alt="" />
                  <span className="road-map-step">3</span>
                </div>
              </div>
            </div>

            <div className="road-map-item road-map-4">
              <div className="road-map-left">
                <div className="road-map-description">
                  <p>
                    10% mint. Axgen merch will be launched to help spread and
                    promote the movement! Holders of the NFT will get exclusive
                    discounts to our cute merch line.
                  </p>
                </div>
              </div>
              <div className="road-map-right">
                <div className="road-map-bubble">
                  <img src={bubble4} alt="" />
                  <span className="road-map-step">4</span>
                </div>
              </div>
            </div>

            <div className="road-map-item">
              <div className="road-map-left">
                <div className="road-map-description">
                  <p>
                    10% mint. Axgen merch will be launched to help spread and
                    promote the movement! Holders of the NFT will get exclusive
                    discounts to our cute merch line.
                  </p>
                </div>
              </div>
              <div className="road-map-right">
                <div className="road-map-bubble">
                  <img src={bubble5} alt="" />
                  <span className="road-map-step">5</span>
                </div>
              </div>
            </div>

            <div className="road-map-item">
              <div className="road-map-left">
                <div className="road-map-description">
                  <p>
                    10% mint. Axgen merch will be launched to help spread and
                    promote the movement! Holders of the NFT will get exclusive
                    discounts to our cute merch line.
                  </p>
                </div>
              </div>
              <div className="road-map-right">
                <div className="road-map-bubble">
                  <img src={bubble6} alt="" />
                  <span className="road-map-step">6</span>
                </div>
              </div>
            </div>

            <div className="road-map-item">
              <div className="road-map-left">
                <div className="road-map-description">
                  <p>
                    10% mint. Axgen merch will be launched to help spread and
                    promote the movement! Holders of the NFT will get exclusive
                    discounts to our cute merch line.
                  </p>
                </div>
              </div>
              <div className="road-map-right">
                <div className="road-map-bubble">
                  <img src={bubble7} alt="" />
                  <span className="road-map-step">7</span>
                </div>
              </div>
            </div>
          </div>
        </StyledRoadMapSection>
      </Container>
    </StyledWrapper>
  );
};

export default RoadMap;
