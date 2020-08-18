// import React from "react";
// //import LoginForm from "../components/LoginForm";
// const SignupPage = () => {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// };

// export default SignupPage;

//New LOGIN AND REGISTERATION COMPONENT>>>>>>>>>>>

import React, { Component } from "react";
import "../Styles/SignUpPage.css";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import { connect } from "react-redux";
import Loader from "../components/Reusable/Loader";
class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <React.Fragment>
        <div className="App">
          {this.props.userDetails.loading ? (
            <Loader />
          ) : (
            <div className="login">
              <div className="container" ref={(ref) => (this.container = ref)}>
                {isLogginActive && (
                  <Login containerRef={(ref) => (this.current = ref)} />
                )}
                {!isLogginActive && (
                  <Register containerRef={(ref) => (this.current = ref)} />
                )}
              </div>
              <RightSide
                current={current}
                currentActive={currentActive}
                containerRef={(ref) => (this.rightSide = ref)}
                onClick={this.changeState.bind(this)}
              />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (storeState) => {
  return {
    userDetails: storeState.userReducer,
  };
};

export default connect(mapStateToProps, {})(SignupPage);
