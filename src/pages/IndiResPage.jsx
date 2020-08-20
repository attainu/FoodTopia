import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrentRes } from "../redux/actions/indiResActions";
import { addToFav } from "../redux/actions/favouritesAction";
import ResMap from "../components/Reusable/ResMap";
import IndiResCard from "../components/Reusable/IndiResCard";
import Reviews from "../components/Reusable/Reviews";
import Loader from "../components/Reusable/Loader";
import SmallLoader from "../components/Reusable/SmallLoader";
import config from "../config";
class IndiResPage extends Component {
  componentDidMount() {
    this.props.fetchCurrentRes(
      this.props.match.params.resId,
      this.props.userDetails.user.uid
    );
    window.scrollTo(0, 0);
    // this.props.addToFav(this.props.userDetails.user.uid, { hi: "HI" });
  }
  scrollToTop = () => {
    var top = document.querySelector("#header");
    top.scrollIntoView();
  };

  render() {
    return (
      <section id="header">
        <React.Fragment>
          {!this.props.currentRes.currentRes ? (
            <div className="loader-div">
              {this.props.currentRes.loading ? <Loader /> : <></>}
            </div>
          ) : (
            <React.Fragment>
              <IndiResCard details={this.props.currentRes.currentRes} />
              {!this.props.currentRes.reviews ? (
                <div>
                  <SmallLoader />
                </div>
              ) : (
                <div className="reviews-container">
                  <Reviews
                    details={this.props.currentRes.reviews}
                    resId={this.props.match.params.resId}
                  />
                </div>
              )}
              <ResMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                locationDetails={this.props.currentRes.currentRes.location}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      </section>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    currentRes: storeState.indiResReducer,
    userDetails: storeState.userReducer,
  };
};
export default connect(mapStateToProps, { fetchCurrentRes, addToFav })(
  IndiResPage
);
