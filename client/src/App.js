import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import KakaoRedirectHandler from "./KakaoRedirectHandeler";
import Mypage from "./pages/mypage";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/oauth/callback/kakao" component={KakaoRedirectHandler} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
