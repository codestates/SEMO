const { user } = require("../../models");

module.exports = async (req, res) => {
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  try {
    const { user_id, password, nickname } = req.body; //유저 정보
    await user
      .update(
        {
          nickname: nickname,
        },
        {
          where: { user_id: user_id },
        }
      )
      .then((data) => {
        if (!data) {
          res.status(400).send("error");
        } else {
          res.status(200).send("info edited");
        }
      });
  } catch (err) {
    return null;
  }

  //res.status(500).send('');
};
