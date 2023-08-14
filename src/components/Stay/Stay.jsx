import React from "react";
import "./Stay.css";
import SuperHost from "./SuperHost";
import StarIcon from "@mui/icons-material/Star";

const Stay = ({ card }) => {
  return (
    <div className="stay-card">
      <div className="stay-img">
        <img src={card.photo} alt="image of a stay" />
      </div>
      <div className="stay-info">
        <div className="first-row">
          <div className="stay-details">
            {card.superhost && (
              <SuperHost className="border-solid border-2 border-gray-500 rounded-xl px-2">
                Super Host
              </SuperHost>
            )}
            <div className="stay-apt">
              {card.type}
              {card.beds !== null ? ` . ${card.beds} beds` : ``}
            </div>
          </div>
          <div className="rating">
            <StarIcon style={{ color: `#EB5757` }} />
            <span>{card.rating}</span>
          </div>
        </div>
        <div className="second-row">{card.title}</div>
      </div>
    </div>
  );
};

export default Stay;
