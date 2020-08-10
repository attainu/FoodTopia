import React, { Component } from "react";
import StarRatings from "react-star-ratings";

class Ratings extends Component {
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings
        rating={parseFloat(this.props.rating)}
        starDimension="20px"
        starSpacing="2px"
        starRatedColor="#fa7d09"
        starEmptyColor="#fecb89"
        isAggregateRating={true}
        svgIconPath="m25,1 6,17h18l-14,11 0,17-15-10-15,10 5-17-14-11h18z"
        svgIconViewBox="-1 -1 51 48"
      />
    );
  }
}

export default Ratings;
