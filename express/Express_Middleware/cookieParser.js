const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser());

// Adding come data acording to cookie on web page
// ! but we can't read this cookie
app.get("/banned", function (req, res) {
  res.cookie("banned", true);
  res.send("You are banned");
});

// ! Read the data from the cookie

app.get("/check", function (req, res) {
  console.log(req.cookies.banned);
  res.send(" Checking");
});

app.listen(3000);

// ! Cokkie example

app.get("/check", function (req, res) {
  console.log(req.cookies.name);
  res.send("Checking");
});

app.get("/banned", function (req, res) {
  res.cookie("name", "Harsh");
  res.send("You are banned");
});
