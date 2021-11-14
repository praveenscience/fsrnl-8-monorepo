// Import filesystem library.
const fs = require("fs");
// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();
// Import the Users.
const Users = () =>
  JSON.parse(fs.readFileSync(__dirname + "/../../constants/users.json"));

const { hashPassword } = require("../../helpers/usersHelper");

// Login to the App.
app.post("/login", (req, res) => {
  const users = Users();
  const { username, password } = req.body;
  // Make sure the request is valid.
  const valid =
    typeof username === "string" &&
    typeof password === "string" &&
    username.trim().length > 0 &&
    password.trim().length > 0;
  // Check if valid request, user has given all required elements.
  if (valid) {
    // Check if there's already a user with the same name.
    if (typeof users[username] === "undefined") {
      // User not found.
      res.status(404).json({
        Error: "User doesn't exist"
      });
    } else {
      // User exists.
      if (users[username].password === hashPassword(password)) {
        // Username and Password combination is correct.
        // Set the session and login the user.
        const FinalUser = { ...users[username], profileURL: "/" + username };
        delete FinalUser.password;
        req.session.User = FinalUser;
        res.json({ userdata: req.session.User, walldata: [] });
      } else {
        // Username and Password combination is correct.
        res.status(404).json({
          Error: "Invalid Username & Password."
        });
      }
    }
  } else {
    res.status(400).json({
      Error: "You have to give all the mandatory fields."
    });
  }
});
// Register with the App.
app.post("/register", (req, res) => {
  const users = Users();
  const joindate = new Date();
  const { username, password, fullname, location, email, avatar } = req.body;
  // Make sure the request is valid.
  const valid =
    typeof username === "string" &&
    typeof password === "string" &&
    typeof fullname === "string" &&
    typeof location === "string" &&
    typeof email === "string" &&
    typeof avatar === "string" &&
    username.trim().length > 0 &&
    password.trim().length > 0 &&
    fullname.trim().length > 0 &&
    location.trim().length > 0 &&
    email.trim().length > 0 &&
    avatar.trim().length > 0;
  // Check if valid request, user has given all required elements.
  if (valid) {
    // Check if there's already a user with the same name.
    if (typeof users[username] !== "undefined") {
      // User already exists.
      res.status(409).json({
        Error: "User already exists."
      });
    } else {
      // Store the new user.
      users[username] = {
        username,
        password: hashPassword(password),
        fullname,
        location,
        email,
        avatar,
        joindate
      };
      fs.writeFileSync(
        __dirname + "/../../constants/users.json",
        JSON.stringify(users)
      );
      res.status(201).json({
        Message: `User ${fullname} created with username ${username} with password ${hashPassword(
          password
        )}.`
      });
    }
  } else {
    res.status(400).json({
      Error: "You have to give all the mandatory fields."
    });
  }
});
// Get Current LoggedIn User.
app.get("/", (req, res) => {
  res.json({ userdata: req.session.User, walldata: [] });
});
// Logout the Session.
app.delete("/", (req, res) => {});

// Export the app.
module.exports = app;
