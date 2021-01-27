const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const users = [];//[{tweets}]

app.use(bodyparser.json());

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("localhost:", port);
});
