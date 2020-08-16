import React, { Component } from "react";

export default class Loader extends Component {
  state = {
    number: 0,
  };
  intervalId = 0;
  componentDidMount() {
    this.startInterval();
    document.querySelector("body").style.overflow = "hidden";
  }
  componentWillUnmount() {
    const intervalID = this.startInterval();
    console.log(intervalID);
    clearInterval(this.intervalId);
    document.querySelector("body").style.overflow = "auto";
  }

  startInterval = () => {
    this.intervalId = setInterval(() => {
      if (this.state.number === 10) {
        this.setState({ number: 0 });
      } else {
        this.setState({ number: this.state.number + 1 });
      }
      console.log(this.state.number);
    }, 300);
  };
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
    return <div style={{ fontSize: "6rem" }}>{this.loaderAnimation()}</div>;
  }
}
