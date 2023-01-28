const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ROLES_LIST } = require("../config/roles_list");

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phonenum: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    default: ROLES_LIST.User,
    enum: Object.values(ROLES_LIST),
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);
