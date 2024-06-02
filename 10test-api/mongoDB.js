//this file is used for connecting with the data base

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const database = "e-comm"; //database to be seleted

async function dbConnect() {
  let result = await client.connect(); //promise  //it will connect mongo server and store in result
  let db = result.db(database); //selecting data base from server(mongo)
  return db.collection("Products"); //selecting collection from database
  // let response = await collection.find({}).toArray();
  // console.log(response);
}

module.exports = dbConnect;
