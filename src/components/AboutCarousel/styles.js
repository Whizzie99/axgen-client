import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top: 100px;
  /* width: 80%;
  margin-left: 20%; */
  .img-box {
    height: 250px;
    /* width: 213px; */

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  /* .jWpUJH {
    display: block;
  } */

  @media screen and (min-width: 1200px) {
    width: 80%;
    margin-left: 20%;
    margin-top: 0;

    .img-box {
      height: 200px;
    }
  }
`;
