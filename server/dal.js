const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
let db = null;

// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  console.log("Connected successfully to db server");

  // connect to myproject database
  db = client.db("badBank");
});

function createUser(name, email, password) {
  var collection = db.collection("users");
  var doc = { name: name, email: email, password: password, balance: 0 };
  return new Promise((resolve, reject) => {
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      err ? reject(err) : resolve(doc);
    });
  });
}

async function allUsers() {
  return new Promise((resolve, reject) => {
    db.collection("users")
      .find({})
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

module.exports = { createUser, allUsers };
