// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// const database = "e-comm"; //database to be seleted

// async function dbConnect() {
//   let result = await client.connect(); //promise  //it will connect mongo server and store in result
//   let db = result.db(database); //selecting data base from server(mongo)
//   return db.collection("Products"); //selecting collection from database
//   // let response = await collection.find({}).toArray();
//   // console.log(response);
// }

const dbConnect = require("./mongoDB.js");

// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

const main = async () => {
  let data = await dbConnect();
  // data = await data.find().toArray();             //ye pura data print karega
  data = await data.find({ brand: "Iphone" }).toArray();
  console.log(data);
};

main();
