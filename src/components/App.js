import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Bootstrap/Navbar";
import GenericRoute from "./GenericRoute";
import UserProfile from "./UserProfile";
import FourOhFour from "./FourOhFour";

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
    Dark: false,
    Users: []
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
                    <GenericRoute Name={link.Name} />
                  </Route>
                ))}
                <Route
                  path="/users/:UserId"
                  render={() => <UserProfile Users={this.state.Users} />}
                />
                <Route component={FourOhFour} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
