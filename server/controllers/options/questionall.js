const { question } = require('../../models');


module.exports = async (req, res) => {


  try{
    const data = await question.findAll({
      attributes: ['*'],
      raw: true
    })
    if(!data) return res.status(404).send("invalid");
      
     else{
      if (data !== null) {
        res.status(200).json(data);
      } else {
        res.status(500).send('err');
      }
    }
    }
   
  catch(err){
      return ;
  }
   

  
};
