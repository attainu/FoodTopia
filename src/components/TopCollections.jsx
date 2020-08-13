import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCity } from "../redux/actions/cityActions";
import { fetchTopCollections } from "../redux/actions/collectionsAction";
import CollectionCard from "./Reusable/CollectionCard";
// import ImageAndWelcome from "../components/ImageAndWelcome";
import "../Styles/App.css";
import "../Styles/HomePage.css";
import { Link } from "react-router-dom";

class TopCollections extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>
            Showing Top Collections For {this.props.cityState.selectedCity}
          </h1>
          <div className="my-cards-container">
            <React.Fragment>
              {this.props.collections.map((collection) => {
                return (
                  <CollectionCard
                    key={collection.collection.collection_id}
                    details={collection.collection}
                  />
                );
              })}
            </React.Fragment>
          </div>
          <Link
            to={`/allCollections-${this.props.cityState.selectedCity}`}
            className="view-more-btn"
          >
            View All Collections
          </Link>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    cityState: storeState.cityReducer,
  };
};

export default connect(mapStateToProps, { fetchCity, fetchTopCollections })(
  TopCollections
);
