const { user } = require('../../models');
const { sendAccessToken } = require('../tokenFunctions');

module.exports = (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.

  try{
    const {user_id, password, nickname} = req.body;
    if(!user_id || !password || !nickname){
      return res.status(422).send("insufficient parameters supplied");
    } else {
       user.findOrCreate({
        where : {user_id : user_id},
        defaults : {
          nickname: nickname,
          password: password,

        }
      }).then(([result, isCreated])=> {
          if(!isCreated){
            return res.status(409).send("id exists")
          } else {
            return res.status(201).cookie('jwt', sendAccessToken).json({message : "okay"})
          }
      })
    }
  } 
  catch(err){
      return ;
  }
   

  


  //res.status(409).send();
};
