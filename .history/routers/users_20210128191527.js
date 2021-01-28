const userControler = require("./con");
const router = require("express").Router();

router.get("/get-users", userControler.getUsers);
module.exports = router;
