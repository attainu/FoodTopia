import React, { Component } from "react";
import MyNavbar from "./components/Navbar.jsx";
//import Sidebar from "./components/SideBar/Sidebar.jsx";
// import SearchUtility from "./components/SearchUtility";
import { Switch, Route, Redirect } from "react-router-dom";


// COMPONENT IMPORTSSSSS
import Home from "./pages/Home";
import Footer from "./components/Footer.jsx";
import AllCollections from "./pages/AllCollecions";
import SignupPage from "./pages/SignupPage";
import IndiResPage from "./pages/IndiResPage";
import FloatingButton from "./components/Reusable/FloatingButton";
import IndividualCollectionPage from "./pages/IndiVidualCollectionPage";

//

class App extends Component {
  render() {
    console.log();
    return (
      <div>
        <MyNavbar />
        {/* <SearchUtility /> */}
        <FloatingButton />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" />
          <Route path="/login" component={SignupPage} />
          <Route
            path="/collection-:collectionId"
            component={IndividualCollectionPage}
          />
          <Route path="/allCollections:cityName" component={AllCollections} />
          <Route path="/restaurant-:resId" component={IndiResPage} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
