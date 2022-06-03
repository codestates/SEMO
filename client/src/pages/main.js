import styled from "styled-components";
import image1 from "../images/mainimage1.jpg";
import image2 from "../images/mainimage2.jpg";
import image3 from "../images/mainimage3.jpg";
import image4 from "../images/mainimage4.jpg";
import Button from "../components/button";
import Header from "../components/header";
import Footer from "../components/footer";
import Loginmodal from "../modals/loginmodal";
import { useState } from "react";
import Signupmodal from "../modals/signupmodal";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid purple; */

  .btn1 {
    font-size: 3vw;
    width: 17vw;
    height: 17vh;
  }
`;

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen, signup);
  };

  const [signup, setSignup] = useState(false);
  const openSignup = () => {
    setSignup(!signup);
    console.log("!@#!@#@!#@#!@#!@@#@!#!@#!@#@#@!#@");
  };

  return (
    <>
      <Header openModalHandler={openModalHandler} />
      <ItemasContainer>
        <ItemasContainer1>
          <TextContainer>
            <h3>문제를 못풀겠나요?</h3>
            <h4>지금 당장 질문하세요!</h4>
            <h5>질문 하러가기!</h5>
            <Button className="btn1">질문하러 가기</Button>
          </TextContainer>
          <ImgContainer src={image1} alt="" />
        </ItemasContainer1>

        <ItemasContainer1>
          <TextContainer>
            <h3>문제를 푸실려구요?</h3>
            <h4>지금 당장 가시죠!</h4>
            <h5>문제 풀러 가자~</h5>
            <Button className="btn1">풀이하러 가기</Button>
          </TextContainer>
          <ImgContainer src={image2} alt="" />
        </ItemasContainer1>

        {/* 더미 데이터 들어가야하는곳  */}

        <ItemasContainer1>
          <ImgContainer src={image3} alt="" />
          <TextContainer>
            <h3>01</h3>
            <h4>학생들은 모르는</h4>
            <h5>문제를 질문할 수 있어요!</h5>
          </TextContainer>
        </ItemasContainer1>

        <ItemasContainer1>
          <ImgContainer src={image4} alt="" />
          <TextContainer>
            <h3>02</h3>
            <h4>공부의 신은</h4>
            <h5>문제를 풀어줄 수 있어요!</h5>
          </TextContainer>
        </ItemasContainer1>
        {signup === false ? (
          <Loginmodal
            isOpen={isOpen}
            openModalHandler={openModalHandler}
            signup={signup}
            openSignup={openSignup}
          />
        ) : (
          <Signupmodal
            isOpen={isOpen}
            openModalHandler={openModalHandler}
            signup={signup}
            openSignup={openSignup}
          />
        )}
        <Footer />
      </ItemasContainer>
    </>
  );
};

export default Main;
