import React, { Component } from "react";
import { Collapse, Navbar, Nav, NavItem } from "reactstrap";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleSideBar } from "../redux/actions/cityActions";
import { logOut } from "../redux/actions/userActions";
import "../Styles/App.css";
class MyNavbar extends Component {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  state = {
    isOpen: false,
  };
  logOut = () => {
    this.props.logOut();
    this.props.history.push("/");
    window.location.reload();
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  toggleSideBar = () => {
    this.props.toggleSideBar();
  };

  renderConditionalButton = () => {
    if (this.props.userDetails.user) {
      return (
        <NavItem
          className="ml-3"
          style={{ cursor: "pointer" }}
          onClick={this.logOut}
        >
          <div>
            Log-Out <i className="fa fa-sign-out" aria-hidden="true"></i>
          </div>
        </NavItem>
      );
    } else {
      return (
        <NavLink to="/login" className="ml-3">
          Log In <i className="fa fa-sign-in" aria-hidden="true"></i>
        </NavLink>
      );
    }
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar light expand="md" className="my-navbar pr-lg-5 ">
          <div className="hamburger" onClick={this.toggleSideBar}>
            <i className="fa fa-bars"></i>
          </div>
          <Link to="/home" className="brand">
            FoodTopia
          </Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/favourites" className="ml-3">
                  Favourites{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </NavLink>
              </NavItem>
              {this.renderConditionalButton()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (storeState) => {
  return {
    userDetails: storeState.userReducer,
  };
};
export default connect(mapStateToProps, { toggleSideBar, logOut })(
  withRouter(MyNavbar)
);
