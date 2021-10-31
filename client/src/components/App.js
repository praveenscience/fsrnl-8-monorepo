import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Bootstrap/Navbar";
import GenericRoute from "./GenericRoute";
import UserProfile from "./UserProfile";
import FourOhFour from "./FourOhFour";
import { GetUsers } from "../services/Users";
import Users from "./Users";
import Forms from "./Forms";

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
  }
];

class App extends Component {
  state = {
    Dark: false,
    Users: [],
    Loaded: false
  };
  toggleNav = () => {
    this.setState({ Dark: !this.state.Dark });
  };
  componentDidMount() {
    GetUsers().then(res =>
      this.setState({
        Users: res.data,
        Loaded: true
      })
    );
  }
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
                  render={() =>
                    this.state.Loaded ? (
                      <UserProfile Users={this.state.Users} />
                    ) : (
                      <p>Loading User Data...</p>
                    )
                  }
                />
                <Route
                  path="/users"
                  render={() => <Users users={this.state.Users} />}
                />
                <Route path="/forms" render={() => <Forms />} />
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
