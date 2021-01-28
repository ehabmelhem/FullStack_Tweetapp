const express = require("express");
const bodyparser = require("body-parser");
var cookieParser = require("cookie-parser");
const usersRouter = require("./routers/users");
const app = express();
const users = []; //[{user,password}]

const tweets = []; //[{user,tweet}]
// app.use(cookieParser());
app.use(bodyparser.json());
app.use(checkAdmin);
app.use("/users", usersRouter);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("localhost:", port);
});
