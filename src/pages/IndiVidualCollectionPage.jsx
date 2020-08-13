import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrentCollection } from "../redux/actions/collectionsAction";
import TopResCard from "../components/Reusable/TopResCard";
import Loader from "../components/Reusable/Loader";
class IndiVidualCollectionPage extends Component {
  componentDidMount() {
    this.props.fetchCurrentCollection(
      this.props.match.params.collectionId,
      this.props.cityDetails.selectedCityId
    );
  }
  viewPrevious = () => {
    this.props.fetchCurrentCollection(
      this.props.match.params.collectionId,
      this.props.cityDetails.selectedCityId,
      this.props.currentCollection.currentCollection.results_start - 20
    );
    var top = document.querySelector("#header-collection");
    top.scrollIntoView();
  };
  viewMore = () => {
    this.props.fetchCurrentCollection(
      this.props.match.params.collectionId,
      this.props.cityDetails.selectedCityId,
      this.props.currentCollection.currentCollection.results_start + 20
    );
    var top = document.querySelector("#header-collection");
    top.scrollIntoView();
  };
  render() {
    console.log(this.props.currentCollection.currentCollection);
    return (
      <React.Fragment>
        <section className="home-section">
          {this.props.currentCollection.loading ? (
            <h1>
              <Loader />
            </h1>
          ) : (
            <React.Fragment>
              <h1 id="header-collection">
                Showing All Restaurants under the collection
              </h1>

              {!this.props.currentCollection.currentCollection ? (
                <React.Fragment></React.Fragment>
              ) : (
                <React.Fragment>
                  {this.props.currentCollection.currentCollection
                    .results_start === 0 ? (
                    <React.Fragment></React.Fragment>
                  ) : (
                    <div className="view-more-btn" onClick={this.viewPrevious}>
                      View Previous Restaurants
                    </div>
                  )}
                  <div className="my-cards-container">
                    {this.props.currentCollection.currentCollection.restaurants.map(
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
                  {this.props.currentCollection.currentCollection.restaurants
                    .length === 20 ? (
                    <React.Fragment></React.Fragment>
                  ) : (
                    <div className="view-more-btn" onClick={this.viewMore}>
                      View More Restaurants
                    </div>
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
    currentCollection: storeState.collectionsReducer,
  };
};
export default connect(mapStateToProps, { fetchCurrentCollection })(
  IndiVidualCollectionPage
);
