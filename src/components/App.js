import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";
import { NavLink } from "react-router-dom";

class App extends Component {
  state = {
    Dark: false
  };
  toggleNav = () => {
    this.setState({ Dark: !this.state.Dark });
  };
  render() {
    return (
      <div className="App">
        <Navbar dark={this.state.Dark} toggleNav={this.toggleNav}>
          React Application
        </Navbar>
        <NavLink
          to="/"
          exact={true}
          className="btn btn-primary m-5"
          activeClassName="btn-lg"
        >
          Go to Home Page
        </NavLink>
        <NavLink
          to="/feedback"
          className="btn btn-primary m-5"
          activeClassName="btn-lg"
        >
          Go to Feedback Page
        </NavLink>
      </div>
    );
  }
}

export default App;
