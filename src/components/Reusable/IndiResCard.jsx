import React, { Component } from "react";
import Ratings from "../Reusable/Ratings";
import "../../Styles/IndiResPage.css";
import { connect } from "react-redux";
import { addToFav, deleteFromFav } from "../../redux/actions/favouritesAction";
class IndiResCard extends Component {
  scrollTop = () => {
    window.scrollTo(0, 0);
  };
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
      e.target.getAttribute("resid")
    );
  };
  render() {
    return (
      <div
        className="indiResCard"
        overlay={this.props.details.featured_image}
        onClick={this.scrollTop}
      >
        <div className="indiResCard-img-container">
          <img src={this.props.details.thumb} alt="It is delicious" />
        </div>
        <div className="indiResCard-details">
          <p className="indiResCard-res-name">{this.props.details.name}</p>
          <p>
            {this.props.details.establishment.map((est) => {
              return est;
            })}
          </p>
          <p>
            <span>Timings:</span>
            {this.props.details.timings}
          </p>
          <div className="indiResCard-ratings-container">
            <span>
              {this.props.details.user_rating.aggregate_rating}
              <small> (Votes:{this.props.details.user_rating.votes})</small>
            </span>
            <p>
              <Ratings
                rating={this.props.details.user_rating.aggregate_rating}
              />
            </p>
          </div>
          <p>
            <span>Cusines Offered: </span>
            {this.props.details.cuisines}
          </p>
          <p className="toprescard-res-address">
            <span>Address: </span>
            {this.props.details.location.address}
          </p>
        </div>
        <React.Fragment>
          {this.props.details.isInFav ? (
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
        <div className="indiResCard-highlights">
          {this.props.details.highlights.map((det) => {
            return <small> {det} ,</small>;
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (storeState) => {
  return {
    userDetails: storeState.userReducer,
    cityDetails: storeState.cityReducer,
  };
};
export default connect(mapStateToProps, { addToFav, deleteFromFav })(
  IndiResCard
);
