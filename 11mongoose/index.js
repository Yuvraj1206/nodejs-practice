const mongoose = require("mongoose");

const SaveInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");

  //Schema
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });

  //Model
  const productModel = mongoose.model("products", productSchema);

  let data = new productModel({
    name: "M 30s",
    price: 50000,
  });

  let result = await data.save();
  console.log(result);
};

SaveInDB();
