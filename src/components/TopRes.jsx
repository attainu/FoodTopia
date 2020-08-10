import React, { Component } from "react";
import { connect } from "react-redux";
import TopResCard from "../components/Reusable/TopResCard";
class TopRes extends Component {
  state = {
    toggleAll: true,
  };
  toggleAll = () => {
    this.setState({ toggleAll: !this.state.toggleAll });
  };
  toggleSome = () => {
    this.setState({ toggleAll: !this.state.toggleAll });
  };
  render() {
    return (
      <div>
        {!this.props.topResSome ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <h1>Top Places In {this.props.cityState.selectedCity}</h1>
            {this.state.toggleAll ? (
              <React.Fragment>
                {this.props.topResSome.map((res) => {
                  return (
                    <TopResCard
                      key={res.restaurant.id}
                      details={res.restaurant}
                    />
                  );
                })}
                <button onClick={this.toggleAll}>View All</button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {this.props.topResAll.map((res) => {
                  return (
                    <TopResCard
                      key={res.restaurant.id}
                      details={res.restaurant}
                    />
                  );
                })}
                <button onClick={this.toggleSome}>View Less</button>
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
