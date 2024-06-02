const dbConnect = require("./mongoDB.js");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "s 24",
      brand: "Samsung",
      price: "Rs 1,24,000",
      category: "mobile",
    },
    {
      name: "s 25",
      brand: "Samsung",
      price: "Rs 1,24,000",
      category: "mobile",
    },
    {
      name: "s 26",
      brand: "Samsung",
      price: "Rs 1,24,000",
      category: "mobile",
    },
  ]);

  if (result.acknowledged) {
    console.log("Data Inserted");
  }
};

insert();
