import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMoreReviews } from "../../redux/actions/indiResActions";
import Ratings from "../../components/Reusable/Ratings";
import "../../Styles/IndiResPage.css";
class Reviews extends Component {
  previousReviews = () => {
    this.props.fetchMoreReviews(
      this.props.resId,
      this.props.details.reviews_start - 5
    );
    var top = document.querySelector("#header-reviews");
    top.scrollIntoView();
  };
  moreReviews = () => {
    this.props.fetchMoreReviews(
      this.props.resId,
      this.props.details.reviews_start + 5
    );
    var top = document.querySelector("#header-reviews");
    top.scrollIntoView();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h3 id="header-reviews">User Reviews</h3>
        {this.props.details.reviews_start === 0 ? (
          <React.Fragment></React.Fragment>
        ) : (
          <div className="view-more" onClick={this.previousReviews}>
            View Previous Reviews
          </div>
        )}
        {this.props.details.user_reviews.map((review) => {
          return (
            <div className="review-card" key={review.review.id}>
              <div className="review-card-profile-container">
                <div className="review-profile-img-container">
                  <img src={review.review.user.profile_image} alt="Profile" />
                </div>
                <p>
                  <span>{review.review.user.name}</span>
                </p>
              </div>
              <div className="indiResCard-ratings-container">
                <span>{review.review.rating}</span>
                <small> ({review.review.rating_text})</small>
                <Ratings rating={review.review.rating} />
              </div>
              <p>
                <span>{review.review.review_text}</span>
              </p>
            </div>
          );
        })}
        <div className="view-more" onClick={this.moreReviews}>
          View More Reviews
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchMoreReviews })(Reviews);
