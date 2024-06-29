const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "Anything you want to",
  })
);

app.use(flash());

app.get("/", (req, res) => {
  req.flash("error", "Invalid flash");
  res.redirect("/error");
});

app.get("/error", (req, res) => {
  let message = req.flash("error");
  res.send(message);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
