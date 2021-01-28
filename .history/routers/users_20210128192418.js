const userControler = require("../contrlers/user");
const router = require("express").Router();

router.get("/get-users", userControler.getUsers);
router.post("/check-user", userControler.checkUser);
router.post("/add-user",userControler.addUser;
module.exports = router;
