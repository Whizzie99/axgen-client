import PropTypes from "prop-types";
import { StyledWrapper } from "./styles";

const SectionTitle = ({ title }) => {
  return (
    <StyledWrapper>
      <h2 className="section-title" data-aos="fade-up" data-aos-duration="1100">
        {title}
      </h2>
    </StyledWrapper>
  );
};

export default SectionTitle;

// PROPTYPES
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
