const express = require("express");
const app = express();
const path = require("path");

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "view"));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Route to render the index page with a dynamic title
app.get("/", function (req, res) {
  res.render("index", { title: "My EJS Form" });
});

// Route to handle /check endpoint
app.post("/check", function (req, res) {
  console.log(req.body);
  res.send("Working");
});

// Start the server
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
