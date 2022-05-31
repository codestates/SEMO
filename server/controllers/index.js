module.exports = {
  signup: require('./users/signup'),
  signin: require('./users/signin'),
  signout: require('./users/signout'),
  signwithdraw: require('./users/signwithdraw'),
  question: require('./options/question'),
  answer: require('./options/answer'),
  questiondelete: require('./options/questiondelete'),
  answerdelete: require('./options/answerdelete')
};
