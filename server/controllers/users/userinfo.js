const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  try{

    const {user_id, password} = req.body; //유저 정보 
    const data = await user.findOne({
      where : {user_id : user_id, password : password}
    }); //일치하는 정보가 data 에 
    
    if(!data) return res.status(404).send("invalid user");
      
     else{

      return res.status(200).json({message : data})
    }

  }
  catch(err){
    return null;
  }



};
