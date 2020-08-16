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
  expression = (rating) => {
    if (rating === 5) {
      return "😍";
    } else if (rating === 4) {
      return "😋";
    } else if (rating === 3) {
      return "😕";
    } else if (rating === 2) {
      return "😐";
    } else {
      return "🙁";
    }
  };
  render() {
    return (
      <div id="header-reviews">
        <h3>User Reviews </h3>
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
                <span>{review.review.rating} </span>
                <span>{"    "}</span>
                <small> ({review.review.rating_text})</small>
                <Ratings rating={review.review.rating} />
              </div>
              <p>
                {!review.review.review_text ? (
                  <span>No Comments By User</span>
                ) : (
                  <span>{review.review.review_text}</span>
                )}
              </p>
              <span className="expression">
                {this.expression(review.review.rating)}
              </span>
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
