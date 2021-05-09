const router = require("express").Router();
const chatroomController = require("./controller");

const { security } = require("../middlewares");

router.get("/chatroom", security, chatroomController.getAllChatrooms);
router.post("/chatroom", security, chatroomController.createChatroom);

module.exports = router;
