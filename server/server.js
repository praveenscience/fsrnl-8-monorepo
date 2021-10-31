// Import the Express Library.
// import express.* (Java)
const express = require("express");
// Initialise a server side app.
// Express app = new Express(); (Java)
const app = express();
// Define a port address.
const port = 5000;

// Use a Middleware to parse POST Data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Listen the app on port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
