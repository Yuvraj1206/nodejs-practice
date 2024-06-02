const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, res) => {
  const user = {
    name: "Yuvraj Saha",
    email: "yuvrajsaha@gmail.com",
    skills: [
      "python",
      "java",
      "C++",
      "react",
      "JavaScript",
      "HTML",
      "CSS",
      "Node",
    ],
  };
  res.render("profile", { user });
});

app.get("/profile", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/nopage.html`);
});

app.listen(3000);
