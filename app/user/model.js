const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const userSchema = Schema(
  {
    name: {
      type: String,
      required: "Name is required!",
    },
    email: {
      type: String,
      required: "Email is required!",
    },
    password: {
      type: String,
      required: "Password is required!",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("User", userSchema);
