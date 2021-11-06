// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();
// Import routes.
const users = require("./api/users");

app.get("/", (req, res) => {
  res.json("Welcome to API Server.");
});
app.get("/db", (req, res) => {
  const db = req.app.get("db");
  // First create and seed the tables.
  db.schema.hasTable("gfg_fbclone_users").then(exists => {
    if (exists) {
      // Table exists, do nothing.
      console.log("Table Exists");
      res.status(204).json();
    } else {
      // Table not there, let's create it.
      console.log("Table Doesn't Exist");
      // Create the table.
      db.schema
        .createTable("gfg_fbclone_users", table => {
          table.increments("userid");
          table.string("username");
          table.string("password");
          table.string("fullname");
          table.timestamp("created_at").defaultTo(db.fn.now());
        })
        .then(() => {
          res.status(201).json("Created the Users table.");
        });
    }
  });
});
app.use("/users", users);

// Export the app.
module.exports = app;
