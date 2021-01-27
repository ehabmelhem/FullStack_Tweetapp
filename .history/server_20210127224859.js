const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const users = []; //[{user,password}]

const tweets = []; //[{user,tweet}]

app.use(bodyparser.json());

const port = process.env.PORT || 3002;

app.post("/check-user", (req, res) => {
  const { user, pass } = req.body;
  let elemnt = users.find((elm) => elm.user === user && elm.pass === pass);
  if (elemnt) {
    res.send({"Login is good"});
  } else {
    res.send({ messege: "Login is not Good" });
  }
});

app.post("/add-user", (req, res) => {
  const { input, pass } = req.body;
  let elemnt = users.find((elm) => elm.user === input);
  users.push({ user: input, pass: pass });
  if (!elemnt) {
    res.send({ meesege: "signup succesfull" });
  } else {
    res.send({ messege: "you have to insert another user name" });
  }
});

app.listen(port, () => {
  console.log("localhost:", port);
});
