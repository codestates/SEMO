const { question } = require('../../models');


module.exports = (req, res) => {


  try{
    const data = question.findAll({})
    if(!data) return res.status(404).send("invalid");
      
     else{
      if (data !== null) {
        res.status(200).send({message: data});
      } else {
        res.status(500).send('err');
      }
    }
    }
   
  catch(err){
      return ;
  }
   

  
};
