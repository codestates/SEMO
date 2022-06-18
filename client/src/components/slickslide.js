import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";

const Container = styled.div`
  overflow:hidden;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;

const ImageContainer = styled.div`
  display: flex;
  width:100%;
  padding-top: 2vw;
  padding-bottom: 2vw;
  border-bottom: 2px solid #CED4DA;
  border-top: 2px solid #CED4DA;
  justify-content : center;
  align-items : center;

  @media screen and (min-width: 1001px) {
    padding-top: 2rem;
    padding-bottom: 2rem; 
    border-bottom: 2px solid #CED4DA;
    border-top: 2px solid #CED4DA;
    
  }
`;

const ProfilePhoto = styled.img`
  display: flex;
  width:50px;
  height:50px;
  align-items: center;
  justify-content : center;
  border-radius: 100%;  
  

  @media screen and (min-width: 400px) and (max-width: 1000px) {
    width:40px;
    height:40px;
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
  justify-content : center;  
`
const Name = styled.div`
  justify-content : center;
  font-size: 3vw;
  font-weight: bold;
  
  @media screen and (min-width: 1001px) {
    font-size: 2rem;
  } 
  
`
const Title = styled.div`
  font-size: 0.8vw;

  @media screen and (min-width: 1001px) {
    font-size: 1rem;
  }
`
const DefaultProfileImg = require('../images/githublogo.png');

function getRandomArr(arr) {
  const result = []

  while (result.length < 9) {
    const randomNum = Math.floor(Math.random() * arr.length + 1) - 1;
    if (!result.includes(randomNum)) {
      result.push(randomNum)
    }
  }

  return result;
}//랜덤 배열을 리턴하는 함수

function SimpleSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false
  };

  useEffect(() => {
    function getQuestInfo() {
      axios.get("http://localhost:3500/question/all", {
      })
        .then(res => {
          console.log(res.data)
          const data = res.data
          const randomIndex = getRandomArr(data); // [5, 1, 2, 4, 6, 0]
          const newQuestions = randomIndex.map(i => data[i])
          setquestions(newQuestions)
        })
    }

    getQuestInfo();

  }, []);



  const [questions, setquestions] = useState([]) // useEffect 안에서 전체 데이터를 받은후 .then을 빠져나와 6개로 추린 배열을 받는다.
  const { clickTitle, setClickTitle } = useStoreTemp();

  const viewQuestion = (e) => {
    setClickTitle(e);
  };

  const [profileimg, setprofileimg] = useState(false);

  return (
    <Container>

      <Link to="/noticeboard">
        <h5>답변을 기다리고 있어요!</h5>
      </Link>

      <StyledSlider {...settings}>
        {questions.length && questions.map(item => {
          return (
            <div key={item.id}>
              <ImageContainer>
                <ProfilePhoto src={`img/${item.createdAt.slice(0, 19)}_.jpg`}
                  onError={(i) => (i.target.src = "img/githubprofile.png")}
                  alt="1" />

                <AnswerInfo >
                  <Name>
                    {item.nickname}
                  </Name>
                  <Link to="/viewquestion">
                    <Title onClick={() => { viewQuestion(item.title); }}>
                      {item.title}
                    </Title>
                  </Link>
                </AnswerInfo>
              </ImageContainer>
            </div>
          );
        })}
      </StyledSlider>
    </Container >
  );
}
export default SimpleSlider