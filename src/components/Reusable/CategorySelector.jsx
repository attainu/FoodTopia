import React, { Component } from "react";
import "../../Styles/SideBarToggleable.css";
import { connect } from "react-redux";
class CuisineSelector extends Component {
  state = {
    cuisineToggle: false,
  };
  cuisineToggle = () => {
    this.setState({ cuisineToggle: !this.state.cuisineToggle });
  };
  render() {
    return (
      <div style={{ width: "100%", color: "white" }}>
        <div className="side-bar-content-toggle">
          <div
            onClick={this.cuisineToggle}
            className="side-bar-content-toggle-head"
          >
            Select Cuisine
            {this.state.cuisineToggle ? (
              <i class="fa fa-chevron-up"></i>
            ) : (
              <i class="fa fa-chevron-down"></i>
            )}
          </div>
          {this.state.cuisineToggle ? (
            <React.Fragment>
              {!this.props.cuisines ? (
                <React.Fragment></React.Fragment>
              ) : (
                <div className="side-bar-list-container">
                  {this.props.cuisines.map((cuisine) => {
                    return (
                      <div
                        onClick={this.getCuisine}
                        className="side-bar-toggle-list"
                        key={cuisine.cuisine.cuisine_id}
                      >
                        {cuisine.cuisine.cuisine_name}
                      </div>
                    );
                  })}
                </div>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    cuisines: storeState.cityReducer.cuisines,
  };
};
export default connect(mapStateToProps, null)(CuisineSelector);
