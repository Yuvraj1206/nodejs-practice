const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const saveInDb = async () => {
  //Model
  const productModel = mongoose.model("products", productSchema);
  let data = new productModel({
    name: "M 30s",
    price: 60000,
  });
  let result = await data.save();
  console.log(result);
};
// saveInDb();

const update = async () => {
  //Model
  const productModel = mongoose.model("products", productSchema);
  let data = await productModel.updateOne(
    { name: "M 30s" },
    {
      $set: {
        price: 100,
      },
    }
  );
  console.log(data);
};
// update();

const deleteInDb = async () => {
  //Model
  const productModel = mongoose.model("products", productSchema);
  let data = await productModel.deleteOne({ name: "M 30s" });
  console.log(data);
};
// deleteInDb();

const findInDb = async () => {
  //Model
  const productModel = mongoose.model("products", productSchema);
  let data = await productModel.find({ brand: "samsung" });
  console.log(data);
};
findInDb();
