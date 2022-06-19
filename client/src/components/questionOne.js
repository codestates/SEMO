import styled from "styled-components";
import Button from "./button";
import { useStoreTemp, useUserinfo } from "../zustand/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QContainer = styled.div`
  /* border: 1px solid red; */
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QHeader = styled.strong`
  /* border: 1px solid blue; */
  font-size: 1px;
  padding: 2px 11px;
  width: 263px;
  opacity: 0.3;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    padding: 1vw 3vw;
    width: 70vw;
  }

  @media screen and (min-width: 1001px) {
    padding: 10px 30px;
    width: 700px;
  }
`;

const HeadWrapper = styled.div`
  /* border: 1px solid green; */
  width: 263px;
  padding: 11px;
  font-size: 19px;
  border-top: 2px solid #7a57d1;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 70vw;
    padding: 3vw;
    font-size: 5vw;
    border-top: 2px solid #7a57d1;
  }

  @media screen and (min-width: 1001px) {
    width: 700px;
    padding: 30px;
    font-size: 50px;
    border-top: 2px solid #7a57d1;
  }
`;

const Writer = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  font-size: 11px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    font-size: 3vw;
  }

  @media screen and (min-width: 1001px) {
    font-size: 30px;
  }
`;

const QueWriter = styled.div`
  /* border: 1px solid purple; */
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  width: 263px;
  padding: 11px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    font-size: 3vw;
    width: 70vw;
    padding: 3vw;
  }

  @media screen and (min-width: 1001px) {
    font-size: 30px;
    width: 700px;
    padding: 30px;
  }
`;

const ImgContentBox = styled.div`
  width: 263px;
  height: 188px;
  padding: 11px;
  font-size: 15px;
  background: #cccccc;
  vertical-align: middle;
  border-top: 2px solid #7a57d1;
  border-bottom: 1px solid gray;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 70vw;
    height: 50vw;
    padding: 3vw;
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    width: 700px;
    height: 500px;
    padding: 30px;
    font-size: 15px;
  }
`;

const ContentBox = styled.div`
  width: 263px;
  height: 188px;
  border-radius: 0px 0px 15px 15px;
  padding: 11px;
  font-size: 15px;
  vertical-align: middle;
  background: #cccccc;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 70vw;
    height: 50vw;
    border-radius: 0px 0px 4vw 4vw;
    padding: 3vw;
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    width: 700px;
    height: 500px;
    border-radius: 0px 0px 40px 40px;
    padding: 30px;
    font-size: 40px;
  }
`;

const Profileimg = styled.img`
  display: block;
  margin: 0 auto;
  width: 170px;
  height: 170px;
  padding: 10px 35px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 45vw;
    height: 45vw;
    padding: 3vw 10vw;
  }

  @media screen and (min-width: 1001px) {
    width: 450px;
    height: 450px;
    padding: 30px 100px;
  }
`;

const AnswerContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 20px 0;
  gap: 10px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    padding: 5vw 0;
    gap: 3vw;
  }

  @media screen and (min-width: 1001px) {
    padding: 50px 0;
    gap: 30px;
  }
`;

const AnswerInputText = styled.textarea`
  /* border: 1px solid red; */
  padding: 0 0 30px 0;
  width: 188px;
  resize: none;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 50vw;
  }

  @media screen and (min-width: 1001px) {
    width: 500px;
  }
`;

const ButtonContainer = styled.div``;

const ImageTest = styled.div`
  /* border: 1px solid red; */
  display: flex;
  vertical-align: middle;
`;

const ImgInput = styled.input`
  display: block;
  margin: 0 auto;
`;

const RepContainer = styled.div``;

const ContentContainer = styled.div`
  width: 263px;
  border-radius: 5px;
  padding: 11px;
  font-size: 15px;
  background: #cccccc;
  vertical-align: middle;
  word-break: break-word;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 70vw;
    border-radius: 1vw;
    padding: 3vw;
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    width: 700px;
    border-radius: 10px;
    padding: 30px;
    font-size: 40px;
  }
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
      <div>
        <QContainer>
          <QHeader>No. {question.id}</QHeader>
          <HeadWrapper>{question.title}</HeadWrapper>
          <QueWriter>{question.nickname}</QueWriter>
          <ImgContentBox>
            <Profileimg
              src={`img/${clickCreatedAt.slice(0, 19)}_.jpg`}
              onError={(i) => (i.target.src = "img/githublogo.png")}
              alt="1"
            />
          </ImgContentBox>
          <ContentBox>{question.content}</ContentBox>
        </QContainer>
      </div>

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
                  {item.createdAt !== undefined ? (
                    <div>
                      {" "}
                      <Profileimg
                        src={`img/${item.createdAt.slice(0, 19)}_.jpg`}
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
