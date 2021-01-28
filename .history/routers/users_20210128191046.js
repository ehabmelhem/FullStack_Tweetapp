const userControler = require("../contrlers/user");
const router = require("express").Router();

router.get("/get-users", isAdmin, userControler.getUsers);
module.exports = router;
function isAdmin(req, res, next) {
  console.log(req.cookies);
}
