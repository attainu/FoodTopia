import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCity } from "../redux/actions/cityActions";
import { fetchTopCollections } from "../redux/actions/collectionsAction";
import CollectionCard from "../components/Reusable/CollectionCard";
import Loader from "../components/Reusable/Loader";
// import ImageAndWelcome from "../components/ImageAndWelcome";
import "../Styles/App.css";
import "../Styles/HomePage.css";

class Home extends Component {
  componentDidMount() {
    if (this.props.cityState.selectedCity === "") {
      this.props.fetchCity("bengaluru");
    } else {
      this.props.fetchCity(this.props.cityState.selectedCity);
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="home-section">
          {this.props.cityState.loading ? (
            <h1>
              <Loader />
            </h1>
          ) : (
            <React.Fragment>
              <h1>
                Showing All Collections for {this.props.cityState.selectedCity}
              </h1>
              {!this.props.collectionState ? (
                <></>
              ) : (
                <div className="my-cards-container">
                  {this.props.collectionState.map((collection) => {
                    return (
                      <CollectionCard
                        key={collection.collection.collection_id}
                        details={collection.collection}
                      />
                    );
                  })}
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
    cityState: storeState.cityReducer,
    collectionState: storeState.collectionsReducer.allCollections,
  };
};

export default connect(mapStateToProps, { fetchCity, fetchTopCollections })(
  Home
);
