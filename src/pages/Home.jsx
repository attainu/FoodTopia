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
import { fetchFavourites } from "../redux/actions/favouritesAction";
import TopCollections from "../components/TopCollections";
import TopRes from "../components/TopRes";
import Loader from "../components/Reusable/Loader";
// import ImageAndWelcome from "../components/ImageAndWelcome";
import "../Styles/App.css";
import "../Styles/HomePage.css";

class Home extends Component {
  componentDidMount() {
    if (this.props.userDetails.user) {
      if (localStorage.getItem("foodtopia-city")) {
        this.props.fetchCity(
          localStorage.getItem("foodtopia-city"),
          this.props.userDetails.user.uid
        );
      } else {
        if (!this.props.cityState.selectedCityId) {
          if (this.props.cityState.selectedCity === "") {
            this.props.fetchCity("bengaluru", this.props.userDetails.user.uid);
          } else {
            this.props.fetchCity(
              this.props.cityState.selectedCity,
              this.props.userDetails.user.uid
            );
          }
        } else {
          return;
        }
      }
      this.props.fetchCategories();
    }

    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.cityState.byLocation !== this.props.cityState.byLocation) {
      if (this.props.cityState.byLocation) {
        console.log("COMPONENT UPDATES");
        this.props.fetchCity(this.props.cityState.userCity);
      } else {
        if (!this.props.cityState.selectedCityId) {
          if (this.props.cityState.selectedCity === "") {
            this.props.fetchCity("bengaluru");
          } else {
            this.props.fetchCity(this.props.cityState.selectedCity);
          }
        } else {
          return;
        }
      }
    }
    if (
      prevProps.cityState.selectedCityId !== this.props.cityState.selectedCityId
    ) {
    }
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <section className="home-section">
          {this.props.cityState.loading ? (
            <div className="loader-div">
              <Loader />
            </div>
          ) : (
            <React.Fragment>
              <h6 style={{ textAlign: "center", color: "black" }}>
                Change Your City in the SideBar
              </h6>
              {!this.props.collectionState ? (
                <Loader />
              ) : (
                <React.Fragment>
                  <TopCollections collections={this.props.collectionState} />
                </React.Fragment>
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
    userDetails: storeState.userReducer,
  };
};

export default connect(mapStateToProps, {
  fetchCity,
  fetchTopCollections,
  fetchNearbyRes,
  fetchCategories,
  setLocation,
  fetchCityOnCoOrdinates,
  fetchFavourites,
})(Home);
