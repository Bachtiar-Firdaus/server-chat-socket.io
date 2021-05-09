const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const messageSchema = Schema({
  chatroom: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Chatroom is required",
    ref: "Chatroom",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: "User is required",
    ref: "User",
  },
  message: {
    type: String,
    required: "Message is required",
  },
});
module.exports = model("Message", messageSchema);
