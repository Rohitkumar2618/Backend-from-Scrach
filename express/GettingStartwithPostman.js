const express = require("express");
const app = express();

let data = [1, 2, 3, 4, 5, 6, 7];

app.get("/", function (req, res) {
  res.send("hello ji!");
});

app.get("/data", function (req, res) {
  res.send(data);
});

app.post("/data/:number", function (req, res) {
  data.push(parseInt(req.params.number));
  res.send(data);
});

app.delete("/data", function (req, res) {
  data.pop();
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000"); // server is listening on port 3000
});
