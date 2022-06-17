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
const QHeader = styled.h3`
  display: flex;
  justify-content: center;
`;
const Writer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 3vw;
  justify-content: space-between;
`;
const QueWriter = styled.div`
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
  width: 30vw;
  height: 30vw;
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
const ImageTest = styled.div`
  display: flex;

  vertical-align: middle;
`;
const ImgInput = styled.input`
  display: block;
  margin: 0 auto;
`;
const RepContainer = styled.div``;
const ContentContainer = styled.div`
  width: 70vw;

  margin: 0 auto;
  background: #cccccc;
  vertical-align: middle;
  border-radius: 5px;
  padding: 3vw;
  font-size: 4vw;
  word-break: break-word;
`;
const QuestionOne = () => {
  const { clickTitle, setClickCreatedAt, clickCreatedAt } = useStoreTemp();
  const { user_id, nickname } = useUserinfo();

  const [question, setQustion] = useState([]);
  const [reply, setReply] = useState("");

  const [answer, setAnswer] = useState([]);
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
  //00000000000 answer 목록 받아오기
  const getAnswer = async () => {
    try {
      const res = await axios.post("http://localhost:3500/answer/everyone", {
        title: clickTitle,
      });

      return res.data;
    } catch (err) {}
  };
  const thisGetAnswer = getAnswer();
  useEffect(() => {
    thisGetAnswer.then((data) => {
      setAnswer(data);
    });
  }, []);
  //---------답변 등록하기 코드
  const replyHandler = (e) => {
    setReply(e.target.value);
    console.log(reply);
  };

  const submitAnswer = async () => {
    let formData = new FormData();
    formData.append("file", fileImg);

    const axios1 = await axios.post("http://localhost:3500/answer", {
      content: reply,
      title: clickTitle,
      user_id: user_id,
      nickname,
    });

    const axios2 = await axios.post("http://localhost:3500/uploads", formData);
    if (axios2.data.success) {
      alert("okay");
    } else {
      alert("no");
    }
  };

  const [fileImg, setfileImg] = useState("");
  const saveFileImg = (e) => {
    const file = e.target.files[0];

    setfileImg(file);
  };

  const deleteFileImg = () => {
    URL.revokeObjectURL(fileImg);
    setfileImg("");
  };
  return (
    <>
      <Container>
        <QHeader>질문 {question.id}</QHeader>

        <QContainer>
          <HeadWrapper>
            <Title>{question.title}</Title>

            <QueWriter>작성자 : {question.nickname}</QueWriter>
          </HeadWrapper>

          <ImgContentBox>
            <Profileimg
              src={`img/${clickCreatedAt.slice(0, 19)}_.jpg`}
              onError={(i) => (i.target.src = "img/githublogo.png")}
              alt="1"
            />
          </ImgContentBox>
          <ContentBox>{question.content}</ContentBox>
        </QContainer>
      </Container>

      <RepContainer>
        {answer.map((item) => {
          return (
            <div>
              <QContainer key={item.id} item={item}>
                <HeadWrapper>
                  <Writer>
                    <strong>작성자 : {item.nickname}</strong>
                    <p>작성일자 : {item.createdAt.slice(0, 10)}</p>
                  </Writer>
                </HeadWrapper>
                <ContentContainer>
                  {question.createdAt !== undefined ? (
                    <div>
                      {" "}
                      <Profileimg
                        src={`img/${question.createdAt.slice(0, 19)}_.jpg`}
                        onError={(i) => (i.target.src = "img/githublogo.png")}
                        alt="1"
                      />
                    </div>
                  ) : null}
                  {item.content}
                </ContentContainer>
              </QContainer>
            </div>
          );
        })}
      </RepContainer>
      <ImageTest>
        <ImgInput
          name="imgUp"
          type="file"
          accept="image/*"
          onChange={saveFileImg}
        />
      </ImageTest>
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
