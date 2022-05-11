import Container from "../shared/Container/Container";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Footer from "../shared/Footer/Footer";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import { faqs } from "../../data/faqs";
import { StyledWrapper, StyledFaq, StyledFaqItem } from "./styles";
import { useState } from "react";

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <StyledWrapper>
      <Container>
        <SectionTitle title="FAQ" />
        <StyledFaq>
          {faqs.map((faq, index) => (
            <StyledFaqItem key={index}>
              <div className="faq-top" onClick={() => toggle(index)}>
                <h3 className="faq-question">{faq.question}</h3>
                <span className="faq-icon">
                  {clicked === index ? <MinusIcon /> : <PlusIcon />}
                </span>
              </div>
              {clicked === index ? (
                <div className="faq-bottom">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ) : null}
            </StyledFaqItem>
          ))}
        </StyledFaq>
      </Container>
      <Footer />
    </StyledWrapper>
  );
};

export default Faq;
