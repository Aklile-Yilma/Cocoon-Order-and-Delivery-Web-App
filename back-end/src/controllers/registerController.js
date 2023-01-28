const User = require("../models/User");
const bcrypt = require("bcrypt");
const emailValidator = require("deep-email-validator");

const handleNewUser = async (req, res) => {
  const { user, email, fullname, pwd, phoneNum } = req.body;

  if (!user || !email || !pwd || !fullname || !phoneNum) {
    return res.status(400).json({
      message: "fullname, email, phoneNum and password are required",
    });
  }

  const isValidEmail = (await emailValidator.validate(email)).valid;

  if (!isValidEmail)
    return res.status(400).json({
      message: "email is invalid",
    });

  //  check for duplicates usernames in the db
  const duplicate = await User.findOne({ email: email }).exec();

  if (duplicate) return res.sendStatus(409); // conflict

  try {
    // encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    // store the new user
    const result = await User.create({
      username: user,
      fullname: fullname,
      email: email,
      phonenum: phoneNum,
      password: hashedPwd,
    });

    // console.log(result);

    res.status(201).json({ message: `New User ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  handleNewUser,
};
