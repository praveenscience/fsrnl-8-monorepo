// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();

let LoggedIn = null;
let UserName = "";
app.get("/", (req, res) => {
  res.json(LoggedIn);
});
app.post("/", (req, res) => {
  LoggedIn = true;
  res.json(LoggedIn);
});
app.delete("/", (req, res) => {
  LoggedIn = false;
  res.json(LoggedIn);
});
app.get("/name", (req, res) => {
  res.json(UserName);
});
app.post("/name", (req, res) => {
  UserName = req.body.Name;
  res.status(201).json("Updated");
});

// Export the app.
module.exports = app;
