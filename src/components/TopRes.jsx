import React, { Component } from "react";
import { connect } from "react-redux";
import TopResCard from "../components/Reusable/TopResCard";
import "../Styles/HomePage.css";
import Loader from "../components/Reusable/Loader";
import { fetchFavourites } from "../redux/actions/favouritesAction";
class TopRes extends Component {
  state = {
    toggleAll: true,
  };
  componentDidMount() {}
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

  checkIfInFav = (id) => {
    console.log("checkIfinFav");
    if (this.props.userDetails.user) {
      if (this.props.favourites) {
        const fav = this.props.favourites;
        let i;
        for (i = 0; i < fav.length; i++) {
          if (fav[i].id === id) {
            return true;
          }
        }

        return false;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  render() {
    return (
      <div>
        {!this.props.topResSome ? (
          <h1>
            <Loader />
          </h1>
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
                        favBtn={null}
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
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    topResSome: storeState.citiesTopResReducer.topRestaurantsSome,
    topResAll: storeState.citiesTopResReducer.topRestaurantsAll,
    cityState: storeState.cityReducer,
    userDetails: storeState.userReducer,
    favourites: storeState.favouritesReducer.favourites,
  };
};
export default connect(mapStateToProps, { fetchFavourites })(TopRes);
