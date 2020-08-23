import React, { Component } from "react";
import { connect } from "react-redux";
import { typeSearch } from "../redux/actions/searchActions";
import TopResCard from "../components/Reusable/TopResCard";
import Loader from "../components/Reusable/Loader";
class TypeSearchPage extends Component {
  componentDidMount() {
    this.props.typeSearch(
      this.props.match.params.type,
      this.props.cityDetails.selectedCityId,
      this.props.match.params.typeId
    );

    window.scrollTo(0, 0);
  }
  viewPrevious = () => {
    this.props.typeSearch(
      this.props.match.params.type,
      this.props.cityDetails.selectedCityId,
      this.props.currentCollection.typeSearchRes.results_start - 20
    );
    window.scrollTo(0, 0);
  };
  viewMore = () => {
    this.props.typeSearch(
      this.props.match.params.type,
      this.props.cityDetails.selectedCityId,
      this.props.currentCollection.typeSearchRes.results_start + 20
    );
    window.scrollTo(0, 0);
  };
  componentDidUpdate(prevProps) {
    if (this.props.match.url !== prevProps.match.url) {
      this.props.typeSearch(
        this.props.match.params.type,
        this.props.cityDetails.selectedCityId,
        this.props.match.params.typeId
      );
    }

    window.scrollTo(0, 0);
  }
  render() {
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
                Showing All Restaurants related to
                <p>{this.props.match.params.typeName.replace("&amp;", "&")}</p>
              </h1>

              {!this.props.currentCollection.typeSearchRes ? (
                <React.Fragment></React.Fragment>
              ) : (
                <>
                  {this.props.currentCollection.typeSearchRes.restaurants
                    .length === 0 ? (
                    <center>
                      <h5>
                        Couldn't find any restaurants related to this category,
                        please try some other category
                      </h5>
                    </center>
                  ) : (
                    <React.Fragment>
                      {this.props.currentCollection.typeSearchRes
                        .results_start === 0 ? (
                        <React.Fragment></React.Fragment>
                      ) : (
                        <div
                          className="view-more-btn"
                          onClick={this.viewPrevious}
                        >
                          View Previous Restaurants
                        </div>
                      )}
                      <div className="my-cards-container">
                        {this.props.currentCollection.typeSearchRes.restaurants.map(
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
                      {this.props.currentCollection.typeSearchRes.restaurants
                        .length === 20 ? (
                        <div className="view-more-btn" onClick={this.viewMore}>
                          View More Restaurants
                        </div>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                </>
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
export default connect(mapStateToProps, { typeSearch })(TypeSearchPage);

// if (this.props.match.url != prevProps.match.url) {
//   this.props.typeSearch(
//     this.props.match.params.type,
//     this.props.cityState.selectedCityId,
//     this.props.match.params.typeId
//   );
// }
