import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import AssignmentDetails from "./components/AssignmentDetails";
// import ScrollTop from "../ScrollTop";
import GroupRegistrationForm from "./components/registration/GroupRegistrationForm";
import ProjectRegistrationForm from "./components/registration/ProjectRegistrationForm";
import WaitingPage from "./components/registration/WaitingPage";
import $ from "jquery";
// import LoadingScreen from "react-loading-screen";

class App extends React.Component {
  // UNSAFE_componentWillMount() {
  //   $(window).on("load", function() {
  //     $(".bar").fadeOut();
  //   });
  // }
  // componentDidUpdate() {
  //   $(window).on("load", function() {
  //     $(".bar").fadeOut();
  //   });
  // }
  render() {
    return (
      <div className="App row mx-auto">
        {/* <LoadingScreen
          loading={true}
          spinnerColor="#daa4aa"
          textColor="#fff"
          // logoSrc="/logo.png"
          // text="Here an introduction sentence (Optional)"
        > */}
        <BrowserRouter>
          {/* <ScrollTop /> */}
          {document.addEventListener("contextmenu", event =>
            event.preventDefault(),
          )}
          <Header />
          <Switch>
            <Route exact path="/" component={Container} />
            <Route
              path="/assignment-details/:id"
              component={AssignmentDetails}
            />
            <Route
              exact
              path="/group-registration"
              component={GroupRegistrationForm}
            />
            <Route
              exact
              path="/project-registration"
              component={ProjectRegistrationForm}
            />
            <Route exact path="/waiting-page" component={WaitingPage} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
          <Footer />
        </BrowserRouter>{" "}
        {/* </LoadingScreen> */}
      </div>
    );
  }
}

export default App;
