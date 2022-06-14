const { answer } = require('../../models');


module.exports = (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.

  try{
    const {title, content, user_id, nickname} = req.body;
    if(!title || !content){
      return res.status(422).send("insufficient parameters supplied");
    } else {
       answer.create({
        title : title,
        content: content,
        user_id: user_id,
        nickname: nickname
      }).then(()=> {
        return res.status(201).json({message : "answer created"})
      })
    }
  } 
  catch(err){
      return ;
  }
   

  


  //res.status(409).send();
};
