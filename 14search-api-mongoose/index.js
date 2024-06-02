const express = require("express");
const app = express();
app.use(express.json()); //to convert string to json

require("./config"); //connecting with database

const products = require("./products"); //importing model or collection

app.get("/search/:key", async (req, res) => {
  let data = await products.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

app.listen(5000);
