const axios = require("axios");

module.exports = async (req, res) => {
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
  try {
    const { token } = req.body;
    let info = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!info) {
      res.status(400).send("error");
    } else {
      res.status(200).json(info.data);
    }
  } catch (err) {
    null;
  }
};
