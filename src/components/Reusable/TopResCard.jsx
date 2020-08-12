import React from "react";
import Ratings from "../Reusable/Ratings";
import { Link } from "react-router-dom";
import "../../Styles/HomePage.css";
const TopResCard = ({ details }) => {
  return (
    <Link to={`/restaurant-${details.id}`}>
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
    </Link>
  );
};

export default TopResCard;
