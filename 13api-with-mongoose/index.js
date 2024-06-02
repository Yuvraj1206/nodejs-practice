const express = require("express");
const app = express();
app.use(express.json()); //to convert string to json

require("./config"); //connecting with database

const products = require("./products"); //importing model or collection

app.post("/create", async (req, res) => {
  let data = new products(req.body);
  let result = await data.save();
  res.send(result);
});

app.get("/list", async (req, res) => {
  let data = await products.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  let data = await products.deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  let data = await products.updateOne(req.params, {
    $set: req.body,
  });
  res.send(data);
});

app.listen(5000);
