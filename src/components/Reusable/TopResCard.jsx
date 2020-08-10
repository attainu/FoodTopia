import React from "react";
import Ratings from "../Reusable/Ratings";
import "../../Styles/HomePage.css";
const TopResCard = ({ details }) => {
  console.log(details);
  return (
    <div className="toprescard">
      <div className="toprescard-img-container">
        <img src={details.thumb} alt="Looks Delicious"></img>
      </div>
      <div className="toprescard-details">
        <div className="toprescard-ratings-container">
          <div>{details.user_rating.aggregate_rating}</div>
          <div className="toprescard-ratings">
            <Ratings rating={details.user_rating.aggregate_rating} />
          </div>
        </div>
        <div className="toprescard-name-address">
          <p className="toprescard-res-name">{details.name}</p>
          <p className="toprescard-res-cuisines">
            <span>Cuisines: </span>
            {details.cuisines}
          </p>
          <p className="toprescard-res-address">
            <span>Address: </span>
            {details.location.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopResCard;
