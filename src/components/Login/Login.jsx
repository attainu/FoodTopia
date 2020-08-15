import React, { Component } from "react";
//import loginImg from "../../assets/login.svg";
import loginImg from "../../assets/food.jpg";
import "../Login/Login.css"

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
       
          <div className="google-btn" >
            <button id="loginButton">
            <i class="fa fa-google" id="icon" ></i>
              Sign-In with Google
            </button>
          </div>

          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
      
      
    );
  }
}

export default Login;
