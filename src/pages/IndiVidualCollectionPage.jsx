import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrentCollection } from "../redux/actions/collectionsAction";
import TopResCard from "../components/Reusable/TopResCard";
class IndiVidualCollectionPage extends Component {
  componentDidMount() {
    this.props.fetchCurrentCollection(
      this.props.match.params.collectionId,
      this.props.cityDetails.selectedCityId
    );
  }
  render() {
    console.log(this.props.currentCollection.currentCollection);
    return (
      <React.Fragment>
        <section className="home-section">
          {this.props.currentCollection.loading ? (
            <h1>Loading</h1>
          ) : (
            <React.Fragment>
              <h1>Showing All Restaurants under the collection</h1>
              {!this.props.currentCollection.currentCollection ? (
                <React.Fragment></React.Fragment>
              ) : (
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
