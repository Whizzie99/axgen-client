import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import UtilityCard from "../UtilityCard/UtilityCard";
import Container from "../shared/Container/Container";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
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
          <StyledCarousel>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={true}
              loop={true}
            >
              <SwiperSlide>
                <UtilityCard />
              </SwiperSlide>
              <SwiperSlide>
                <UtilityCard />
              </SwiperSlide>
              <SwiperSlide>
                <UtilityCard />
              </SwiperSlide>
              <SwiperSlide>
                <UtilityCard />
              </SwiperSlide>
              <SwiperSlide>
                <UtilityCard />
              </SwiperSlide>
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
