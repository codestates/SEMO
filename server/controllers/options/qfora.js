const { question } = require("../../models");

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.

  try {
    const { title } = req.body;

    const data = await question.findOne({
      where: { title: title },
    });
    if (data !== null) {
      res.status(200).json(data);
    } else {
      res.status(500).send("err");
    }
  } catch (err) {
    return;
  }

  //res.status(409).send();
};
