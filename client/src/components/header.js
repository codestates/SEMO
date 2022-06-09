import { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import Button from "../components/button.js";
import profileimg from "../images/제경모.jpg";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
import axios from "axios";
import { Link } from "react-router-dom";

const HeadDiv = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  width: 100vw;
`;

const Logoimage = styled.img.attrs({
  src: `${logo}`,
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 17vw;
  height: 17vw;
`;
const MyProFileImg = styled.img.attrs({
  src: `${profileimg}`,
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10vw;
  height: 10vw;
  border-radius: 99px;
  padding: 0 0 0 0px;
`;
const UserNickName = styled.span`
  font-size: 3vw;
`;
const RightContainer = styled.div`
  diplay: flex;
  align-items: flex-end;
  flex-direction: row;
`;
const MyprofileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5vw;
  align-items: center;
  pading-right: 2vw;
`;
const Btndiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 2vw;
  margin-top: 2vw;
  .headerBtn {
    font-size: 3vw;
    width: 17vw;
  }
  .link {
    text-decoration: none;
  }
`;

const Header = (props) => {
  const { openLoginModal, openSignupModal, isLogin } = useStore();
  const { jwttoken, clickMyPage, setClickMypage } = useStoreTemp();
  const { user_id, password, nickname } = useUserinfo();

  const getuserinfo = async () => {
    await axios
      .get("http://localhost:3500/user/auth", {
        headers: {
          authorization: `${jwttoken}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      {isLogin === false ? (
        <HeadDiv>
          <Logoimage />

          <RightContainer>
            <Btndiv>
              <Button className="headerBtn" onClick={openLoginModal}>
                로그인
              </Button>
              <Button className="headerBtn" onClick={openSignupModal}>
                회원가입
              </Button>
            </Btndiv>
          </RightContainer>
        </HeadDiv>
      ) : (
        <HeadDiv>
          <Link to="/">
            <Logoimage />
          </Link>
          <RightContainer>
            <MyprofileContainer>
              <MyProFileImg />
              <UserNickName>{user_id}</UserNickName>
            </MyprofileContainer>
            <Btndiv>
              <Button className="headerBtn" onClick={props.openModalHandler}>
                로그아웃
              </Button>
              {clickMyPage === false ? (
                <Link className="link" to="/mypage">
                  <Button className="headerBtn" onClick={setClickMypage}>
                    마이페이지
                  </Button>
                </Link>
              ) : (
                <Link className="link" to="/mypage">
                  <Button className="headerBtn">회원탈퇴</Button>
                </Link>
              )}
            </Btndiv>
          </RightContainer>
        </HeadDiv>
      )}
    </>
  );
};

export default Header;
