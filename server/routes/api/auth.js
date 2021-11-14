// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();
// Import the Users.
const Users = require("../../constants/users.json");

// Login to the App.
app.post("/login", (req, res) => {});
// Register with the App.
app.post("/register", (req, res) => {});
// Get Current LoggedIn User.
app.get("/", (req, res) => {});
// Logout the Session.
app.delete("/", (req, res) => {});

// Export the app.
module.exports = app;
