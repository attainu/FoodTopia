import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class SearchBar extends Component {
  state = {
    searchQuery: "",
  };
  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  handleSearch = (e) => {
    e.preventDefault();
    this.props.history.push(`/search-${this.state.searchQuery}`);
    this.setState({ searchQuery: "" });
  };
  render() {
    return (
      <div className="search-bar-container">
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            placeholder="Search for a Restaurant, Cuisine, or Locality"
            className="input"
            required
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button type="submit">
            <i className="fa fa-search" type="submit"></i>Search
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
