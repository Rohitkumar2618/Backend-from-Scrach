const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res, next) => {
  try {
    res.send(hey);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send("internal server error");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
