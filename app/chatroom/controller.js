const Chatroom = require("./model");

async function createChatroom(req, res, next) {
  try {
    const { name } = req.body;
    const nameRegex = /[A-Za-z]/;
    if (!nameRegex.test(name)) {
      return res.json({ message: "Chatroom name can contain only alphabets." });
    }

    const chatroomExist = await Chatroom.findOne({ name });
    if (chatroomExist) {
      return res.json({ message: "Chatroom whith that name already exist!" });
    }
    const chatroom = new Chatroom({
      name,
    });
    await chatroom.save();
    res.json({
      message: "Chatroom created",
    });
  } catch (error) {}
}

async function getAllChatrooms(req, res, next) {
  try {
    const chatrooms = await Chatroom.find({});
    res.json({
      message: "success",
      data: chatrooms,
    });
  } catch (error) {}
}
module.exports = { createChatroom, getAllChatrooms };
