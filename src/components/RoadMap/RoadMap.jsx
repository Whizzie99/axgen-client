import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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

import underSeaImg from "../../assets/images/under_sea.png";
import leftFlowerImg from "../../assets/images/left_map_flower.png";
import rightFlowerImg from "../../assets/images/right_map_flower.png";
import fishes from "../../assets/images/school_of_fish.png";
import horseFish from "../../assets/images/horse_fish.png";
import jelly from "../../assets/images/j_fish.png";

import bubble from "../../assets/images/bubbles/hero_bubble.png";

const RoadMap = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref10 = useRef();
  const ref11 = useRef();
  const ref12 = useRef();
  const ref13 = useRef();

  useEffect(() => {
    const group1 = [ref7.current, ref4.current, ref1.current];
    const group2 = [ref2.current, ref6.current, ref11.current];
    const group3 = [ref3.current, ref10.current, ref9.current];
    const group4 = [ref12.current, ref8.current, ref13.current, ref5.current];

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

    gsap.to(group4, 13, {
      y: -350,
      ease: "none",
      opacity: 0,
      delay: 2.9,
      repeat: -1,
      repeatDelay: 1.9,
    });
  });

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
      <div className="under-sea-img">
        <img src={underSeaImg} alt="" />
      </div>
      <div className="left-map-flower">
        <img src={leftFlowerImg} alt="" />
      </div>
      <div className="right-map-flower">
        <img src={rightFlowerImg} alt="" />
      </div>
      <div className="school-of-fishes-left">
        <img src={fishes} alt="" />
      </div>
      <div className="school-of-fishes-right">
        <img src={fishes} alt="" />
      </div>
      <div className="horse-fish-one">
        <img src={horseFish} alt="" />
      </div>
      <div className="horse-fish-two">
        <img src={horseFish} alt="" />
      </div>

      <div className="jelly-fish-one">
        <img src={jelly} alt="" />
      </div>
      <div className="jelly-fish-two">
        <img src={jelly} alt="" />
      </div>
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
        <img src={bubble} ref={ref10} alt="" className="bubble-ten" />
        <img src={bubble} ref={ref11} alt="" className="bubble-eleven" />
        <img src={bubble} ref={ref12} alt="" className="bubble-twelve" />
        <img src={bubble} ref={ref13} alt="" className="bubble-thirteen" />
      </div>
    </StyledWrapper>
  );
};

export default RoadMap;
