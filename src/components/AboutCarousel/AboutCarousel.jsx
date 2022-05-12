import Carousel from "react-grid-carousel";

import { StyledWrapper } from "./styles";

import image1 from "../../assets/characters/about_carousel/1.png";
import image2 from "../../assets/characters/about_carousel/2.png";
import image3 from "../../assets/characters/about_carousel/3.png";
import image4 from "../../assets/characters/about_carousel/4.png";
import image5 from "../../assets/characters/about_carousel/5.png";
import image6 from "../../assets/characters/about_carousel/6.png";
import image7 from "../../assets/characters/about_carousel/7.png";
import image8 from "../../assets/characters/about_carousel/8.png";
import image9 from "../../assets/characters/about_carousel/9.png";
import image10 from "../../assets/characters/about_carousel/10.png";
import image11 from "../../assets/characters/about_carousel/11.png";
import image12 from "../../assets/characters/about_carousel/12.png";

const carouselImageArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const AboutCarousel = () => {
  return (
    <StyledWrapper data-aos="fade-up" data-aos-duration="1100">
      <Carousel
        cols={2}
        rows={2}
        gap={20}
        loop
        showDots={true}
        hideArrow={true}
        responsiveLayout={[
          {
            breakpoint: 767,
            cols: 1,
            rows: 1,
            gap: 0,
          },
        ]}
        mobileBreakpoint={767}
      >
        {carouselImageArray.map((image, i) => (
          <Carousel.Item key={i}>
            <div className="img-box">
              <img src={image} alt="" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledWrapper>
  );
};

export default AboutCarousel;
