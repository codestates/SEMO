const { answer } = require('../../models');


module.exports = async (req, res) => {
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  try{

    const {user_id, title} = req.body; //유저 정보 
    const data = await answer.findOne({
      where : {user_id : user_id, title : title}
    }); //일치하는 정보가 data 에 
    
    if(!data) return res.status(404).send("invalid");
      
     else{
      if (data !== null) {
        data.destroy();
        res.status(200).send('답변이 삭제되었습니다.');
      } else {
        res.status(500).send('err');
      }
    }

  }
  catch(err){
    return null;
  }




  //res.status(500).send('');
};