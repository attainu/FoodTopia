import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSideBar, byLocation } from "../redux/actions/cityActions";
import CitySelector from "../components/Reusable/CitySelector";
import CuisineSelector from "../components/Reusable/CuisineSelector";
import CategorySelector from "../components/Reusable/CategorySelector";

import "../Styles/SideBarToggleable.css";
class SideBarToggleable extends Component {
  state = {
    isopen: false,
    windowWidth: null,
  };
  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth });
    window.addEventListener("resize", this.handleResize);
  }
  componentDidUpdate(prevProps) {
    prevProps.sideBarState
      ? (document.querySelector("body").style.overflow = "auto")
      : (document.querySelector("body").style.overflow = "hidden");
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  // componentWillUnMount() {
  //   window.addEventListener("resize", this.handleResize);
  // }

  widthRender = () => {
    if (this.state.windowWidth < 450) {
      return (
        <React.Fragment>
          <div className="side-bar-content-toggle-head">Profile</div>
          <div className="side-bar-content-toggle-head">Favourites</div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleOn}> toggle</button>
        {this.props.sideBarState ? (
          <section className="side-bar">
            <div className="side-bar-content">
              <CitySelector
                byLocation={this.props.byLocationState}
                func={this.props.byLocation}
              />
              <CuisineSelector />
              <CategorySelector />
              {this.widthRender()}
            </div>
            <div className="side-bar-extra" onClick={this.props.toggleSideBar}>
              Click Here To Close SideBar
            </div>
          </section>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (storeState) => {
  return {
    sideBarState: storeState.cityReducer.sideBarstate,
    byLocationState: storeState.cityReducer.byLocation,
  };
};
export default connect(mapStateToProps, { toggleSideBar, byLocation })(
  SideBarToggleable
);
