const router = require("express").Router();
const userController = require("./controller");
const cors = require("cors");

router.post("/login", cors(), userController.login);
router.post("/register", cors(), userController.register);

module.exports = router;
