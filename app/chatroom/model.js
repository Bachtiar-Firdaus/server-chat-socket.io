const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const chatroomSchema = Schema({
  name: {
    type: String,
    required: "Name is required!",
  },
});
module.exports = model("Chatroom", chatroomSchema);
