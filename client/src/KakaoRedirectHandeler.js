import React, { useEffect } from "react";
import axios from "axios";
import Main from "./pages/main";

const KakaoRedirectHandler = () => {
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    let grant_type = "authorization_code";
    let client_id = "1d3ae3d7f704bfdf575aca7d042711fc";

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${client_id}
        &redirect_uri=http://52.78.130.4:3500/
        kakao&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      });
  }, []);

  return <Main />;
};

export default KakaoRedirectHandler;
