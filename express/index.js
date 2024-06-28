// ! Express ko add kiya iss app ko
const express = require("express");

// Ab express me jo hai vo add kiya app me

const app = express();

// ! Home Page
app.get("/", function (req, res) {
  res.send("Welcome Home Page");
});

// ! About Page
app.get("/about", function (req, res) {
  res.send("Hello About Page");
});

// ! its a all route that will return at last its show ki agar koi route nhi hpga to ye chalega
// ? * --> mean all
app.get("*", function (req, res) {
  res.send("Route not found");
});

app.listen(3000);
