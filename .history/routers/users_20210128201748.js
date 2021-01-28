const userControler = require("../contrlers/user");
const router = require("express").Router();

router.get("/get-users", userControler.getUsers);
router.post("/check-user", userControler.checkUser);
router.post("/add-user", userControler.addUser);
router.get("/get-tweets", userControler.getTweets);
router.get("/add-tweet", userControler.addTweet);
module.exports = router;
