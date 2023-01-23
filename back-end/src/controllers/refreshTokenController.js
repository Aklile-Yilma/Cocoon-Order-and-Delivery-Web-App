const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  // check that a cookie is sent with property jwt
  if (!cookies?.jwt) return res.sendStatus(401);

  // console.log(cookies.jwt);

  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) return res.sendStatus(404); // user not found with the refresh token sent

  // evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.email !== decoded.UserInfo.email) {
      return res.sendStatus(403);
    }

    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: decoded.UserInfo.email,
          role: foundUser.role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ role, accessToken });
  });
};

module.exports = { handleRefreshToken };
