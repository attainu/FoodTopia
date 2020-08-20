import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingDots from "../Reusable/LoadingDots";
import loginImg from "../../assets/food.jpg";
import { signUpUser, signUpStatus } from "../../redux/actions/userActions";
import "../Login/Login.css";

class Register extends Component {
  state = {
    username: "",
    password: "",
    reEnterPassword: "",
    email: "",
    match: true,
    length: true,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password.length >= 8) {
      if (this.state.password !== this.state.reEnterPassword) {
        this.setState({ match: false });
        return;
      } else {
        this.props.signUpUser(
          this.state.username,
          this.state.email,
          this.state.password
        );
        this.setState({
          username: "",
          password: "",
          reEnterPassword: "",
          email: "",
        });
      }
    } else {
      this.setState({ length: false });
      return;
    }
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      match: true,
      length: true,
    });
    this.props.signUpStatus();
  };
  renderSignupStatus = (status = this.props.userDetails.signUpStatus) => {
    if (status === "success") {
      return (
        <small
          style={{
            color: "Green",
            fontWeight: "bold",
            margintop: "0px",
          }}
        >
          Register Successfull, Login to continue
        </small>
      );
    } else if (
      status === "The email address is already in use by another account."
    ) {
      return (
        <small
          style={{
            color: "red",
            fontWeight: "bold",
            margintop: "0px",
          }}
        >
          Email already in Use, Try with new email
        </small>
      );
    }
  };
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Food Theme" />
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter FullName"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                {this.state.match ? (
                  <React.Fragment></React.Fragment>
                ) : (
                  <small
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      margintop: "0px",
                    }}
                  >
                    Passwords Should Match
                  </small>
                )}
                {this.state.length ? (
                  <React.Fragment></React.Fragment>
                ) : (
                  <small
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      margintop: "0px",
                    }}
                  >
                    Passwords Should Be atleast 8 characters long
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="reEnterPassword"
                  placeholder="Confirm Password"
                  value={this.state.reEnterPassword}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            {this.renderSignupStatus()}
            <div className="footer">
              {this.props.userDetails.loading ? (
                <LoadingDots />
              ) : (
                <button type="submit" className="btn">
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (storeState) => {
  return {
    userDetails: storeState.userReducer,
  };
};
export default connect(mapStateToProps, { signUpUser, signUpStatus })(Register);
