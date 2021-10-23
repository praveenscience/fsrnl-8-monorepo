import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Bootstrap/Navbar";

const Links = [
  {
    Name: "Home",
    Link: "/",
    Exact: true
  },
  {
    Name: "About Me",
    Link: "/about"
  },
  {
    Name: "Downloads",
    Link: "/downloads"
  },
  {
    Name: "Feedback",
    Link: "/feedback"
  }
];
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
        <div className="container my-3">
          <div className="row">
            <div className="col">
              <Switch>
                {Links.map(link => (
                  <Route key={link.Link} path={link.Link} exact={link.Exact}>
                    <div className="alert alert-info text-center">
                      This is the {link.Name} page.
                    </div>
                  </Route>
                ))}
                <Route path="/users/:UserId">
                  <div className="alert alert-info text-center">
                    This is the User Profile page.
                  </div>
                </Route>
                <Route>
                  <div className="alert alert-info text-center">Get Lost.</div>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
