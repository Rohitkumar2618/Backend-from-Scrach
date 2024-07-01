const express = require("express");

const app = express();

// ! Middleware
// Jiske pass three parameters ho like req,res,next -->agr ye 3 hai to its a middleware'
// ! ab middleware krta kya hai
// ? Middleware check & ya kuch add krna ho server ko req send krne se pahle uske liye middleWare use hota hai

// ! SYntax of middleware

app.use((req, res, next) => {
  console.log("Middleware executed");
  next(); // Call next() to pass control to the next middleware function
});

app.get("/", function (req, res) {
  res.send("Welcome Home Page");
});

app.listen(3000);
