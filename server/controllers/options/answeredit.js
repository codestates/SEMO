const {answer } = require('../../models');


module.exports = async (req, res) => {
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  try{

    const {school, grade, subject, title, content, user_id, id} = req.body;
    await answer.update(
      {
        content: content,
      },
      {
      where: {user_id: user_id, title: title, id: id}
      }
    ) 
    .then(data => {
      if (!data) {
        res.status(400).send("error")
      }
      else {
        res.status(200).send("info edited")
      }
    })
  }
  catch(err){
    return null;
  }




  //res.status(500).send('');
};
