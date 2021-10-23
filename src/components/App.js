import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";
import { Link } from "react-router-dom";

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
        <Link to="/" className="btn btn-primary m-5">
          Go to Home Page
        </Link>
        <Link to="/feedback" className="btn btn-primary m-5">
          Go to Feedback Page
        </Link>
      </div>
    );
  }
}

export default App;
