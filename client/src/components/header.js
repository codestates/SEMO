import { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import Button from "../components/button.js";
import profileimg from "../images/제경모.jpg"
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
  padding 0 0 0 0px;
`;
const UserNickName = styled.span`
      font-size : 3vw;
      
`
const RightContainer =styled.div`
`
const MyprofileContainer =styled.div`
      display: flex;
      flex-direction: row;
      gap : 5vw;
      align-items: center;
     
`
const Btndiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 2vw;
  margin-top: 2vw;
  .headerBtn {
    font-size: 3vw;
    width: 17vw;
  }
`;

const Header = (props) => {
  const [isLogined,logined] =useState(false);

  const loginFunction =() => { 
    logined(true);
    console.log("login상태가 되면 ")
  }

  return (
    <>
    {isLogined !==false ? (
      <HeadDiv>
      <Logoimage />
      <RightContainer>
        <MyprofileContainer>
          <MyProFileImg />
          <UserNickName>
            서양범고래
          </UserNickName>
        </MyprofileContainer>
      <Btndiv>
        <Button className="headerBtn" onClick={props.openModalHandler}>
          로그인
        </Button>
        <Button className="headerBtn">회원가입</Button>
      </Btndiv>
      </RightContainer>
    </HeadDiv>

    ): <HeadDiv>
    <Logoimage />
    <RightContainer>
      <MyprofileContainer>
        <MyProFileImg />
        <UserNickName>
        .nickname자리
        </UserNickName>
      </MyprofileContainer>
    <Btndiv>
      <Button className="headerBtn" onClick={props.openModalHandler}>
        로그아웃
      </Button>
      <Button className="headerBtn">회원탈퇴</Button>
    </Btndiv>
    </RightContainer>
  </HeadDiv>}
      
    </>
  );
};

export default Header;