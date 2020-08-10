import React, { Component } from "react";
import MyNavbar from "./components/Navbar.jsx";
// import SearchUtility from "./components/SearchUtility";
import { Switch, Route, Redirect } from "react-router-dom";

// COMPONENT IMPORTSSSSS
import Home from "./pages/Home";
import Footer from "./components/Footer.jsx";
import AllCollections from "./pages/AllCollecions";
import SignupPage from "./pages/SignupPage";

class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        {/* <SearchUtility /> */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" />
          <Route path="/login" component={SignupPage} />
          <Route path="/collection:collectionId" />
          <Route path="/allCollections:cityName" component={AllCollections} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
