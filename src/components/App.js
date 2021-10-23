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
const Users = [
  {
    Name: "Praveen Kumar",
    Path: "/praveen",
    Intro: "I am a Full Stack JavaScript Specialist based in London, UK."
  },
  {
    Name: "Mudassar",
    Path: "/mudassar",
    Intro: "Day and Night I am learning :)"
  },
  {
    Name: "Sayan Dey",
    Path: "/sayan",
    Intro: "I am a .NET developer."
  },
  {
    Name: "Varun",
    Path: "/Varun",
    Intro: "Frontend developer based in berlin"
  },
  {
    Name: "Kundan Kumar Pandey",
    Path: "/kundan",
    Intro: "I am a developer. "
  },
  {
    Name: "Susanna",
    Path: "/susanna",
    Intro: "I am a fresher"
  },
  {
    Name: "Sree Ramya",
    Path: "/ramya",
    Intro: "I am Full Stack Learner"
  },
  {
    Name: "Bharatchandran",
    Path: "/bharatchandran",
    Intro: "I am a Btech student"
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
                <Route
                  path="/users/:UserId"
                  render={rp => {
                    const Username = rp.match.params.UserId;
                    const UserData = Users.find(
                      user => user.Path === "/" + Username
                    );
                    return UserData ? (
                      <div className="alert alert-info text-center">
                        <p>
                          This is the User Profile page for user: {Username}.
                          The person has got a name: {UserData.Name}.
                        </p>
                        <blockquote className="p-2 bg-white rounded shadow-sm">
                          <p className="m-0">{UserData.Intro}</p>
                        </blockquote>
                      </div>
                    ) : (
                      <div className="alert alert-danger text-center">
                        No one's there! Tata! 👋🏻
                      </div>
                    );
                  }}
                />
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
