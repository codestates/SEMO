import styled from "styled-components";
import Button from "./button";
import { useState } from "react";
import axios from "axios";

const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const AnswerTitle = styled.div`
  display: flex;
  width: 80vw;
  height: 2vw;
  background: #cccccc;
  border-radius: 2vw;
  padding: 3vw;
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
  margin: 5vw;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10vw;
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
const Answer = () => {
  const [solve, setSolved] = useState(false);
  const addAnswer = () => {
    setSolved(!solve);
    console.log("reply 값 ", solve);
  };
  const [content, setReply] = useState("");
  const replyHandler = (e) => {
    setReply(e.target.value);
  };
  const submitAnswer = () => {
    console.log(content);
    axios.post("localhost3500/answer", {
      //title, ==> 틀만 잡아놓은거라 get 요청으로 받아오는거의 title 을 그대로 쓰면 됨
      content,
    });
  };
  return (
    <>
      <AnswerContainer>
        <AnswerTitle>sfdfsdfsdfsdfds</AnswerTitle>
      </AnswerContainer>
      <TextContainer>
        <AnswerText>예상외의 복병 높이 얼마나?</AnswerText>
      </TextContainer>
      <ButtonContainer>
        <Button onClick={addAnswer}>문제풀기</Button>
        <Button>수정</Button>
        <Button>삭제</Button>
      </ButtonContainer>
      {solve !== false ? (
        <>
          <AnswerContainer>
            <ReplyContainer>
              <ReplyText
                type="text"
                placeholder="답변을 입력하세요"
                value={content}
                onChange={replyHandler}
              ></ReplyText>
              <ButtonContainer>
                <Button onClick={submitAnswer}>풀이등록</Button>
                <Button onClick={addAnswer}>취소</Button>
              </ButtonContainer>
            </ReplyContainer>
          </AnswerContainer>
        </>
      ) : null}
    </>
  );
};

export default Answer;
