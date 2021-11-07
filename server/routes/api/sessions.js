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
  console.log(`Fetching name as: ${req.session.UserName}`);
  res.json({
    Name: req.session.UserName,
    session: req.session,
    id: req.sessionID
  });
});
app.post("/name", (req, res) => {
  console.log(req.body.Name);
  req.session.UserName = req.body.Name;
  console.log(`Name set as ${req.session.UserName}`);
  res
    .status(201)
    .json({ msg: "Updated", session: req.session, id: req.sessionID });
});

// Export the app.
module.exports = app;
