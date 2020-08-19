import React, { Component } from "react";
import { connect } from "react-redux";
import { searchOnQuery } from "../redux/actions/searchActions";
import TopResCard from "../components/Reusable/TopResCard";
import Loader from "../components/Reusable/Loader";
class SearchResultsPage extends Component {
  componentDidMount() {
    if (
      this.props.currentCollection.currentQuery ===
      this.props.match.params.searchQuery
    ) {
      return;
    } else {
      this.props.searchOnQuery(
        this.props.match.params.searchQuery,
        this.props.cityDetails.selectedCityId
      );
    }
    window.scrollTo(0, 0);
  }
  viewPrevious = () => {
    this.props.searchOnQuery(
      this.props.match.params.searchQuery,
      this.props.cityDetails.selectedCityId,
      this.props.currentCollection.searchResult.results_start - 20
    );
    window.scrollTo(0, 0);
  };
  viewMore = () => {
    this.props.searchOnQuery(
      this.props.match.params.searchQuery,
      this.props.cityDetails.selectedCityId,
      this.props.currentCollection.searchResult.results_start + 20
    );
    window.scrollTo(0, 0);
  };
  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.searchQuery !== prevProps.match.params.searchQuery
    ) {
      this.props.searchOnQuery(
        this.props.match.params.searchQuery,
        this.props.cityDetails.selectedCityId
      );
    }
    window.scrollTo(0, 0);
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <section className="home-section">
          {this.props.currentCollection.loading ? (
            <div className="loader-div">
              <Loader />
            </div>
          ) : (
            <React.Fragment>
              <h1 id="header-collection">
                Showing All Restaurants related to query "
                {this.props.match.params.searchQuery}"
              </h1>

              {!this.props.currentCollection.searchResult ? (
                <React.Fragment></React.Fragment>
              ) : (
                <React.Fragment>
                  {this.props.currentCollection.searchResult.results_start ===
                  0 ? (
                    <React.Fragment></React.Fragment>
                  ) : (
                    <div className="view-more-btn" onClick={this.viewPrevious}>
                      View Previous Restaurants
                    </div>
                  )}
                  <div className="my-cards-container">
                    {this.props.currentCollection.searchResult.restaurants.map(
                      (restaurant) => {
                        return (
                          <TopResCard
                            key={restaurant.restaurant.id}
                            details={restaurant.restaurant}
                          />
                        );
                      }
                    )}
                  </div>
                  {this.props.currentCollection.searchResult.restaurants
                    .length === 20 ? (
                    <div className="view-more-btn" onClick={this.viewMore}>
                      View More Restaurants
                    </div>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    cityDetails: storeState.cityReducer,
    currentCollection: storeState.searchReducer,
  };
};
export default connect(mapStateToProps, { searchOnQuery })(SearchResultsPage);
