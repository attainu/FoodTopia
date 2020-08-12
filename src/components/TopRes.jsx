import React, { Component } from "react";
import { connect } from "react-redux";
import TopResCard from "../components/Reusable/TopResCard";
import "../Styles/HomePage.css";
class TopRes extends Component {
  state = {
    toggleAll: true,
  };
  toggleAll = () => {
    this.setState({ toggleAll: !this.state.toggleAll });
    var top = document.querySelector("#header-topres");
    top.scrollIntoView();
  };
  toggleSome = () => {
    this.setState({ toggleAll: !this.state.toggleAll });
    var top = document.querySelector("#header-topres");
    top.scrollIntoView();
  };
  render() {
    return (
      <div>
        {!this.props.topResSome ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <h1 id="header-topres">
              Top Places In {this.props.cityState.selectedCity}
            </h1>
            {this.state.toggleAll ? (
              <React.Fragment>
                <div className="toprescard-container">
                  {this.props.topResSome.map((res) => {
                    return (
                      <TopResCard
                        key={res.restaurant.id}
                        details={res.restaurant}
                      />
                    );
                  })}
                </div>
                <div onClick={this.toggleAll} className="view-more-btn">
                  View All
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="toprescard-container">
                  {this.props.topResAll.map((res) => {
                    return (
                      <TopResCard
                        key={res.restaurant.id}
                        details={res.restaurant}
                      />
                    );
                  })}
                </div>
                <div onClick={this.toggleSome} className="view-more-btn">
                  View Less
                </div>
              </React.Fragment>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    topResSome: storeState.citiesTopResReducer.topRestaurantsSome,
    topResAll: storeState.citiesTopResReducer.topRestaurantsAll,
    cityState: storeState.cityReducer,
  };
};
export default connect(mapStateToProps, null)(TopRes);
