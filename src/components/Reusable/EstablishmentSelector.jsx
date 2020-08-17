import React, { Component } from "react";
import "../../Styles/SideBarToggleable.css";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { toggleSideBar } from "../../redux/actions/cityActions";
class EstablishmentSelector extends Component {
  state = {
    establishmentToggle: false,
  };
  establishmentToggle = () => {
    this.setState({ establishmentToggle: !this.state.establishmentToggle });
  };
  getEstablishment = (e) => {
    this.props.history.push(
      `/type/establishment/${e.target.innerHTML}/${e.target.getAttribute(
        "establishmentId"
      )}`
    );
    this.props.toggleSideBar();
  };
  render() {
    return (
      <div style={{ width: "100%", color: "white" }}>
        <div className="side-bar-content-toggle">
          <div
            onClick={this.establishmentToggle}
            className="side-bar-content-toggle-head"
          >
            Select Establishment
            {this.state.establishmentToggle ? (
              <i class="fa fa-chevron-up"></i>
            ) : (
              <i class="fa fa-chevron-down"></i>
            )}
          </div>
          {this.state.establishmentToggle ? (
            <React.Fragment>
              {!this.props.establishments ? (
                <Link to="/">Click Here To load All Establishments</Link>
              ) : (
                <div className="side-bar-list-container">
                  {this.props.establishments.map((establishment) => {
                    return (
                      <div
                        onClick={this.getEstablishment}
                        className="side-bar-toggle-list"
                        key={establishment.establishment.id}
                        establishmentId={establishment.establishment.id}
                      >
                        {establishment.establishment.name}
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
    establishments: storeState.cityReducer.establishments,
  };
};
export default connect(mapStateToProps, { toggleSideBar })(
  withRouter(EstablishmentSelector)
);
