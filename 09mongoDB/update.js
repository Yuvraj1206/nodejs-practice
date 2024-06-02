const dbConnect = require("./mongoDB.js");

const update = async () => {
  let responce = await dbConnect();
  let data = await responce.updateMany(
    { name: "s 24" },
    {
      $set: { name: "ass tontyfor", brand: "satsang" },
    }
  );

  console.log(data);
};

update();
