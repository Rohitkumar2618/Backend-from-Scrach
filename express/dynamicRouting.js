const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// dynamic Routing

app.get("/user/:username", function (req, res) {
  res.send(`Hello, ${req.params.username}!`);
});

// ? Dynamic routes

app.get("/author/:usename/:age", function (req, res) {
  res.send(`Hello, ${req.params.usename} with age ${req.params.age}!`);
});

// ! Route
//localhost:3000/author/rohitkumar/23

http: app.listen(3000);
