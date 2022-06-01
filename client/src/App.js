import "./App.css";
import Mainpage_logout from "./pages/mainpage_logout";
import Mainpage_login from "./pages/mainpage_login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import KakaoRedirectHandler from "./KakaoRedirectHandeler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Mainpage_logout />} />
        <Route path="/ss" element={<Mainpage_login />} />
        <Route path="/oauth/callback/kakao" component={KakaoRedirectHandler} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
