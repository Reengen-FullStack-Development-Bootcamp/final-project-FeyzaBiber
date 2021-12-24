const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: {
      values: ["admin", "editor"],
      message: "{VALUE} is not supported",
    },
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);
