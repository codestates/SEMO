const { answer } = require("../../models");

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.


  try {
    const { title, content, user_id, nickname } = req.body;

    const data = await answer.findAll({
      where: { user_id: user_id, title: title },
    });
    if (!data) {
      res.status(400).send("error");
    } else {
      res.status(200).send(data);
    }
  } catch (err) {
    return;

  }

  //res.status(409).send();
};
