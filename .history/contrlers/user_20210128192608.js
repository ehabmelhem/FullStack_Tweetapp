const express = require("express");
const app = express();

const users = [
  { name: "Mohamad", role: "admin" },
  { name: "Tal", role: "public" },
];

exports.getUsers = (req, res) => {
  res.cookie("role", users.role, { maxAge: 90000000000, httpOnly: true });

  res.send({ ok: true, users });
};

exports.checkUser = (req, res) => {
  const { user, pass } = req.body;
  console.log("ehab melhem");
  let elemnt = users.find((elm) => elm.user === user && elm.pass === pass);
  if (elemnt) {
    res.send({ messege: "Login is good" });
  } else {
    res.send({ messege: "Login is not Good" });
  }
};

exports.addUser = (req, res) => {
  const { input, pass } = req.body;
  let elemnt = users.find((elm) => elm.user === input);
  users.push({ user: input, pass: pass, role: "public" });
  if (!elemnt) {
    res.send({ meesege: "signup succesfull" });
  } else {
    res.send({ messege: "you have to insert another user name" });
  }
};
