import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
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

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  toggleSideBar = () => {
    this.props.toggleSideBar();
  };
  render() {
    return (
      <div>
        <Navbar light expand="md" className="my-navbar pr-lg-5 ">
          <div className="hamburger" onClick={this.toggleSideBar}>
            <i class="fa fa-bars"></i>
          </div>
          <Link to="/home" className="brand">
            FoodTopia
          </Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/favourites" className="ml-3">
                  Favourites
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile" className="ml-3">
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                {this.props.userDetails.user ? (
                  <NavItem
                    className="ml-3"
                    style={{ cursor: "pointer" }}
                    onClick={this.props.logOut}
                  >
                    Log-out
                  </NavItem>
                ) : (
                  <NavLink to="/login" className="ml-3">
                    Log In
                  </NavLink>
                )}
              </NavItem>
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
export default connect(mapStateToProps, { toggleSideBar, logOut })(MyNavbar);
