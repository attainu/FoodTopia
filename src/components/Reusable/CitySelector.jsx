import React, { Component } from "react";
import "../../Styles/SideBarToggleable.css";
import { withRouter } from "react-router-dom";
import {
  setLocation,
  fetchCityOnCoOrdinates,
  fetchCity,
  toggleSideBar,
} from "../../redux/actions/cityActions";
import { connect } from "react-redux";
class CitySelector extends Component {
  state = {
    cityToggle: false,
    cityName: "",
  };
  cityToggle = () => {
    this.setState({ cityToggle: !this.state.cityToggle });
  };
  handleChange = (e) => {
    this.setState({ cityName: e.target.value });
  };
  setCity = (e) => {
    if (this.props.byLocation) {
      alert(
        "Click on Stop Viewing by location in SIDEBAR to select some other city."
      );
    } else {
      this.props.fetchCity(e.target.innerHTML);
      this.props.toggleSideBar();
      this.props.history.push("/home");
    }
  };
  handleSetCity = (e) => {
    e.preventDefault();
    if (this.props.byLocation) {
      alert(
        "Click on Stop Viewing by location in SIDEBAR to select some other city."
      );
    } else {
      this.props.fetchCity(this.state.cityName);
      this.setState({ cityName: "" });
      this.props.toggleSideBar();
    }
  };
  setCityByLocation = () => {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        if (permissionStatus.state === "denied") {
          alert(
            "Please Grant Permission to Access Location in browser settings to continue"
          );
        } else {
          return;
        }
      });
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
      this.props.toggleSideBar();
    });
  };
  render() {
    return (
      <div style={{ width: "100%", color: "white" }}>
        <div className="side-bar-content-toggle">
          <div
            onClick={this.cityToggle}
            className="side-bar-content-toggle-head"
          >
            Select City{" "}
            <div className="city">
              <i className="fa fa-building" aria-hidden="true"></i>
            </div>
            {this.state.cityToggle ? (
              <i className="fa fa-chevron-up"></i>
            ) : (
              <i className="fa fa-chevron-down"></i>
            )}
          </div>
          {this.state.cityToggle ? (
            <div className="side-bar-list-container">
              <form
                className="side-bar-city-input"
                onSubmit={this.handleSetCity}
              >
                <input
                  type="text"
                  placeholder="Enter Your City Or"
                  required
                  onChange={this.handleChange}
                  value={this.state.cityName}
                ></input>
                <button type="submit">
                  <i className="fa fa-search" type="submit"></i>
                </button>
              </form>
              {this.props.byLocation ? (
                <div onClick={this.props.func} className="side-bar-toggle-list">
                  Stop Viewing By Location
                </div>
              ) : (
                <div
                  onClick={this.setCityByLocation}
                  className="side-bar-toggle-list"
                >
                  <i className="fa fa-street-view"></i>
                  Detect Your Location Or
                </div>
              )}

              <div onClick={this.setCity} className="side-bar-toggle-list">
                Ahmedabad
              </div>
              <div onClick={this.setCity} className="side-bar-toggle-list">
                Bengaluru
              </div>
              <div onClick={this.setCity} className="side-bar-toggle-list">
                Chennai
              </div>
              <div onClick={this.setCity} className="side-bar-toggle-list">
                Delhi
              </div>
              <div onClick={this.setCity} className="side-bar-toggle-list">
                Hyderabad
              </div>
              <div onClick={this.setCity} className="side-bar-toggle-list">
                Kolkata
              </div>
              <div onClick={this.setCity} className="side-bar-toggle-list">
                Mumbai
              </div>
              <div onClick={this.setCity} className="side-bar-toggle-list">
                Pune
              </div>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
export default connect(null, {
  setLocation,
  fetchCityOnCoOrdinates,
  fetchCity,
  toggleSideBar,
})(withRouter(CitySelector));
