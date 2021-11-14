// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();
// Import the Users.
const Users = require("../../constants/users.json");

// Login to the App.
app.post("/login", (req, res) => {});
// Register with the App.
app.post("/register", (req, res) => {
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
    // Store the new user.
    Users[username] = {
      username,
      password,
      fullname,
      location,
      email,
      avatar,
      joindate
    };
    res.status(201).json({
      username,
      password,
      fullname,
      location,
      email,
      avatar,
      joindate
    });
  } else {
    res.status(400).json({
      Error: "You have to give all the mandatory fields."
    });
  }
});
// Get Current LoggedIn User.
app.get("/", (req, res) => {});
// Logout the Session.
app.delete("/", (req, res) => {});

// Export the app.
module.exports = app;
