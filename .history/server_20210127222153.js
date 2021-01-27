const express = require("express");
const bodyparser = require("body-parser");
const { element } = require("prop-types");
const app = express();
const users = []; //[{user,password}]

app.use(bodyparser.json());

const port = process.env.PORT || 3002;

app.post("/add-user", (req, res) => {
  const { user, password } = req.body;
  let elment = users.find((elm) => elm.user === user);
  res.send({ elm: element });
});

app.listen(port, () => {
  console.log("localhost:", port);
});
