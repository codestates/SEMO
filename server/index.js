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
    origin: ["http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());
app.get("/signin", controllers.signin);
app.post("/signup", controllers.signup);
app.post("/signout", controllers.signout);
app.post("/signwithdraw", controllers.signwithdraw);
app.post("/question", controllers.question);
app.post("/answer", controllers.answer);
app.delete("/questiondelete", controllers.questiondelete);
app.delete("/answerdelete", controllers.answerdelete);
app.get("/questionall", controllers.questionall);

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});