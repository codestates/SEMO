import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import axios from 'axios';
import React from 'react';

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

const items = [
  //유저닉네임과 질문제목을 db에서 받아옴
  {
    id: 1, url: imgUrl,
    Nickname: "fineartgo",
    Title: "국어가 좋아요"
  },
  {
    id: 2, url: imgUrl,
    Nickname: "fineartgo",
    Title: "영어가 좋아요"
  },
  {
    id: 3, url: imgUrl,
    Nickname: "fineartgo",
    Title: "수학이 좋아요"
  },
  {
    id: 4, url: imgUrl,
    Nickname: "fineartgo",
    Title: "사회가 좋아요"
  },
  {
    id: 5, url: imgUrl,
    Nickname: "fineartgo",
    Title: "과학이 좋아요"
  }
];


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

  const user_id = 'david0525'
  const password = 'b123456'

  const SendNickname = () => {
    axios.get("http://localhost:3500/user/info", {
      params: {
        user_id,
        password
      }
    })
      .then(res => {
        console.log((res.data.message.nickname));
        //닉네임만 받아올것
      })
  }

  const SendQuestTitle = () => {
    axios.get("http://localhost:3500/question/all/")
      .then(res => {
        console.log((res.data[0].title));
      })
  }

  return (
    <Container>
      <h5> 답변을 기다리고 있어요!</h5>
      <StyledSlider {...settings}>
        {items.map(item => {
          console.log(item)
          return (
            <div key={item.id}>
              <ImageContainer>
                <ProfilePhoto src={item.url} />
                <AnswerInfo >
                  <Name><div onClick={SendNickname}>{item.Nickname}</div></Name>
                  <Title><div onClick={SendQuestTitle}>{item.Title}</div></Title>
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