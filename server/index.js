require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const _ = require("lodash");
const controllers = require("./controllers");
const multer = require("multer");
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static('uploads'));

app.get("/sign/auth", controllers.auth);
app.post("/sign/in", controllers.signin);
app.post("/sign/up", controllers.signup);
app.post("/sign/out", controllers.signout);
app.post("/sign/withdraw", controllers.signwithdraw);
app.post("/question", controllers.question);
app.post("/answer", controllers.answer);
app.delete("/question/delete", controllers.questiondelete);
app.delete("/answer/delete", controllers.answerdelete);
app.get("/question/all", controllers.questionall);
app.get("/user/info", controllers.userinfo);
app.patch("/answer/edit", controllers.answeredit);
app.patch("/question/edit", controllers.questionedit);
app.patch("/user/nickname/edit", controllers.nicknameedit);
app.patch("/user/password/edit", controllers.passwordedit);
app.post("/sign/idcheck", controllers.idcheck);
app.post("/sign/nicknamecheck", controllers.nicknamecheck);

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});





let storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads');	// 콜백 함수로 업로드 파일의 저장 위치를 설정한다.
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);	// 콜백 함수로 파일이 저장될 때 이름을 설정한다.
  }
});

const upload = multer({ storage: storage }).single('file');

app.post('/uploads', (req, res) => {
  upload(req, res, err => {
      if(err) {
          return res.json({ success: false, err});
      }
      return res.json({ success: true});
  })

});