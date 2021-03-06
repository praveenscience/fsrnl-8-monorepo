// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();
// Import routes.
const users = require("./api/users");
const auth = require("./api/auth");

app.get("/", (req, res) => {
  res.json("Welcome to API Server.");
});
app.use("/auth", auth);
app.use("/users", users);

// Export the app.
module.exports = app;
