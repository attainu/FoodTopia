import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchFavourites } from "../redux/actions/favouritesAction";
import Loader from "../components/Reusable/Loader";
import TopResCard from "../components/Reusable/TopResCard";
class Favourites extends Component {
  componentDidMount() {
    if (this.props.userDetails.user) {
      this.props.fetchFavourites(this.props.userDetails.user.uid);
    }
  }
  render() {
    return (
      <section className="home-section">
        <React.Fragment>
          {this.props.userDetails.user ? (
            <React.Fragment></React.Fragment>
          ) : (
            <Redirect to="/login" />
          )}
        </React.Fragment>
        <React.Fragment>
          {this.props.favDetails.loading ? (
            <Loader />
          ) : (
            <React.Fragment>
              {!this.props.favDetails.favourites ? (
                <React.Fragment></React.Fragment>
              ) : (
                <React.Fragment>
                  <h1>Showing Your Favourite Restaurants</h1>
                  <div className="my-cards-container">
                    {this.props.favDetails.favourites.map((restaurant) => {
                      return (
                        <TopResCard
                          key={restaurant.id}
                          details={restaurant}
                          favBtn={true}
                        />
                      );
                    })}
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      </section>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    userDetails: storeState.userReducer,
    favDetails: storeState.favouritesReducer,
  };
};

export default connect(mapStateToProps, { fetchFavourites })(Favourites);
