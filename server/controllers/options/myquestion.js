const { question } = require('../../models');


module.exports = (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.

  try{
    const {school, grade, subject, title, content, user_id} = req.body;
    if(!title || !content){
      return res.status(422).send("insufficient parameters supplied");
    } else {
       const data = question.findAll({
        where : {user_id : user_id},
        defaults : {
          school: school,
          grade: grade,
          subject: subject,
          content: content,
          title: title
        }
      })
        if(!data){
          return res.status(409).send({message: "error"})
        } else {
          return res.status(201).json({message : data})
        }
 
    }
  } 
  catch(err){
      return ;
  }
   

  


  //res.status(409).send();
};
