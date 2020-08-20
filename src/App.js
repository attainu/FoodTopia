import React, { Component } from "react";
import MyNavbar from "./components/Navbar.jsx";
//import Sidebar from "./components/SideBar/Sidebar.jsx";
// import SearchUtility from "./components/SearchUtility";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// COMPONENT IMPORTSSSSS
import Home from "./pages/Home";
import Footer from "./components/Footer.jsx";
import AllCollections from "./pages/AllCollecions";
import SignupPage from "./pages/SignupPage";
import IndiResPage from "./pages/IndiResPage";
import FloatingButton from "./components/Reusable/FloatingButton";
import IndividualCollectionPage from "./pages/IndiVidualCollectionPage";
import SideBarToggleable from "./components/SideBarToggleable.jsx";
import SearchBar from "./components/SearchBar";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import TypeSearchPage from "./pages/TypeSearchPage.jsx";
import Favourites from "./pages/Favourites";
//

class App extends Component {
  searchConditionalRender = () => {
    if (
      this.props.location.pathname === "/login" ||
      this.props.location.pathname === "/cart" ||
      this.props.location.pathname === "/profile"
    ) {
      return <React.Fragment></React.Fragment>;
    } else {
      return <SearchBar />;
    }
  };
  render() {
    console.log();
    return (
      <div>
        <SideBarToggleable />
        <MyNavbar />
        {/* <SearchUtility /> */}
        <FloatingButton />
        {this.searchConditionalRender()}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" />
          <Route exact path="/login" component={SignupPage} />
          <Route
            exact
            path="/collection-:collectionId"
            component={IndividualCollectionPage}
          />
          <Route
            exact
            path="/allCollections:cityName"
            component={AllCollections}
          />
          <Route exact path="/restaurant-:resId" component={IndiResPage} />
          <Route
            exact
            path="/search-:searchQuery"
            component={SearchResultsPage}
          />
          <Route exact path="/favourites" component={Favourites} />
          <Route
            exact
            path="/type/:type/:typeName/:typeId"
            component={TypeSearchPage}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
