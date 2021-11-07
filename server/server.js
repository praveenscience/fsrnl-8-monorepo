// Import the Express Library.
// import express.* (Java)
const express = require("express");
// Import CORS library.
const CORS = require("cors");
// Initialise a server side app.
// Express app = new Express(); (Java)
const app = express();
// Define a port address.
const port = 5000;
// Import routes.
const root = require("./routes/root");

// Use a Middleware to parse POST Data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require modular routes.
app.use("/", root);
// Add a CORS middleware.
app.use(CORS());

// Database Stuff.
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "praveen"
  }
});
app.set("db", knex);

// Listen the app on port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
