import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';


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
`;

const ProfilePhoto = styled.img`
  display: flex;
  width:10vw;
  height:10vw;
  align-items: center;
  justify-content : center;
  border-radius: 100%;  
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
`

const Title = styled.div`
  font-size: 0.8vw;
`

const imgUrl = require('../images/권민수.jpg');


function SimpleSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false
  };

  function getRandomIndex(arr) {
    const result = []
    if (!arr.length) {
      return [3, 5, 4, 1, 0, 2];
    }

    while (result.length < 6) {
      const randomNum = Math.floor(Math.random() * arr.length + 1) - 1;
      if (!result.includes(randomNum)) {
        result.push(randomNum)
      }
    }

    return result;
  }

  const [questions, setquestions] = useState([]) // useEffect 안에서 전체 데이터를 받은후 .then을 빠져나와 6개로 추린 배열을 받는다.

  useEffect(() => {
    function getQuestInfo() {
      axios.get("http://localhost:3500/question/all", {
      })
        .then(res => {

          const data = res.data
          const randomIndex = getRandomIndex(data); // [5, 1, 2, 4, 6, 0]
          const newQuestions = randomIndex.map(i => data[i])
          setquestions(newQuestions)
        })
    }

    getQuestInfo();

  }, []);

  return (
    <Container>
      <h5> 답변을 기다리고 있어요!</h5>
      <StyledSlider {...settings}>
        {questions.length && questions.map(item => {
          return (
            <div key={item.id}>
              <ImageContainer>
                <ProfilePhoto src={item.url} />
                <AnswerInfo >
                  <Name><div>{item.user_id} </div></Name>
                  <Title><div>{item.title}</div></Title>
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