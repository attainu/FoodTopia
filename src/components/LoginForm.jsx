import React, { Component } from "react";
import fire from "../firebaseConfig";
class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  signUp = () => {
    const email = this.state.email;
    const password = this.state.password;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully signed up ", u);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  login = () => {
    const email = this.state.email;
    const password = this.state.password;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully logged in ", u);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <input type="submit" value="Login" onClick={this.login} />
          <input type="submit" value="SigUp" onClick={this.signUp} />
        </form>
      </div>
    );
  }
}
export default LoginForm;
