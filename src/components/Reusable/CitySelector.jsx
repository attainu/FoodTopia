import React, { Component } from "react";
import "../../Styles/SideBarToggleable.css";
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
  setCityByLocation = () => {
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
  };
  render() {
    return (
      <div style={{ width: "100%", color: "white" }}>
        <div className="side-bar-content-toggle">
          <div
            onClick={this.cityToggle}
            className="side-bar-content-toggle-head"
          >
            Select City
            {this.state.cityToggle ? (
              <i class="fa fa-chevron-up"></i>
            ) : (
              <i class="fa fa-chevron-down"></i>
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
                  <i class="fa fa-search" type="submit"></i>
                </button>
              </form>
              <div
                onClick={this.setCityByLocation}
                className="side-bar-toggle-list"
              >
                <i class="fa fa-street-view"></i>
                Detect Your Location Or
              </div>

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
export default CitySelector;
