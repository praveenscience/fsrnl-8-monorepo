// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();
// Import the Users.
const Users = require("../../constants/users.json");

app.get("/", (req, res) => {
  res.json(Users);
});

// Export the app.
module.exports = app;
