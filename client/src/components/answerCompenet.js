import styled from "styled-components";
import Button from "./button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
import { Link } from "react-router-dom";
const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const AnswerTitle = styled.div`
  display: flex;
  width: 80vw;
  background: #cccccc;
  border-radius: 2vw;
  padding: 3vw;
`;

const TextContainer = styled.div`
  padding: 200px;
  width: 70vw;

  margin: 0 auto;

  vertical-align: middle;
  border-radius: 3vw 3w 0px 0px;
  border-top: 2px solid #7a57d1;
  border-bottom: 2px solid #7a57d1;
  padding: 3vw;
  font-size: 4vw;
`;
const AnswerText = styled.div`
  display: flex;
  width: 80vw;
  background: #cccccc;
  border-radius: 2vw;
  padding: 3vw;
  word-break: break-word;
  margin: 5vw;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10vw;
  margin-top: 5px;
  .headerBtn {
    font-size: 3vw;
    width: 17vw;
  }
`;
const ReplyContainer = styled.div``;
const ReplyText = styled.textarea`
  width: 70vw;
  height: 40vw;
`;
const imgtest = {
  width: "30vw",
  height: "30vw",
};

const ImgContainer = styled.img`
  width:50vw;
  align=bottom;
  
`;
const Img2 = styled.div`
  background: red;
`;
//@@@@2
const HeadWrapper = styled.div`
  width: 70vw;

  margin: 0 auto;

  padding: 3vw;
  font-size: 5vw;
  border-top: 2px solid #7a57d1;
`;
const Title = styled.div``;
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
const Profileimg = styled.img`
  display: block;
  padding: 0px;
  width: 30vw;
  height: 30vw;
  margin: 0 auto;
  padding: 0 0 5px 0;
`;
const Answer = () => {
  const [question, setQustion] = useState([]);
  const [solve, setSolved] = useState(false);
  const { clickTitle, editContentStatus, setEditContentStatus } =
    useStoreTemp();
  const { user_id, nickname } = useUserinfo();
  const [clickEditBtn, isClickEditBtn] = useState(false);
  const [editContent, setEditContent] = useState("");
  const addAnswer = () => {
    setSolved(!solve);
  };
  const [content, setReply] = useState("");
  const replyHandler = (e) => {
    setReply(e.target.value);
  };

  const getQuestion = async () => {
    try {
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
  // response.data.user_id !==user_id
  const editBtn = () => {
    isClickEditBtn(!clickEditBtn);
    setEditContent(question.content);
    console.log("click edit Btn", clickEditBtn);
  };
  // 수정하기 기능 구현하기용 함수
  const getEditContent = async () => {
    try {
      const response = await axios.post("http://localhost:3500/question", {
        title: clickTitle,
        user_id: user_id,
        nickname,
      });

      return response.data;
    } catch (error) {}
  };
  const getEditData = getEditContent();
  useEffect(() => {
    getEditData.then((data) => {
      setEditContentStatus(data.content);
    });
  }, []);
  const testreplyHandler = (e) => {
    setEditContentStatus(e.target.value);
  };
  const editQuestionr2 = () => {
    axios
      .patch("http://localhost:3500/question/edit", {
        content: editContentStatus,
        title: clickTitle,
        user_id: user_id,
      })
      .then((res) => {
        if (res.data) {
          alert("수정 되었습니다");
        } else {
          alert("실패");
        }
      });
  };
  const submitEditQuestion = () => {
    isClickEditBtn(!clickEditBtn);
    editQuestionr2();
  };
  // 삭제하기 기능 구현
  const deleteFunction = () => {
    console.log(clickTitle, "22", user_id);
    axios
      .post("http://localhost:3500/question/delete", {
        title: clickTitle,
        user_id,
      })
      .then((res) => {
        if (res.data) {
          alert("삭제 되었습니다");
        } else {
          alert("실패");
        }
      });
  };

  return (
    <>
      {/* <AnswerContainer>
        <AnswerTitle>{clickTitle}</AnswerTitle>
      </AnswerContainer> */}
      <HeadWrapper>
        <Title>{clickTitle}</Title>
      </HeadWrapper>
      <ImgContentBox>
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
      </ImgContentBox>

      {clickEditBtn !== false ? (
        <>
          <>
            <TextContainer>
              <ReplyText
                type="text"
                value={editContentStatus}
                onChange={testreplyHandler}
              ></ReplyText>
            </TextContainer>
            <ButtonContainer>
              <Button className="headerBtn" onClick={submitEditQuestion}>
                수정하기
              </Button>
              <Button className="headerBtn" onClick={editBtn}>
                취소
              </Button>
            </ButtonContainer>
          </>
        </>
      ) : (
        <>
          <TextContainer>
            {question.createdAt !== undefined ? (
              <div>
                {" "}
                <strong>
                  {" "}
                  작성일자 : {`${question.createdAt.slice(0, 10)}`}
                </strong>
                <div> {question.content}</div>
              </div>
            ) : (
              <>
                <div>{question.createdAt}</div>
                <div>{question.content}</div>
              </>
            )}
          </TextContainer>
          <ButtonContainer>
            <Button className="headerBtn" onClick={editBtn}>
              수정
            </Button>
            <Button className="headerBtn" onClick={deleteFunction}>
              삭제
            </Button>
            <Link to="/mypage">
              <Button className="headerBtn" onClick={addAnswer}>
                돌아가기
              </Button>
            </Link>
          </ButtonContainer>
        </>
      )}
    </>
  );
};

export default Answer;
