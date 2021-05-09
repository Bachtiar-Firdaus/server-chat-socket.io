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

module.exports = { createChatroom };
