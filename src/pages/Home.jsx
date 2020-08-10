import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCity } from "../redux/actions/cityActions";
import { fetchTopCollections } from "../redux/actions/collectionsAction";
import TopCollections from "../components/TopCollections";
import TopRes from "../components/TopRes";
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
            <h1>Loading</h1>
          ) : (
            <React.Fragment>
              {!this.props.collectionState ? (
                <h1>Loading Top collections</h1>
              ) : (
                <TopCollections collections={this.props.collectionState} />
              )}
              <TopRes />
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
    collectionState: storeState.collectionsReducer.topCollections,
  };
};

export default connect(mapStateToProps, { fetchCity, fetchTopCollections })(
  Home
);
