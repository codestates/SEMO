require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const _ = require("lodash");
const controllers = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("uploads"));

app.get("/sign/auth", controllers.auth);
app.post("/sign/in", controllers.signin);
app.post("/sign/up", controllers.signup);
app.post("/sign/out", controllers.signout);
app.delete("/sign/withdraw", controllers.signwithdraw);
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
app.get("/sign/idcheck", controllers.idcheck);
app.get("/sign/nicknamecheck", controllers.nicknamecheck);

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/upload", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "파일 업로드 실패",
      });
    } else {
      let f = req.files.uploadFile;
      f.mv("./uploads/" + f.name);
      res.send({
        status: true,
        message: "파일이 업로드 되었습니다.",
        data: {
          name: f.name,
          minetype: f.minetype,
          size: f.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
