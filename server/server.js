// Import the Express Library.
// import express.* (Java)
const express = require("express");
// Import CORS library.
const CORS = require("cors");
// Import Express Sessions.
const session = require("express-session");
// Initialise a server side app.
// Express app = new Express(); (Java)
const app = express();
// Define a port address.
const port = 5000;
// Import routes.
const root = require("./routes/root");

// Add a CORS middleware.
app.use(CORS({ origin: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// Use a Middleware to parse POST Data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for Sessions handling.
const sessConfig = {
  secret: "gfg fb clone",
  cookie: {},
  resave: false,
  saveUninitialized: true
};
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sessConfig.cookie.secure = true; // serve secure cookies
}
app.use(session(sessConfig));

// Require modular routes.
app.use("/", root);

// Listen the app on port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
