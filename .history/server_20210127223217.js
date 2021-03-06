const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const users = []; //[{user,password}]

app.use(bodyparser.json());

const port = process.env.PORT || 3002;

app.post("/add-user", (req, res) => {
  const { input, pass } = req.body;
  let elemnt = users.find((elm) => elm.user === input);
  users.push({ user: input, pass: pass });
  if (!elemnt) {
    res.send({ meesege: "signup succesfull" });
  } else {
    res.send({ messege: "yo" });
  }
});

app.listen(port, () => {
  console.log("localhost:", port);
});
