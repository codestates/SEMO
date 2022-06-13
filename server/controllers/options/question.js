const { question } = require("../../models");

module.exports = (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.

  try {
    const { school, grade, subject, title, content, user_id } = req.body;
    if (!user_id) {
      return res.status(422).send("insufficient parameters supplied");
    } else {
      question
        .findOrCreate({
          where: { title: title },
          defaults: {
            school: school,
            grade: grade,
            subject: subject,
            content: content,
            user_id: user_id,
          },
        })
        .then(([result, isCreated]) => {
          if (!isCreated) {
            return res.status(409).send({ message: result });
          } else {
            return res.status(201).json({ message: "question created" });
          }
        });
    }
  } catch (err) {
    return;
  }

  //res.status(409).send();
};
