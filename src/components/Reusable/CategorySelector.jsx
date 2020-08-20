import React, { Component } from "react";
import "../../Styles/SideBarToggleable.css";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleSideBar } from "../../redux/actions/cityActions";
class CategorySelector extends Component {
  state = {
    categoryToggle: false,
  };
  categoryToggle = () => {
    this.setState({ categoryToggle: !this.state.categoryToggle });
  };
  getCategory = (e) => {
    this.props.history.push(
      `/type/category/${e.target.innerHTML}/${e.target.getAttribute(
        "categoryId"
      )}`
    );
    this.props.toggleSideBar();
  };
  render() {
    return (
      <div style={{ width: "100%", color: "white" }}>
        <div className="side-bar-content-toggle">
          <div
            onClick={this.categoryToggle}
            className="side-bar-content-toggle-head"
          >
            Select Category <div className="category"></div>
            {this.state.categoryToggle ? (
              <i class="fa fa-chevron-up"></i>
            ) : (
              <i class="fa fa-chevron-down"></i>
            )}
          </div>
          {this.state.categoryToggle ? (
            <React.Fragment>
              {!this.props.categories ? (
                <Link to="/">Click Here To load All Categories</Link>
              ) : (
                <div className="side-bar-list-container">
                  {this.props.categories.map((category) => {
                    return (
                      <div
                        onClick={this.getCategory}
                        className="side-bar-toggle-list"
                        key={category.categories.id}
                        categoryId={category.categories.id}
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
export default connect(mapStateToProps, { toggleSideBar })(
  withRouter(CategorySelector)
);
