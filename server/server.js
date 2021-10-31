// Import the Express Library.
// import express.* (Java)
const express = require("express");
// Initialise a server side app.
// Express app = new Express(); (Java)
const app = express();
// Define a port address.
const port = 5000;

// Create a GET Path.
app.get("/", (req, res) => {
  let output = "Hello Geeks!";
  if (Object.values(req.query).length > 0) {
    output += " Here's some queries: " + JSON.stringify(req.query, null, 2);
  }
  res.send(output);
});
app.post("/", (req, res) => {
  res.send("Hello Advanced Geeks!");
});

// Listen the app on port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
