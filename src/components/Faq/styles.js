import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: var(--purple-gradient-1);
  padding: 20px;

  @media screen and (min-width: 1200px) {
    padding: 50px;
  }
`;

export const StyledFaq = styled.div`
  margin: 50px auto;
  /* width: 80%; */

  @media screen and (min-width: 1200px) {
    width: 80%;
  }
`;

export const StyledFaqItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  border-radius: 50px;
  margin: 20px 0;
  height: auto;
  transition: all 0.3s ease;

  .faq-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    color: var(--white);

    .faq-question {
      flex: 0.8;
      font-weight: bold;
    }

    .faq-icon {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 0.1;

      svg {
        height: 30px;
        width: 30px;
      }
    }
  }

  .faq-bottom {
    padding: 20px 30px;
    padding-top: 0;
    transition: all 0.3s ease;

    .faq-answer {
      color: var(--white);
      font-weight: 200;
    }
  }
`;
