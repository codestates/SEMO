require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const controllers = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PATCH"],
  })
);
app.use(cookieParser());
app.get("/sign/in", controllers.signin);
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

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});