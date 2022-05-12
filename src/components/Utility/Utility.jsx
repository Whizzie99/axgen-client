import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import UtilityCard from "../UtilityCard/UtilityCard";
import Container from "../shared/Container/Container";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { utilities } from "../../data/utilities";
// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { StyledWrapper, StyledUtilities, StyledCarousel } from "./styles";

import underWaterBg from "../../assets/images/utility_underwater_decor.png";

const Utility = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledUtilities>
          <SectionTitle title="utility" />
          <StyledCarousel data-aos="fade-up" data-aos-duration="1100">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              loop={true}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {utilities.map((utility, i) => (
                <SwiperSlide key={i}>
                  <UtilityCard
                    title={utility.title}
                    description={utility.description}
                    img={utility.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </StyledCarousel>
        </StyledUtilities>
      </Container>
      <div className="under-water-decor">
        <img src={underWaterBg} alt="" />
      </div>
    </StyledWrapper>
  );
};

export default Utility;
