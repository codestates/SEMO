import React, { useEffect } from "react";
import axios from "axios";
import Mainpage_login from "./pages/mainpage_login";

const KakaoRedirectHandler = () => {
  useEffect(() => {
    let params = window.location.href.searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    let grant_type = "authorization_code";
    let client_id = "1d3ae3d7f704bfdf575aca7d042711fc";

  axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3500/kakao&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data.access_token);
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
        if (!res.data) {
          res.status(403).send({
            message: 'no permission to access resources'
          })
        }
        else {
          res.status(200).send({
            message: 'no permission to access resourcesdsdss'
          })
        }
      });
  }, []);

  return <Mainpage_login />;
};

export default KakaoRedirectHandler;
