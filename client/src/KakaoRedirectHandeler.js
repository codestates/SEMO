import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useStore, useUserinfo } from "../src/zustand/store";

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();
  const { setLogin } = useStore();
  const { setUserNickname } = useUserinfo();
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    let grant_type = "authorization_code";
    let client_id = "80d37ab8b606a30f1f9a301818c6a4be";
    let token = axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://semo.s3-website.ap-northeast-2.amazonaws.com/oauth/callback/kakao&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("ACCESS_TOKEN", res.data.access_token);
        let info = axios
          .post("http://52.78.130.4:3500/kakao/profile", {
            token: window.localStorage.getItem("ACCESS_TOKEN"),
          })
          .then((res) => {
            console.log(res);
            console.log(window.localStorage.ACCESS_TOKEN);
            if (window.localStorage.ACCESS_TOKEN) {
              setLogin();
              setUserNickname(res.data.properties.nickname);
            }
          });
      });
    navigate("/");
  }, []);

  return <div>Loading....</div>;
};

export default KakaoRedirectHandler;
