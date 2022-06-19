import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";

const Container = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ced4da;
  border-top: 2px solid #ced4da;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1001px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #ced4da;
    border-top: 2px solid #ced4da;
  }
`;

const ProfilePhoto = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  padding-right: 1rem;
  /* border-radius: 100%;   */

  @media screen and (min-width: 400px) and (max-width: 1000px) {
    width: 45px;
    height: 45px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  //길이 400이상 1000이하일때
  @media screen and (min-width: 1001px) {
    width: 80px;
    height: 80px;
  }
  //길이 1001이상일때
`;

const AnswerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Name = styled.div`
  justify-content: center;
  font-size: 0.5rem;
  font-weight: bold;

  @media screen and (min-width: 400px) and (max-width: 1000px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1001px) {
    font-size: 2rem;
  }
`;
const Title = styled.div`
  font-size: 0.5rem;

  @media screen and (min-width: 400px) and (max-width: 1000px) {
    font-size: 0.5rem;
  }

  @media screen and (min-width: 1001px) {
    font-size: 1rem;
  }
`;
// const DefaultProfileImg = require('../images/githublogo.png');

function getRandomArr(arr) {
  const result = [];

  while (result.length < 9) {
    const randomNum = Math.floor(Math.random() * arr.length + 1) - 1;
    if (!result.includes(randomNum)) {
      result.push(randomNum);
    }
  }

  return result;
} //랜덤 배열을 리턴하는 함수

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: false,
  };

  useEffect(() => {
    function getQuestInfo() {
      axios.get("http://52.78.130.4:3500/question/all", {}).then((res) => {
        const data = res.data;
        const randomIndex = getRandomArr(data); // [5, 1, 2, 4, 6, 0]
        const newQuestions = randomIndex.map((i) => data[i]);
        setquestions(newQuestions);
      });
    }

    getQuestInfo();
  }, []);

  const { islogin, openLoginModal } = useStore();
  const [questions, setquestions] = useState([]); // useEffect 안에서 전체 데이터를 받은후 .then을 빠져나와 6개로 추린 배열을 받는다.
  const { clickTitle, setClickTitle, setClickCreatedAt, ClickCreatedAt } =
    useStoreTemp();

  const viewQuestion = (e) => {
    setClickTitle(e);
  };

  const click = (e) => {
    setClickTitle(e.title);
    setClickCreatedAt(e.createdAt);
  };

  return (
    <Container>
      <Link to="/noticeboard">
        <h5>답변을 기다리고 있어요!</h5>
      </Link>

      <StyledSlider {...settings}>
        {questions.length &&
          questions.map((item) => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <ProfilePhoto
                    src={`img/${item.createdAt.slice(0, 19)}_.jpg`}
                    onError={(i) => (i.target.src = "img/githubprofile.png")}
                    alt="1"
                  />
                  <AnswerInfo>
                    <Name>{item.nickname.slice(0, 9)}</Name>
                    {islogin === false ? (
                      <Title className="openlogin" onClick={openLoginModal}>
                        {item.title.slice(0, 9)}
                      </Title>
                    ) : (
                      <Link to="/viewquestion">
                        <Title
                          onClick={() => {
                            click(item);
                          }}
                        >
                          {item.title.slice(0, 9)}
                        </Title>
                      </Link>
                    )}
                  </AnswerInfo>
                </ImageContainer>
              </div>
            );
          })}
      </StyledSlider>
    </Container>
  );
}
export default SimpleSlider;
