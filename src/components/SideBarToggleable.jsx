import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSideBar } from "../redux/actions/cityActions";
class SideBarToggleable extends Component {
  state = {
    isopen: false,
  };
  componentDidMount() {
    this.props.sideBarState
      ? (document.querySelector("body").style.overflow = "auto")
      : (document.querySelector("body").style.overflow = "hidden");
  }
  componentDidUpdate(prevProps) {
    prevProps.sideBarState
      ? (document.querySelector("body").style.overflow = "auto")
      : (document.querySelector("body").style.overflow = "hidden");
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleOn}> toggle</button>
        {this.props.sideBarState ? (
          <section className="side-bar">
            <div className="side-bar-content"></div>
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
  };
};
export default connect(mapStateToProps, { toggleSideBar })(SideBarToggleable);
