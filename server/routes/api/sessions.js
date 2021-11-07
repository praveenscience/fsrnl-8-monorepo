// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();

app.get("/", (req, res) => {
  const LoggedIn = req.session.LoggedIn;
  res.json(LoggedIn);
});
app.post("/", (req, res) => {
  req.session.LoggedIn = true;
  const LoggedIn = req.session.LoggedIn;
  res.json(LoggedIn);
});
app.delete("/", (req, res) => {
  req.session.LoggedIn = false;
  const LoggedIn = req.session.LoggedIn;
  res.json(LoggedIn);
});
app.get("/name", (req, res) => {
  res.json(req.session.UserName);
});
app.post("/name", (req, res) => {
  req.session.UserName = req.body.Name;
  res.status(201).json("Updated");
});

// Export the app.
module.exports = app;
