import React, { Component } from "react";

export default class Loader extends Component {
  state = {
    number: 0,
  };
  componentDidMount() {
    setInterval(() => {
      if (this.state.number === 10) {
        this.setState({ number: 0 });
      } else {
        this.setState({ number: this.state.number + 1 });
      }
    }, 300);
  }

  loaderAnimation = () => {
    const num = this.state.number;
    if (num === 1) {
      return "🍕";
    } else if (num === 2) {
      return "🍔";
    } else if (num === 3) {
      return "🌭";
    } else if (num === 4) {
      return "🥞";
    } else if (num === 5) {
      return "🥪";
    } else if (num === 6) {
      return "🍩";
    } else if (num === 7) {
      return "🧁";
    } else if (num === 8) {
      return "🍺";
    } else if (num === 9) {
      return "☕";
    } else {
      return "🥗";
    }
  };
  render() {
    return <div style={{ fontSize: "10rem" }}>{this.loaderAnimation()}</div>;
  }
}
