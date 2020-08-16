import React, { Component } from "react";
import "../../Styles/SideBarToggleable.css";
import { connect } from "react-redux";
class CategorySelector extends Component {
  state = {
    categoryToggle: false,
  };
  categoryToggle = () => {
    this.setState({ categoryToggle: !this.state.categoryToggle });
  };
  render() {
    return (
      <div style={{ width: "100%", color: "white" }}>
        <div className="side-bar-content-toggle">
          <div
            onClick={this.categoryToggle}
            className="side-bar-content-toggle-head"
          >
            Select Category
            {this.state.categoryToggle ? (
              <i class="fa fa-chevron-up"></i>
            ) : (
              <i class="fa fa-chevron-down"></i>
            )}
          </div>
          {this.state.categoryToggle ? (
            <React.Fragment>
              {!this.props.categories ? (
                <React.Fragment></React.Fragment>
              ) : (
                <div className="side-bar-list-container">
                  {this.props.categories.map((category) => {
                    return (
                      <div
                        onClick={this.getCuisine}
                        className="side-bar-toggle-list"
                        key={category.categories.id}
                      >
                        {category.categories.name}
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
    categories: storeState.cityReducer.categories,
  };
};
export default connect(mapStateToProps, null)(CategorySelector);
