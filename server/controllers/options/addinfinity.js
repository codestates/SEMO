const { question } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.
  const { id } = req.body;
  try {
    const data = await question.findAll({
      attributes: ["*"],
      where: {
        id: { [Op.lt]: [Number(id)] },
      },
      raw: true,
      order: [["id", "desc"]],
      limit: 8,
    });
    if (!data) {
      return res.status(409).send({ message: "error" });
    } else {
      return res.status(201).json(data.reverse());
    }
  } catch (err) {
    return;
  }

  //res.status(409).send();
};
