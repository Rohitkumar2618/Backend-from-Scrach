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

// ! Middleware
// Jiske pass three parameters ho like req,res,next -->agr ye 3 hai to its a middleware'
// ! ab middleware krta kya hai
// ? Middleware check & ya kuch add krna ho server ko req send krne se pahle uske liye middleWare use hota hai

// ! SYntax of middleware

app.use(function (req, res, next) {
  console.log("middleware");
  next(); // agr middleware complete ho to next middleware use ho
});

app.listen(3000);
