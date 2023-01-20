const User = require("../models/User");

const handleLogout = async (req, res) => {
  // on client also delete the accesstoken
  const cookies = req.cookies;
  // check that a cookie is sent with property jwt
  if (!cookies?.jwt) return res.sendStatus(204);

  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204);
  }

  // delete refresh token in db
  foundUser.refreshToken = "";
  const result = await foundUser.save();
  // console.log(result);

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.sendStatus(204);
};

module.exports = { handleLogout };
