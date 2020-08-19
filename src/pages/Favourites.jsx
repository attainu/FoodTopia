import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFavourites } from "../redux/actions/favouritesAction";

class Favourites extends Component {
  componentDidMount() {
    this.props.fetchFavourites(this.props.userDetails.user.uid);
  }
  render() {
    return <div>Favourites</div>;
  }
}

const mapStateToProps = (storeState) => {
  return {
    userDetails: storeState.userReducer,
  };
};

export default connect(mapStateToProps, { fetchFavourites })(Favourites);
