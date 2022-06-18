const { question } = require("../../models");

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.

  try {
    const { school, grade, subject } = req.body;

    const data = await question.findAll({
      where: { school: school, grade: grade, subject: subject },
    });
    if (!data) {
      return res.status(409).send({ message: "error" });
    } else {
      return res.status(201).json(data);
    }
  } catch (err) {
    return;
  }
};
