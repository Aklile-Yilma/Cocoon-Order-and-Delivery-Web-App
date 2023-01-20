const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ROLES_LIST } = require("../config/roles_list");
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    // has to be unique
    unique: true,
  },
  roles: {
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
