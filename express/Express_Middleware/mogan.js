//  Its use for getting data from the server
const express = require("express");
const app = express();

const morgan = require("morgan");

// app.use(morgan("dev"));
app.use(morgan("combined"));

app.use("/", function (req, res) {
  res.send("Hello Home!");
});

app.listen(3000);
