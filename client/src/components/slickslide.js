import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import React from "react";

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
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 2px solid #ced4da;
  border-top: 2px solid #ced4da;
  justify-content: center;
  align-items: center;
  bottom: 0%;
  z-index: 1;
`;

const ProfilePhoto = styled.img`
  display: flex;
  width: 10rem;
  height: 10rem;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  z-index: 2;
`;

const AnswerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 3;
`;

const Name = styled.div`
  justify-content: center;
  font-size: 30px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const imgUrl = require("../images/김범주.jpg");

const items = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl },
  { id: 3, url: imgUrl },
  { id: 4, url: imgUrl },
  { id: 5, url: imgUrl },
  { id: 6, url: imgUrl },
];

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: true,
    centerMode: true,
  };
  return (
    <Container>
      <h2> 답변을 기다리고 있어요!</h2>
      <StyledSlider {...settings}>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <ImageContainer>
                <ProfilePhoto src={item.url} />
                <AnswerInfo>
                  <Name>김범주</Name>
                  <Title>서버 마스터</Title>
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
