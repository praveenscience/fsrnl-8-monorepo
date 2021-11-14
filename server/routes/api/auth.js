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
  console.log({
    username,
    password,
    fullname,
    location,
    email,
    avatar,
    joindate,
    valid
  });
  res.end();
});
// Get Current LoggedIn User.
app.get("/", (req, res) => {});
// Logout the Session.
app.delete("/", (req, res) => {});

// Export the app.
module.exports = app;
