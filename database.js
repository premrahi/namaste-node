require("dotenv").config();

const { MongoClient } = require("mongodb");

// const url = "mongodb+srv://gulabJaamun:Prahi@123@gulabjaamun.id9ulo7.mongodb.net/";
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

//   const insertData = await collection.insertMany([
//     {
//       firstName: "avni",
//       lastName: "jain",
//       city: "DELHI",
//       phoneNumber: "1234567890",
//     },
//   ]);
//   console.log("Inserted Data => ", insertData);


  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const countResult = await collection.countDocuments({}) ;

  console.log(countResult) ;


  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

//NOTES :
// go to mongo db website
// create a free M0 cluster
// Create a user
// Get the connection string
// install mongoDB compass
