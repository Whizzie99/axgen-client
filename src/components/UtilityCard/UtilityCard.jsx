import { StyledCard } from "./styles";

import sample from "../../assets/images/utilities/donation.png";

const UtilityCard = () => {
  return (
    <StyledCard className="utility-card">
      <div className="card-img">
        <img src={sample} alt="" />
      </div>
      <div className="card-content">
        <h4 className="card-title">axgen merch</h4>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro
          ipsam pariatur minus maxime explicabo, debitis fugit modi dolore
          soluta.
        </p>
      </div>
    </StyledCard>
  );
};

export default UtilityCard;
