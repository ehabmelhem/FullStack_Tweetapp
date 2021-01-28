const userControler = require("../contrlers/user");
const router = require("express").Router();

router.get("/get-users", userControler.getUsers);
router.post("/check-user");
module.exports = router;
