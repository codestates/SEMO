import styled from "styled-components";
import Button from "../components/button";
import kakaologo from "../images/kakaologo.png";
import { KAKAO_AUTH_URL } from "../oauth";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

const ModalContainer = styled.div`
  text-align: center;
  margin: 120px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  border-radius: 30px;
  background-color: #a573ff;
  border: 1px solid #7a57d1;
  box-sizing: border-box;
  width: 234px;
  height: 275px;
`;

const Closebutton = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  color: white;
  font-size: 20px;
  width: 234px;

  > div {
    cursor: pointer;
    padding: 10px 15px 0 0;
  }
`;

const Title = styled.div`
  /* border: 1px solid blue; */
  color: white;
  font-size: 30px;
`;

const Login = styled.div`
  color: white;
  font-size: 15px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;

const Loginform = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-top: 5px;

  > div {
    color: white;
    font-size: 13px;
  }

  > div.idtext {
    /* background-color: black; */
    display: flex;
    align-items: center;
    gap: 15px;
  }

  > div.passwordtext {
    /* background-color: red; */
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const Inputbox = styled.input`
  width: 119px;
  height: 20px;
  background-color: #d9d9d9;
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Kakaologbtn = styled.img`
  /* border: 1px solid blue; */
  padding-top: 15px;
`;
const Loginmodal = () => {
  const navigate = useNavigate();
  const { closeLoginModal, changeModal, setLogin } = useStore();
  const { testId, testPw, setTestId, setTestPw, settoken, token } =
    useStoreTemp();
  const {
    user_id,
    password,
    nickname,
    setUserUserid,
    setUserNickname,
    setUserPassword,
    setedPw,
    profile2,
    setUserProfile,
  } = useUserinfo();
  const TestIdHandler = (e) => {
    setTestId(e.target.value);
  };
  const TestPwHandler = (e) => {
    setTestPw(e.target.value);
  };
  const testFn2 = () => {
    axios
      .post("http://52.78.130.4:3500/sign/in", {
        user_id: testId,
        password: testPw,
      })
      .then((res) => {
        localStorage.clear();
        const access = res.data.data;
        const refresh = res.data.refresh;
        if (res.data.data) {
          localStorage.setItem("token", access);
          localStorage.setItem("user_id", testId);
        }
        return axios
          .get(
            "http://52.78.130.4:3500/sign/auth",
            {
              headers: {
                authorization: `${access}`,
              },
            },
            { withCredential: true }
          )
          .then((res) => {
            setUserUserid(res.data.data.user_id);
            setUserNickname(res.data.data.nickname);
            setUserPassword(res.data.data.password);
            setedPw(res.data.data.password);
            setUserProfile(res.data.data.profile);
            setLogin();
            closeLoginModal();
            console.log(token, testId, testPw);
          });
      });
    navigate("/");
  };

  return (
    <ModalContainer>
      <ModalBackdrop onClick={closeLoginModal}>
        <ModalView onClick={(e) => e.stopPropagation()}>
          <Closebutton>
            <div onClick={closeLoginModal}>&times;</div>
          </Closebutton>
          <Title>로그인</Title>
          <Login>
            회원이 아니신가요?
            <Button onClick={changeModal}>회원가입</Button>
          </Login>
          <Loginform>
            <div className="idtext">
              아이디
              <Inputbox value={testId} onChange={TestIdHandler} />
            </div>
            <div className="passwordtext">
              비밀번호
              <Inputbox
                type="password"
                value={testPw}
                onChange={TestPwHandler}
              />
            </div>
            <Button onClick={testFn2}>로그인</Button>
          </Loginform>
          <a href={KAKAO_AUTH_URL}>
            <Kakaologbtn src={kakaologo} alt="" />
          </a>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
};

export default Loginmodal;
