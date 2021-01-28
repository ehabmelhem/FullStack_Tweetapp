const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const users = []; //[{user,password}]

const tweets = []; //[{user,tweet}]
app.use(cookieParser());
app.use(bodyparser.json());
app.use(checkAdmin);
app.use("/users", usersRouter);

function checkAdmin(req, res, next) {
  //middleware
  console.log(req.cookies);

  if (req.cookies.role === "admin") res.authorized = true;
  else res.authorized = false;

  res.authorized;
  next();
}

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("localhost:", port);
});
