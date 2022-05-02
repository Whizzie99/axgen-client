import PropTypes from "prop-types";
import { StyledWrapper } from "./styles";

const SectionTitle = ({ title }) => {
  return (
    <StyledWrapper>
      <h2 className="section-title">{title}</h2>
    </StyledWrapper>
  );
};

export default SectionTitle;

// PROPTYPES
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
