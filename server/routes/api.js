// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();

app.get("/", (req, res) => {
  res.json("Welcome to API Server.");
});

// Export the app.
module.exports = app;
