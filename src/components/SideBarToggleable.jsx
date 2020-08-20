import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSideBar, byLocation } from "../redux/actions/cityActions";
import { logOut } from "../redux/actions/userActions";
import CitySelector from "../components/Reusable/CitySelector";
import CuisineSelector from "../components/Reusable/CuisineSelector";
import CategorySelector from "../components/Reusable/CategorySelector";

import "../Styles/SideBarToggleable.css";
import EstablishmentSelector from "./Reusable/EstablishmentSelector";
import { Link } from "react-router-dom";
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
    if (prevProps.sideBarState === this.props.sideBarState) {
      return;
    } else {
      prevProps.sideBarState
        ? (document.querySelector("body").style.overflow = "auto")
        : (document.querySelector("body").style.overflow = "hidden");
    }
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
          <div className="side-bar-content-toggle-head">
            <Link to="/favourites">Favourites</Link>
          </div>

          {this.props.userDetails.user ? (
            <div
              className="side-bar-content-toggle-head"
              onClick={this.props.logOut}
            >
              Log-Out
            </div>
          ) : (
            <Link to="/login">
              <div
                className="side-bar-content-toggle-head"
                onClick={this.props.toggleSideBar}
              >
                Login
              </div>
            </Link>
          )}
        </React.Fragment>
      );
    } else {
      return null;
    }
  };
  userNameRender = () => {
    if (this.props.userDetails.user) {
      if (this.state.windowWidth < 450 && this.props.userDetails) {
        return (
          <React.Fragment>
            <div className="side-bar-content-toggle-head">
              {this.props.userDetails.user.displayName}
            </div>
          </React.Fragment>
        );
      } else {
        return null;
      }
    } else {
      return;
    }
  };
  render() {
    return (
      <div className="sidebar-toggle-container">
        <button onClick={this.toggleOn}> toggle</button>
        {this.props.sideBarState ? (
          <section className="side-bar">
            <div className="side-bar-content">
              {this.userNameRender()}
              <CitySelector
                byLocation={this.props.byLocationState}
                func={this.props.byLocation}
              />
              <CuisineSelector />
              <CategorySelector />
              <EstablishmentSelector />
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
    userDetails: storeState.userReducer,
  };
};
export default connect(mapStateToProps, { toggleSideBar, byLocation, logOut })(
  SideBarToggleable
);
