import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import KakaoRedirectHandler from "./KakaoRedirectHandeler";
import Mypage from "./pages/mypage";
import Main from "./pages/main";
import WritingPage from "./pages/question";
import AnswerPage from "./pages/answer";
import Noticeboard from "./pages/noticeboard";
import QuestionsListPage from "./pages/questionList";
import MyanswerListPage from "./pages/myanswerlist";
import MyAnswerViewPage from "./pages/myanswerView";
import ViewQuestion from "./pages/viewquetion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/writequestion" element={<WritingPage />} />
        <Route path="/answer" element={<AnswerPage />} />
        <Route path="/noticeboard" element={<Noticeboard />} />
        <Route path="/oauth/callback/kakao" component={KakaoRedirectHandler} />
        <Route path="/questionlist" element={<QuestionsListPage />} />
        <Route path="/myanswerlist" element={<MyanswerListPage />} />
        <Route path="/myanswerview" element={<MyAnswerViewPage />} />
        <Route path="/viewquestion" element={<ViewQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
