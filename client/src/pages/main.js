import styled from "styled-components";
import image1 from "../images/mainimage1.jpg";
import image2 from "../images/mainimage2.jpg";
import image3 from "../images/mainimage3.jpg";
import image4 from "../images/mainimage4.jpg";
import Button from "../components/button";
import Header from "../components/header";
import Footer from "../components/footer";
import LoginModalComponent from "../modals/loginmodal";
import { useState } from "react";
import SignupModalComponent from "../modals/signupmodal";

const ItemasContainer = styled.div`
  /* border: 1px solid blue; */
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ImgContainer = styled.img`
  /* border: 1px solid green; */
  width: 40vw;
  height: 31.5vw;
`;

const ItemasContainer1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled.div`
  /* border: 1px solid purple; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .h1 {
    font-size: 5vw;
    font-weight: bold;
  }
  > .h2 {
    font-size: 4vw;
    font-weight: bold;
  }

  .btn1 {
    padding: 0;
    font-size: 2.5vw;
    width: 17vw;
  }
`;

const Main = () => {
  const [loginModal, setLoginModal] = useState(false);
  const openLoginModal = () => {
    setLoginModal((loginModal) => (loginModal = true));
    console.log("로그인 모달 열림");
  };
  const closeLoginModal = () => {
    setLoginModal((loginModal) => (loginModal = false));
    console.log("로그인 모달 닫힘");
  };

  const [signupModal, setSignupModal] = useState(false);
  const openSignupModal = () => {
    setSignupModal((signupModal) => (signupModal = true));
    console.log("회원가입 모달 열림");
  };
  const closeSignupModal = () => {
    setSignupModal((signupModal) => (signupModal = false));
    console.log("회원가입 모달 닫힘");
  };

  return (
    <>
      <Header
        openLoginModal={openLoginModal}
        openSignupModal={openSignupModal}
      />
      <ItemasContainer>
        <ItemasContainer1>
          <TextContainer>
            <p className="h1">문제를 못풀겠나요?</p>
            <p className="h2">지금 당장 질문하세요!</p>
            <Button className="btn1">질문하러 가기</Button>
          </TextContainer>
          <ImgContainer src={image1} alt="" />
        </ItemasContainer1>

        <ItemasContainer1>
          <TextContainer>
            <p className="h1">문제를 푸실려구요?</p>
            <p className="h2">지금 당장 가시죠!</p>
            <Button className="btn1">풀이하러 가기</Button>
          </TextContainer>
          <ImgContainer src={image2} alt="" />
        </ItemasContainer1>

        {/* 더미 데이터 들어가야하는곳  */}

        <ItemasContainer1>
          <ImgContainer src={image3} alt="" />
          <TextContainer>
            <p className="h1">01</p>
            <p className="h2">학생들은 모르는</p>
            <p className="h2">문제를 질문할 수 있어요!</p>
          </TextContainer>
        </ItemasContainer1>

        <ItemasContainer1>
          <ImgContainer src={image4} alt="" />
          <TextContainer>
            <p className="h1">02</p>
            <p className="h2">공부의 신은</p>
            <p className="h2">문제를 풀어줄 수 있어요!</p>
          </TextContainer>
        </ItemasContainer1>
        {loginModal === true ? (
          <LoginModalComponent
            closeLoginModal={closeLoginModal}
            openSignupModal={openSignupModal}
          />
        ) : null}
        {signupModal === true ? (
          <SignupModalComponent closeSignupModal={closeSignupModal} />
        ) : null}
        <Footer />
      </ItemasContainer>
    </>
  );
};

export default Main;