const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("public"));
app.use(cors());

app.get("/account/create/:name/:email/:password", function (req, res) {
  res.send({
    name: req.params.name,
    email: req.params.email,
    password: req.params.password,
  });
});

app.get("/account/login/:email/:password", function (req, res) {
  res.send({
    email: req.params.email,
    password: req.params.password,
  });
});

app.get("/account/all", function (req, res) {
  res.send({
    name: "peter",
    email: "parker@mit.edu",
    password: "secret",
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
