import styled from "styled-components";
import Button from "./button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
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
  display: flex;
  justify-content: center;
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
  .headerBtn {
    font-size: 3vw;
    width: 17vw;
  }
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

  const submitAnswer = () => {
    axios
      .post("http://localhost:3500/answer", {
        content,
        title: clickTitle,
        user_id: user_id,
      })
      .then((res) => {
        if (res.data) {
          console.log("성공");
        } else {
          console.log("실패");
        }
      });
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
    console.log(
      "수정버튼 눌림 콘텐트",
      editContentStatus,
      "title",
      clickTitle,
      "user_id",
      user_id
    );
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
  //1 . 테이블에 fileImg 추가

  const handleImgErr = () => {
    console.log("날짜", "슈발");
  };
  return (
    <>
      <AnswerContainer>
        <AnswerTitle>{clickTitle}</AnswerTitle>
      </AnswerContainer>

      {clickEditBtn !== false ? (
        <>
          (
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
          )
        </>
      ) : (
        <>
          <TextContainer>
            <AnswerText>
              {question.createdAt !== undefined ? (
                <div>
                  {" "}
                  <div>
                    <ImgContainer
                      src={`img/${question.createdAt.slice(0, 19)}_.jpg`}
                      onError={(i) => (i.target.style.display = "none")}
                    />
                  </div>
                  {question.content}
                </div>
              ) : (
                <div>{question.content}</div>
              )}
            </AnswerText>
          </TextContainer>
          <ButtonContainer>
            <Button className="headerBtn" onClick={addAnswer}>
              없앨 예정인 버튼
            </Button>
            <Button className="headerBtn" onClick={editBtn}>
              수정
            </Button>
            <Button className="headerBtn" onClick={deleteFunction}>
              삭제
            </Button>
          </ButtonContainer>
        </>
      )}

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
                <Button className="headerBtn" onClick={submitAnswer}>
                  풀이등록
                </Button>
                <Button className="headerBtn" onClick={addAnswer}>
                  취소
                </Button>
              </ButtonContainer>
            </ReplyContainer>
          </AnswerContainer>
        </>
      ) : null}
    </>
  );
};

export default Answer;
