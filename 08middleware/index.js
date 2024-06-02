const express = require("express");
const app = express();
const reqFilter = require("./middleware.js");
const route = express.Router();

route.use(reqFilter);

// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("<h1>Please provide an age to continue</h1>");
//   } else if (req.query.age < 18) {
//     res.send("<h1>Abhi tum baccha hai, baada ho kar ana</h1>");
//   } else {
//     next();
//   }
// };

// app.use(reqFilter);                      //application level middleware

app.get("/", (req, res) => {
  res.send("<h2>This is home page</h2>");
});

route.get("/user", (req, res) => {
  //route level middleware
  res.send("<h2>This is user page</h2>");
});

app.use("/", route);

app.listen(5000);
