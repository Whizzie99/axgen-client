import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  padding: 150px 0;
  background: var(--blue-2);

  .under-water-decor {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const StyledUtilities = styled.div`
  position: relative;
  z-index: 2;
`;

export const StyledCarousel = styled.div`
  margin: 50px 0;
  padding: 20px 0;
  /* padding: 100px; */

  /* .swiper-slide {
    padding: 10px;
  } */

  /* .swiper-slide:nth-child(even) .utility-card {
    position: relative;
    top: 50px;
  } */
`;
