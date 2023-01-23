const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { email, pwd } = req.body;

  if (!email || !pwd) {
    return res.status(400).json({
      message: "username and password are required",
    });
  }

  const foundUser = await User.findOne({ email: email }).exec();

  if (!foundUser) return res.sendStatus(404); // user not found
  // check if password is the same

  const match = await bcrypt.compare(pwd, foundUser.password);

  if (match) {
    const role = foundUser.role;
    // create Jwt
    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: foundUser.email,
          role: foundUser.role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "3d" }
    );

    const refreshToken = jwt.sign(
      { email: foundUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "30d" }
    );

    //   save refresh token with current user to db
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    // console.log(result);

    // Creates Secure Cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ role, accessToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
