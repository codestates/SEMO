import styled from "styled-components";
import Button from "./button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ReplyContainer = styled.div``;

const ReplyText = styled.textarea`
  width: 80vw;
  height: 50vw;
  margin: 5vw;
  background: #cccccc;
  vertical-align: middle;
  border-radius: 2vw;
  padding: 3vw;
  font-size: 4vw;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10vw;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const AnswerText = styled.div`
  display: flex;
  width: 80vw;
  height: 2vw;
  background: #cccccc;
  border-radius: 2vw;
  padding: 3vw;
  height: 300px;
  word-break: break-word;
  margin: 5vw;
`;

const ViewMyAnswer = () => {
  const [question, setQustion] = useState([]);
  const { clickTitle, setClickTitle } = useStoreTemp();
  const { user_id, nickname } = useUserinfo();
  const getQuestion = async () => {
    try {
      console.log("axios");
      const response = await axios.post("http://localhost:3500/question", {
        title: clickTitle,
        user_id: user_id,
        nickname,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const thisQuestion = getQuestion();
  useEffect(() => {
    thisQuestion.then((data) => {
      setQustion(data);
    });
  }, []);
  //++++++++++++++++++++++++++++위에 question 에 달린 내 대답 보기

  //   const getAnswer =async () =>{
  //       try {
  //         console.log("getAnsweraxios");
  //         const response = await.post("http://localhost:3500/myanswer/all")
  //       }catch(err){
  //         console.log(err)
  //       }
  //   }
  const testBtn = () => {
    console.log("123", question.content, "title값", clickTitle);
  };

  return (
    <>
      <button onClick={testBtn}>TEST</button>
      <TextContainer>
        <div>제목 {question.title} </div>
        <AnswerText>{question.content}</AnswerText>
      </TextContainer>
      <div>위에는 원래 질문글</div>
      <TextContainer>
        <AnswerText>{}</AnswerText>
      </TextContainer>
      <ButtonContainer>
        <Button>수정</Button>
        <Button>삭제</Button>
      </ButtonContainer>
      <div>##########################################</div>
      <AnswerContainer>
        <ReplyContainer>
          <ReplyText type="text" placeholder="답변을 입력하세요"></ReplyText>
          <ButtonContainer>
            <Button>풀이등록</Button>
            <Button>취소</Button>
          </ButtonContainer>
        </ReplyContainer>
      </AnswerContainer>
    </>
  );
};

export default ViewMyAnswer;
