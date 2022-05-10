import PropTypes from "prop-types";
import { StyledCard } from "./styles";

import sample from "../../assets/images/utilities/donation.png";

const UtilityCard = ({ title, description, img }) => {
  return (
    <StyledCard className="utility-card">
      <div className="card-img">
        <img src={img || sample} alt="" />
      </div>
      <div className="card-content">
        <h4 className="card-title">{title || "title here"}</h4>
        <p className="card-description">{description || "description here"}</p>
      </div>
    </StyledCard>
  );
};

export default UtilityCard;

UtilityCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};
