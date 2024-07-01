// ! Notes

// ?  Agar ek website se kisi or website pe data pass krna hai to CORS ka use krna padta hai
// ! For that use   "npm i cors"

// const  cors = require('cors')

const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

// ! IF CORS ko har jagha,  mean hr route pr use krna ho to ye use krte
app.get("/", function (req, res) {
  res.send("Welcome to my API");
});

// ! kisi particular route ke liye

app.get("/", cors(), function (req, res) {
  res.send("Welcome to my API");
});
