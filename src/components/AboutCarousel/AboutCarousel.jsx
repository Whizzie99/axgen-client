import Carousel from "react-grid-carousel";

import { StyledWrapper } from "./styles";

import image1 from "../../assets/characters/about_carousel/1.png";
import image2 from "../../assets/characters/about_carousel/2.png";
import image3 from "../../assets/characters/about_carousel/3.png";
import image4 from "../../assets/characters/about_carousel/4.png";

const carouselImageArray = [image1, image2, image3, image4];

const AboutCarousel = () => {
  return (
    <StyledWrapper>
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
