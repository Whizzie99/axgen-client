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
                    <b>10% mint</b>. Axgen merch will be launched to help spread
                    and promote the movement! Holders of the NFT will get
                    exclusive discounts to our cute merch line.
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
                    <b>25% mint</b>. Make our first of many donations. $25000
                    will be donated towards stem cell research.
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
                    <b>50% mint</b>. Buy virtual plots in a Metaverse of the
                    holders choosing, for us to develop future HQ/research
                    networks for Axgen members.
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
                    <b>75% mint</b>. We will begin developing $WORM. The primary
                    token and reward system within the Axgen ecosystem. You will
                    be able to stake your Axgen NFT to generate tokens. There
                    will be many use cases for $WORM such as: discounts on
                    adorable Axgen merch, collaborations, as well as benefits
                    towards our future NFT collections.
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
                    <b>100% mint</b>. Celebration. Host a big party for members
                    only. (Our goal is to promote hard, and connect with big NFT
                    influencers around the world.)
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
                    <b>Beyond 100%.</b> Holders of Axgen V1 will have a chance
                    to receive airdrops for our V2 collection. The rest will be
                    minted to the public! (a collection of 5000 even CUTER
                    teenager Axolotyl PFP NFT&apos;s).
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
                    <b>Axgen Game</b>. We will develop the Axgen game, which
                    will be playable on our website (and hopefully our own APP!)
                    More r&amp;d will need to be done for this.
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
