//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
var obj = new ObjectID();
console.log(obj);
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  db.collection("Users").insertOne(
    {
      name: "Test",
      age: 25,
      location: "Philadelphia"
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert user", err);
      }

      console.log(result.ops);
    }
  );

  db.close();
});
