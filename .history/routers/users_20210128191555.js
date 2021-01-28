const userControler = require("../");
const router = require("express").Router();

router.get("/get-users", userControler.getUsers);
module.exports = router;
