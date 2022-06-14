const { answer } = require('../../models');


module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.

  try{
    const {title, content, user_id, nickname} = req.body;
    
      const data = 
      await answer.findOne({
        where: { user_id: user_id },
      })

      if(!data) return res.status(404).send("invalid");
      
      else{
       if (data !== null) {
         res.status(200).send('okay');
       } else {
         res.status(500).send('err');
       }
     }
    
  } 
  catch(err){
      return ;
  }
   

  


  //res.status(409).send();
};
