const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dal = require("./dal.js");

app.use(express.static("public"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  dal.allUsers().then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

app.post("/users/create", (req, res) => {
  const { name, email, password } = req.body;
  dal.createUser(name, email, password).then((user) => {
    console.log(user);
    res.send(user);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
