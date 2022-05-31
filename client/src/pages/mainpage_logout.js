import styled from "styled-components";
import image1 from "../images/mainimage1.jpg";
import image2 from "../images/mainimage2.jpg";
import image3 from "../images/mainimage3.jpg";
import image4 from "../images/mainimage4.jpg";
import Button from "../components/button";
import Header from "../components/header";

const Image_layout = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Image_layout2 = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Image1_text_layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const Button_layout = styled.div`
  padding-top: 20px;
`;

const Conainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
`;

const Mainpage_logout = () => {
  return (
    <Conainer>
      <Header />
      <Image_layout>
        <Image1_text_layout>
          <h1>문제를 못풀겠나요??</h1>
          <h2>지금당장 질문하세요!</h2>
          <h3>질문 하러가기~</h3>
          <Button_layout>
            <Button>질문하러 가기!</Button>
          </Button_layout>
        </Image1_text_layout>
        <img src={image1} alt="" />
      </Image_layout>

      <Image_layout>
        <Image1_text_layout>
          <h1>문제를 푸실려구요?</h1>
          <h2>지금 당장 가시죠!</h2>
          <h3>문제 풀러 가자~</h3>
          <Button_layout>
            <Button>풀이하러 가기!</Button>
          </Button_layout>
        </Image1_text_layout>
        <img src={image2} alt="" />
      </Image_layout>

      {/* 여기에 더미 데이터가 들어가야함 */}

      <Image_layout2>
        <img src={image3} alt="" />
        <Image1_text_layout>
          <h1>01</h1>
          <h2>학생들은</h2>
          <h2>문제를 질문할수있어요!</h2>
        </Image1_text_layout>
      </Image_layout2>

      <Image_layout2>
        <img src={image4} alt="" />
        <Image1_text_layout>
          <h1>02</h1>
          <h2>공부의 신은</h2>
          <h2>학생들의 문제를 풀어줄수 있어요!</h2>
        </Image1_text_layout>
      </Image_layout2>
    </Conainer>
  );
};

export default Mainpage_logout;
