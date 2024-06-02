const express = require("express");
const dbConnect = require("./mongoDB.js");

const mongodb = require("mongodb");

const app = express();

app.use(express.json()); //for req method

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

//simple post method for site
// app.post("/", (req, res) => {
//   res.send(req.body);               //taking requests
//   console.log(req.body);
// });

//post method for mongodb database

app.post("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.insertOne(req.body);
  res.send(data);
});

app.put("/:name", async (req, res) => {
  //updating in database mongodb
  let data = await dbConnect();
  data = await data.updateOne(
    { name: req.params.name }, // name: req.body.name
    {
      $set: req.body,
    }
  );
  res.send(data);
});

app.delete("/:id", async (req, res) => {
  let data = await dbConnect();
  data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.send(data);
});

app.listen(3000);
