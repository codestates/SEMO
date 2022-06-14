const { question } = require("../../models");

module.exports = (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.

  try {
    const { school, grade, subject, title, content, nickname, user_id } =
      req.body;
    if (!nickname) {
      return res.status(422).send("insufficient parameters supplied");
    } else {
      question
        .findOrCreate({
          where: { title: title },
          defaults: {
            user_id: user_id,
            school: school,
            grade: grade,
            subject: subject,
            content: content,
            nickname: nickname,
          },
        })
        .then(([result, isCreated]) => {
          if (!isCreated) {
            return res.status(201).json(result);
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
