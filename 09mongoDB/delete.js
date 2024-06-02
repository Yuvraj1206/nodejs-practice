const dbConnect = require("./mongoDB.js");

const deleteData = async () => {
  let response = await dbConnect();
  let data = await response.deleteMany({ name: "s 26" });

  if (data.acknowledged) {
    console.log("Data is deleted", data.deletedCount);
  }
};

deleteData();
