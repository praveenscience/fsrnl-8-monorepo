import React, { Component } from "react";
import Navbar from "./Bootstrap/Navbar";

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
      </div>
    );
  }
}

export default App;
