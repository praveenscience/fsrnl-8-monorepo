// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();

// Create a GET Path.
app.get("/", (req, res) => {
  let output = "Hello Geeks, Welcome to HomePage!";
  if (Object.values(req.query).length > 0) {
    output += " Here's some queries: " + JSON.stringify(req.query, null, 2);
  }
  res.send(output);
});
// Dyanmic Parameter Routing.
app.get("/:user", (req, res) => {
  res.send(`Hello Geeks, Welcome to ${req.params.user}'s HomePage!`);
});
app.post("/", (req, res) => {
  let output = "Hello Advanced Geeks!";
  if (Object.values(req.query).length > 0) {
    output += " Here's some queries: " + JSON.stringify(req.query, null, 2);
  }
  if (Object.values(req.body).length > 0) {
    output += " Here's some body: " + JSON.stringify(req.body, null, 2);
  }
  res.send(output);
});

// Export the app.
module.exports = app;
