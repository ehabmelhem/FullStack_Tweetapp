const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const users = []; //[{user,password}]

app.use(bodyparser.json());

const port = process.env.PORT || 3002;

app.post("/add-user", (req, res) => {
  const { input, pass } = req.body;
  let elemnt = users.find((elm) => elm.user === input);
  if (elemnt.name) {
    res.send({ meesege: "good" });
  } else {
    res.send({ messege: "not good" });
  }
});

app.listen(port, () => {
  console.log("localhost:", port);
});
