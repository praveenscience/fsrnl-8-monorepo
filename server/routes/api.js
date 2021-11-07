// Import the Express Library.
const express = require("express");
// Create an instance of router.
const app = express.Router();
// Import routes.
const users = require("./api/users");
const sessions = require("./api/sessions");

app.get("/", (req, res) => {
  res.json("Welcome to API Server.");
});
app.get("/db/:action", (req, res) => {
  const db = req.app.get("db");
  switch (req.params.action) {
    case "create":
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
      break;
    case "drop":
      // Check and drop the table.
      db.schema.hasTable("gfg_fbclone_users").then(exists => {
        if (exists) {
          // Table exists, do nothing.
          console.log("Table Exists");
          db.schema.dropTable("gfg_fbclone_users").then(() => {
            res.status(204).json();
          });
        } else {
          // Table not there.
          console.log("Table Doesn't Exist");
          // Create the table.
          res.status(404).json("Table Doesn't Exist.");
        }
      });
      break;
    case "check":
      // Check and return the status.
      db.schema.hasTable("gfg_fbclone_users").then(exists => {
        if (exists) {
          // Table exists, do nothing.
          console.log("Table Exists");
          res.status(204).json();
        } else {
          // Table not there.
          console.log("Table Doesn't Exist");
          // Create the table.
          res.status(404).json("Table Doesn't Exist.");
        }
      });
      break;
    case "list":
      // Check and return the status.
      db.schema.hasTable("gfg_fbclone_users").then(exists => {
        if (exists) {
          // Table exists, do nothing.
          console.log("Table Exists");
          db("gfg_fbclone_users").then(rows => {
            res.json(rows);
          });
        } else {
          // Table not there.
          console.log("Table Doesn't Exist");
          // Create the table.
          res.status(404).json("Table Doesn't Exist.");
        }
      });
      break;
  }
});
app.post("/db/new", (req, res) => {
  const db = req.app.get("db");
  const { username, password, fullname } = req.body;
  db("gfg_fbclone_users")
    .insert({ username, password, fullname })
    .then(() => {
      console.log(`User with ${username} created.`);
      res.status(201).json(`User with ${username} created.`);
    });
});
app.use("/users", users);
app.use("/sessions", sessions);

// Export the app.
module.exports = app;
