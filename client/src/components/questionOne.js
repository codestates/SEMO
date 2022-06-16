import styled from "styled-components";
import Button from "./button";
import { useStoreTemp, useUserinfo } from "../zustand/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Container = styled.div``;
const QContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeadWrapper = styled.div`
  width: 70vw;

  margin: 0 auto;

  padding: 3vw;
  font-size: 5vw;
  border-top: 2px solid #7a57d1;
`;
const Title = styled.div``;
const QHeader = styled.h3``;
const Writer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 3vw;
`;
const ImgContentBox = styled.div`
  padding: 200px;
  width: 70vw;
  height: 50vw;
  margin: 0 auto;
  background: #cccccc;
  vertical-align: middle;
  border-radius: 3vw 3w 0px 0px;
  border-top: 2px solid #7a57d1;
  padding: 3vw;
  font-size: 4vw;
`;

const ContentBox = styled.div`
  width: 70vw;
  height: 50vw;
  margin: 0 auto;
  background: #cccccc;
  vertical-align: middle;
  border-radius: 0px 0px 15px 15px;
  padding: 3vw;
  font-size: 4vw;
`;

const Profileimg = styled.img`
  display: block;

  padding: 0px;
  width: 50vw;
  height: 50vw;
  margin: 0 auto;
  padding: 0 0 5px 0;
`;
const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 3vw 0px 0px 0px;
`;
const AnswerInputText = styled.textarea`
  padding: 0px;
  width: 50vw;
  display: flex;
`;
const ButtonContainer = styled.div``;

const QuestionOne = () => {
  const { clickTitle, setClickCreatedAt, clickCreatedAt } = useStoreTemp();
  const { user_id, nickname } = useUserinfo();

  const [question, setQustion] = useState([]);
  const [reply, setReply] = useState("");
  const getQuestionData = async () => {
    try {
      const res = await axios.post("http://localhost:3500/question", {
        nickname,
        title: clickTitle,
      });
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  const qdata = getQuestionData();
  useEffect(() => {
    qdata.then((data) => {
      setQustion(data.data);
    });
  }, []);
  const replyHandler = (e) => {
    setReply(e.target.value);
    console.log(reply);
  };
  const submitAnswer = () => {
    axios
      .post("http://localhost:3500/answer", {
        content: reply,
        title: clickTitle,
        user_id: user_id,
      })
      .then((res) => {
        if (res.data) {
          alert("답변이 등록 되었습니다.");
        } else {
          console.log("실패");
        }
      });
  };
  return (
    <>
      <button
        onClick={() => {
          console.log(clickCreatedAt);
        }}
      >
        123
      </button>
      <Container>
        <QHeader>질문보기</QHeader>

        <QContainer>
          <HeadWrapper>
            <Title>{question.title}</Title>

            <Writer>작성자 : {question.nickname}</Writer>
          </HeadWrapper>

          <ImgContentBox>
            <Profileimg
              src={`img/${clickCreatedAt.slice(0, 19)}_.jpg`}
              onError={(i) => (i.target.src = "img/githublogo.png")}
              alt="1"
            />
          </ImgContentBox>
          <ContentBox>콘텐츠:{question.content}</ContentBox>
        </QContainer>
      </Container>
      <AnswerContainer>
        <AnswerInputText
          type="text"
          placeholder="답변을 입력하세요"
          value={reply}
          onChange={replyHandler}
        >
          {" "}
        </AnswerInputText>
        <ButtonContainer>
          <Button onClick={submitAnswer}>답변하기</Button>
          <Link to="/noticeboard">
            <Button>돌아가기</Button>
          </Link>
        </ButtonContainer>
      </AnswerContainer>
    </>
  );
};
export default QuestionOne;
