import React, { Component } from "react";
import Ratings from "../Reusable/Ratings";
import { connect } from "react-redux";
import {
  addToFav,
  deleteFromFav,
  fetchFavourites,
} from "../../redux/actions/favouritesAction";
import LoadingDots from "../Reusable/LoadingDots";
import { Link } from "react-router-dom";
import "../../Styles/HomePage.css";
class TopResCard extends Component {
  componentDidMount() {}

  addFav = (e) => {
    if (this.props.userDetails.user) {
      this.props.addToFav(
        this.props.userDetails.user.uid,
        e.target.getAttribute("resid"),
        this.props.cityDetails.selectedCityId
      );
    } else {
      alert("Please login, to save your Favourites");
    }
  };
  deleteFav = (e) => {
    this.props.deleteFromFav(
      this.props.userDetails.user.uid,
      e.target.getAttribute("resid"),
      this.props.cityDetails.selectedCityId
    );
  };
  render() {
    return (
      <>
        <div className="toprescard">
          <div className="toprescard-img-container">
            <img src={this.props.details.thumb} alt="Looks Delicious"></img>
            <React.Fragment>
              {this.props.favDetails.loadingDots ? (
                <LoadingDots />
              ) : (
                <React.Fragment>
                  {this.props.favBtn ? (
                    <button
                      className="add-fav"
                      onClick={this.deleteFav}
                      resid={this.props.details.id}
                    >
                      Delete from Favourites
                    </button>
                  ) : (
                    <button
                      className="add-fav"
                      onClick={this.addFav}
                      resid={JSON.stringify(this.props.details)}
                    >
                      Add to Favourites
                    </button>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
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
const mapStateToProps = (storeState) => {
  return {
    userDetails: storeState.userReducer,
    favDetails: storeState.favouritesReducer,
    cityDetails: storeState.cityReducer,
  };
};
export default connect(mapStateToProps, {
  addToFav,
  deleteFromFav,
  fetchFavourites,
})(TopResCard);
