import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrentRes } from "../redux/actions/indiResActions";
import ResMap from "../components/Reusable/ResMap";
import IndiResCard from "../components/Reusable/IndiResCard";
import Reviews from "../components/Reusable/Reviews";
import config from "../config";
class IndiResPage extends Component {
  componentDidMount() {
    this.props.fetchCurrentRes(this.props.match.params.resId);
  }
  render() {
    console.log(this.props.match.params.resId);
    return (
      <section>
        <React.Fragment>
          {!this.props.currentRes.currentRes ? (
            <h1>Loading</h1>
          ) : (
            <React.Fragment>
              <IndiResCard details={this.props.currentRes.currentRes} />
              {!this.props.currentRes.reviews ? (
                <h1>Loading</h1>
              ) : (
                <div className="reviews-container">
                  <Reviews details={this.props.currentRes.reviews} />
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
  };
};
export default connect(mapStateToProps, { fetchCurrentRes })(IndiResPage);
