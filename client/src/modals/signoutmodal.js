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
    gap: 15px;
    display: flex;
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
const Signoutmodal = () => {
  const navigate = useNavigate();
  const { islogin, setLogOut } = useStore();
  const {
    testId,
    testPw,
    setTestId,
    setTestPw,
    setWithdraw,
    signOutModal,
    setSignOutModal,
    closeSignupModal,
  } = useStoreTemp();
  const { setUserInfoSignOutClear } = useUserinfo();

  const DeleteIdValueIdHandler = (e) => {
    setTestId(e.target.value); //test id 에 id 저장
    console.log("testid 값 ", testId);
  };
  const DeletePwValueHandler = (e) => {
    //test pw 에 pw 저장
    setTestPw(e.target.value);
    console.log("testid 값 ", testPw);
  };
  const testFn2 = async () => {
    console.log("회원탈퇴 버튼 눌림 ^^ ");
    await axios
      .post("http://localhost:3500/sign/withdraw", {
        user_id: testId,
        password: testPw,
      })
      .then((res) => {
        setUserInfoSignOutClear();
        setLogOut();
        alert("회원탈퇴 되었습니다.");
      });
    navigate("/");
  };

  return (
    <ModalContainer>
      <ModalBackdrop onClick={closeSignupModal}>
        <ModalView onClick={(e) => e.stopPropagation()}>
          <Closebutton>
            <div onClick={closeSignupModal}>&times;</div>
          </Closebutton>
          <Title>회원탈퇴</Title>
          <Login>아이디 비밀번호를 입력해주세요!</Login>
          <Loginform>
            <div className="idtext">
              아이디
              <Inputbox onChange={DeleteIdValueIdHandler} />
            </div>
            <div className="passwordtext">
              비밀번호
              <Inputbox type="password" onChange={DeletePwValueHandler} />
            </div>
            <Button onClick={testFn2}>회원탈퇴</Button>
          </Loginform>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
};

export default Signoutmodal;
