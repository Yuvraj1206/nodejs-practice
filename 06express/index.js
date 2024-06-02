const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Welcome, This is home page");
});

app.get("/about", (req, res) => {
  res.send("welcome, This is about page");
});

app.listen(5000);
