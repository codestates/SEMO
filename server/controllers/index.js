module.exports = {
  signup: require("./users/signup"),
  signin: require("./users/signin"),
  signout: require("./users/signout"),
  signwithdraw: require("./users/signwithdraw"),
  question: require("./options/question"),
  answer: require("./options/answer"),
  questiondelete: require("./options/questiondelete"),
  answerdelete: require("./options/answerdelete"),
  questionall: require("./options/questionall"),
  userinfo: require("./users/userinfo"),
  infoedit: require("./users/nickname_edit"),
  answeredit: require("./options/answeredit"),
  questionedit: require("./options/questionedit"),
  passwordedit: require("./users/password_edit"),
  nicknameedit: require("./users/nickname_edit"),
  profileedit: require("./users/profile_edit"),
  auth: require("./users/auth"),
  idcheck: require("./users/idcheck"),
  nicknamecheck: require("./users/nicknamecheck"),
  myquestionsall: require("./options/myquestionall"),
  myanswer: require("./options/myanswer"),
  answerone: require("./options/answerone"),
  answereveryone: require("./options/answereveryone"),
  qfora: require("./options/qfora"),
  filter: require("./options/filter"),
  infinity: require("./options/infinity"),
  addinfinity: require("./options/addinfinity"),
};
