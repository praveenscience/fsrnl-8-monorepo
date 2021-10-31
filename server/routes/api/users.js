// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();
// Import the Users.
const Users = require("../../constants/users.json");

// R from CRUD: List All
app.get("/", (req, res) => {
  res.json([...Users]);
});
// R from CRUD: List One
app.get("/:Username", (req, res) => {
  const User = Users.find(user => user.Username === req.params.Username);
  if (User) {
    res.json(User);
  } else {
    res.status(404).json({
      Error: "User not found."
    });
  }
});

// Export the app.
module.exports = app;
