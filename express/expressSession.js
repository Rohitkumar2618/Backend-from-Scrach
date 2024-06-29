const express = require("express");
const app = express();

const expressSession = require("express-session");

app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", function (req, res) {
  req.session.polo = true;
  res.send("Hello World!");
});
