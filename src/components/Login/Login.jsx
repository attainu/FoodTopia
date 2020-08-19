import React, { Component } from "react";
import { userLogin } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
//import loginImg from "../../assets/login.svg";
import loginImg from "../../assets/food.jpg";
import "../Login/Login.css";
import LoadingDots from "../Reusable/LoadingDots";
//import Responsive from 'react-responsive-decorator';
// import { GoogleLogin, GoogleLogout } from "react-google-login";

// const CLIENT_ID = "<your Client ID>";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
      email: "",
      password: "",
      length: true,
    };

    // this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  // login(response) {
  //   if (response.accessToken) {
  //     this.setState((state) => ({
  //       isLogined: true,
  //       accessToken: response.accessToken,
  //     }));
  //   }
  // }
  renderLoginError = (status = this.props.userDetails.loginError) => {
    if (
      status === "The password is invalid or the user does not have a password."
    ) {
      return (
        <small
          style={{
            color: "red",
            fontWeight: "bold",
            margintop: "0px",
          }}
        >
          Wrong Password, Try again with right Password
        </small>
      );
    } else if (status === "auth/user-not-found") {
      return (
        <small
          style={{
            color: "red",
            fontWeight: "bold",
            margintop: "0px",
          }}
        >
          Email Not Found, Register with us and try again
        </small>
      );
    }
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.props.userLogin(this.state.email, this.state.password);
    this.setState({ email: "", password: "" });
  };
  logout(response) {
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
    }));
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, length: true });
  };
  handleLoginFailure(response) {
    alert("Failed to log in");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>

          {/* <div className="google-btn">
            {this.state.isLogined ? (
              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText="Sign-out"
                onLogoutSuccess={this.logout}
                onFailure={this.handleLogoutFailure}
              ></GoogleLogout>
            ) : (
              <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Sign-in with Google"
                onSuccess={this.login}
                onFailure={this.handleLoginFailure}
                cookiePolicy={"single_host_origin"}
                responseType="code,token"
              />
            )}
            {this.state.accessToken ? (
              <h5>
                Your Access Token: <br />
                <br /> {this.state.accessToken}
              </h5>
            ) : null}
          </div> */}

          <form onSubmit={this.handleLogin}>
            <div className="form">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {this.renderLoginError()}
            <div className="footer">
              {this.props.userDetails.loading ? (
                <LoadingDots />
              ) : (
                <button type="submit" className="btn">
                  Login
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
export default connect(mapStateToProps, { userLogin })(withRouter(Login));
