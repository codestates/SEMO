const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
``
try{
  
  const accessTokenData = isAuthorized(req); //a 가 담김 
   
  if(!accessTokenData){
      return res.status(401).send({ data: null, message: 'not authorized' });



  } else {
   const userInfo = await user.findOne({
     where  :{user_id : accessTokenData.user_id}
   }) ;

   return res.status(200).cookie("jwt",req.cookies.jwt).json({data : userInfo })

  }



}catch(err){
  null
}


 
};
