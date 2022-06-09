require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    // TODO: Access token으로 sign합니다.
    // HINT: 토큰을 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
    const accessToken = sign(data, process.env.ACCESS_SECRET, {
      expiresIn: "1d",
    });
    return accessToken;
  },
  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: "3d" });
  },
  sendAccessToken: (res, accessToken) => {
    // TODO: JWT 토큰을 쿠키로 전달합니다.
    return res.cookie("jwt", accessToken);
    //res.json({ message: 'ok' });
  },
  sendRefreshToken: (res, refreshToken) => {
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
  },
  resendAccessToken: (res, accessToken, data) => {
    res
      .cookie("jwt", accessToken)
      .json({ data: { userInfo: data }, message: "ok" });
  },
  isAuthorized: (req) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return null;
    }
    try {
      return verify(authorization, process.env.ACCESS_SECRET);
    } catch (err) {
      // return null if invalid token
      return null;
    }
  },
};
