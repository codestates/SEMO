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
const { min } = require("lodash");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("uploads"));

app.get("/sign/auth", controllers.auth);
app.post("/sign/in", controllers.signin);
app.post("/sign/up", controllers.signup);
app.post("/sign/out", controllers.signout);
app.post("/sign/withdraw", controllers.signwithdraw);
app.post("/question", controllers.question);
app.post("/answer", controllers.answer);
app.post("/question/delete", controllers.questiondelete);
app.post("/answer/delete", controllers.answerdelete);
app.get("/question/all", controllers.questionall);
app.get("/user/info", controllers.userinfo);
app.post("/myanswer/all", controllers.myanswer);
app.patch("/answer/edit", controllers.answeredit);
app.patch("/question/edit", controllers.questionedit);
app.patch("/user/nickname/edit", controllers.nicknameedit);
app.patch("/user/password/edit", controllers.passwordedit);
app.post("/sign/idcheck", controllers.idcheck);
app.post("/sign/nicknamecheck", controllers.nicknamecheck);
app.post("/myquestion/all", controllers.myquestionsall);
app.get("/myanswer/all", controllers.myanswer);
app.post("/answer/one", controllers.answerone);
app.patch("/user/profile/edit", controllers.profileedit);
app.post("/answer/everyone", controllers.answereveryone);
app.post("/question/qfora", controllers.qfora);
app.post("/question/filter", controllers.filter);
const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// 사진 업로드로 한번 .  --> 이름이 createAt  //사진이름
//사진변경 요청을 보낼 때 사진이름
//axios.profile 넣는다 이거 잖아요
//profile 들어간 2022sdfjkl === file 이름

app.post("/uploads", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({ success: true });
  });
});

//사진 업로드하고,  1번
//then -->axios. user profile 아무거나 넣어도 상관 없이 업데이트를 수정 updated At ===사진 파일의 이름, createdAt  1번
//프로필 사진이 올라감 (new Date )202206 15 031011초 user edit  profile 뭔가를 넣으면,

const { uploadFile } = require("./s3");
const upload = multer({ dest: "uploads/" });
app.post("/uploads3", upload.single("file"), async (req, res) => {
  const file = req.file;
  const result = await uploadFile(file);
  // console.log(result.Location);
  res.send(result.Location);
});
