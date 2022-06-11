const { user } = require("../../models");

module.exports = async (req, res) => {
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  try {
    const { nickname } = req.body; //유저 정보
    const data = await user.findOne({
      where: { nickname: nickname },
    }); //일치하는 정보가 data 에

    if (!data) return res.status(200).send("ok");
    else {
      return res.status(200).send("no");
    }
  } catch (err) {
    return null;
  }
};
