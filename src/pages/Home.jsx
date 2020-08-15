import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCity } from "../redux/actions/cityActions";
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
    if (!this.props.cityState.selectedCityId) {
      if (this.props.cityState.selectedCity === "") {
        this.props.fetchCity("bengaluru");
      } else {
        this.props.fetchCity(this.props.cityState.selectedCity);
      }
    } else {
      return;
    }
    window.scrollTo(0, 0);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
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
})(Home);
