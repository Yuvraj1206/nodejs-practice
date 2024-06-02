var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/create", function (req, res) {
  res.send("bangya");
  req.flash("age", 20);
});

router.get("/check", function (req, res) {
  res.send("check console");
  console.log(req.flash("age"));
});

module.exports = router;
