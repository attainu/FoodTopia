import React, { Component } from "react";
import Ratings from "../Reusable/Ratings";
import { Link } from "react-router-dom";
import "../../Styles/HomePage.css";
class TopResCard extends Component {
  render() {
    return (
      <>
        <div className="toprescard">
          <div className="toprescard-img-container">
            <img src={this.props.details.thumb} alt="Looks Delicious"></img>
            {this.props.favBtn ? (
              <button className="add-fav" onClick={this.deleteFav}>
                Delete from Favourites
              </button>
            ) : (
              <button className="add-fav" onClick={this.addFav}>
                Add to Favourites
              </button>
            )}
          </div>
          <div className="toprescard-details">
            <div className="toprescard-ratings-container">
              <div>{this.props.details.user_rating.aggregate_rating}</div>
              <div className="toprescard-ratings">
                <Ratings
                  rating={this.props.details.user_rating.aggregate_rating}
                />
              </div>
            </div>
            <div className="toprescard-name-address">
              <p className="toprescard-res-name">{this.props.details.name}</p>
              <p className="toprescard-res-cuisines">
                <span>Cuisines: </span>
                {this.props.details.cuisines}
              </p>
              <p className="toprescard-res-address">
                <span>Address: </span>
                {this.props.details.location.address}
              </p>
              <p className="toprescard-res-address">
                <span>Contact: </span>
                {this.props.details.phone_numbers.split(",").map((num) => (
                  <a
                    href={`tel:${num.replace(" ", "-")}`}
                    style={{
                      display: "inline",
                      color: "#6ebe3b",
                      textDecoration: "underline",
                    }}
                  >
                    {num},
                  </a>
                ))}
              </p>
              <Link to={`/restaurant-${this.props.details.id}`}>
                <button className="add-fav">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TopResCard;
