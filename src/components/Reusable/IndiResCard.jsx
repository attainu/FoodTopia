import React from "react";
import Ratings from "../Reusable/Ratings";
import "../../Styles/IndiResPage.css";
const IndiResCard = ({ details }) => {
  return (
    <div className="indiResCard" overlay={details.featured_image}>
      <div className="indiResCard-img-container">
        <img src={details.thumb} alt="It is delicious" />
      </div>
      <div className="indiResCard-details">
        <p className="indiResCard-res-name">{details.name}</p>
        <p>
          {details.establishment.map((est) => {
            return est;
          })}
        </p>
        <p>
          <span>Timings:</span>
          {details.timings}
        </p>
        <div className="indiResCard-ratings-container">
          <span>
            {details.user_rating.aggregate_rating}
            <small> (Votes:{details.user_rating.votes})</small>
          </span>
          <p>
            <Ratings rating={details.user_rating.aggregate_rating} />
          </p>
        </div>
        <p>
          <span>Cusines Offered: </span>
          {details.cuisines}
        </p>
        <p className="toprescard-res-address">
          <span>Address: </span>
          {details.location.address}
        </p>
      </div>
      <div className="indiResCard-highlights">
        {details.highlights.map((det) => {
          return <small> {det} ,</small>;
        })}
      </div>
    </div>
  );
};

export default IndiResCard;
