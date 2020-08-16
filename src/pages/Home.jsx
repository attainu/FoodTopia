import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCity,
  fetchCategories,
  setLocation,
  fetchCityOnCoOrdinates,
} from "../redux/actions/cityActions";
import { fetchTopCollections } from "../redux/actions/collectionsAction";
import { fetchNearbyRes } from "../redux/actions/citiesTopResActions";
import TopCollections from "../components/TopCollections";
import TopRes from "../components/TopRes";
import Loader from "../components/Reusable/Loader";
// import ImageAndWelcome from "../components/ImageAndWelcome";
import "../Styles/App.css";
import "../Styles/HomePage.css";

class Home extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      this.props.setLocation(
        position.coords.latitude,
        position.coords.longitude
      );
      this.props.fetchCityOnCoOrdinates(
        position.coords.latitude,
        position.coords.longitude
      );
    });
    // if (this.props.cityState.currentLocation) {
    //   console.log("Found");
    // }
    if (!this.props.cityState.selectedCityId) {
      if (this.props.cityState.selectedCity === "") {
        this.props.fetchCity("bengaluru");
      } else {
        this.props.fetchCity(this.props.cityState.selectedCity);
      }
    } else {
      return;
    }
    this.props.fetchCategories();
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div className="top-spacing"></div>
        <section className="home-section">
          {this.props.cityState.loading ? (
            <div className="loader-div">
              <Loader />
            </div>
          ) : (
            <React.Fragment>
              <h6 style={{ textAlign: "center" }}>
                Change Your City in the SideBar
              </h6>
              {!this.props.collectionState ? (
                <Loader />
              ) : (
                <TopCollections collections={this.props.collectionState} />
              )}
              <TopRes />
            </React.Fragment>
          )}
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    cityState: storeState.cityReducer,
    collectionState: storeState.collectionsReducer.topCollections,
    nearbyResId: storeState.citiesTopResReducer.nearbyResIds,
  };
};

export default connect(mapStateToProps, {
  fetchCity,
  fetchTopCollections,
  fetchNearbyRes,
  fetchCategories,
  setLocation,
  fetchCityOnCoOrdinates,
})(Home);
