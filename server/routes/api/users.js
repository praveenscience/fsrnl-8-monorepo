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
// Create a new User.
app.post("/", (req, res) => {
  const { Username, FullName, GitHub, LinkedIn } = req.body;
  if (
    Username &&
    FullName &&
    GitHub &&
    LinkedIn &&
    Username.trim().length > 3 &&
    FullName.trim().length > 3 &&
    GitHub.trim().length > 22 &&
    LinkedIn.trim().length > 28
  ) {
    Users.push({ Username, FullName, GitHub, LinkedIn });
    res
      .status(201)
      .json(`User ${FullName} with username "${Username}" has been created.`);
  } else {
    res.status(400).json({
      Error:
        "You have to send all the values for Username, FullName, GitHub, LinkedIn"
    });
  }
});

// Export the app.
module.exports = app;
