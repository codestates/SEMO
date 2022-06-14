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
  const [answer, setAnswer] = useState([]);
  const {
    clickTitle,
    setClickTitle,
    editContentStatus,
    setEditContentStatus,
    clickCotent,
    editAnswerId,
    setEditAnswerId,
    setClickContent,
    editAnswerContent,
    setEditAnswerContent,
  } = useStoreTemp();
  const { user_id, nickname } = useUserinfo();
  const [clickEditBtn, isClickEditBtn] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
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

  const getAnswer = async () => {
    try {
      console.log("getAnsweraxios");
      const res = await axios.post("http://localhost:3500/answer/one", {
        title: clickTitle,
        user_id,
      });
      console.log("res", res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const thisGetAnswer = getAnswer();
  useEffect(() => {
    thisGetAnswer.then((data) => {
      setAnswer(data);
    });
  }, []);

  const editBtnHandler = (e, b) => {
    isClickEditBtn(!clickEditBtn);
    setEditAnswerId(e);
    setClickContent(b);
    console.log(
      "###############!@#!@#!@#!@#!@#!@#!@#!@#",
      clickCotent,
      "!@#!@#!@#!@#",
      editAnswerId
    );
  };

  const inputHandler = (e) => {
    console.log("입력값 변화 ");

    setClickContent(e.target.value);
  };
  const submitEditAnswer = () => {
    console.log("수정하기 버튼 눌림 ");
    axios.patch("http://localhost:3500/answer/edit", {
      content: clickCotent,
      user_id,
      id: editAnswerId,
      title: clickTitle,
    });
  };
  const deleteHandler = () => {
    console.log("삭제버튼 클릭");
  };
  const submitDelete = () => {
    axios
      .post("http://localhost:3500/answer/delete", {
        title: clickTitle,
        user_id,
        id: editAnswerId,
      })
      .then((res) => {
        if (res.data) {
          alert("삭제 되었습니다");
        } else {
          alert("실패");
        }
      });
  };
  const testBtn1 = (e) => {
    setDeleteModal(!deleteModal);
    setEditAnswerId(e);
    console.log("!!!!!!@@@#######", editAnswerId);
  };
  return (
    <>
      <TextContainer>
        <div>제목 {question.title} </div>
        <AnswerText>{question.content}</AnswerText>
      </TextContainer>
      <div>위에는 원래 질문글</div>
      {/* {answer.map} */}

      {answer.map((item, idx) => {
        return (
          <div key={item.id} item={item}>
            <TextContainer>
              {/* <button onClick={testBtn}>TEST</button> */}
              <AnswerText>{item.content}</AnswerText>
              <div>@@@@@@@@@{item.id}@@@@@@@@</div>
            </TextContainer>
            <ButtonContainer>
              <Button
                onClick={() => {
                  editBtnHandler(item.id, item.content);
                }}
              >
                수정
              </Button>

              {/* 화살표 함수로, item.title? item.content값 넘겨주기 .edit 기능 테스트하기  */}
              {deleteModal !== true ? (
                <Button
                  onClick={() => {
                    testBtn1(item.id);
                  }}
                >
                  삭제하기
                </Button>
              ) : (
                <Button onClick={submitDelete}>삭제하시겠어요?</Button>
              )}
            </ButtonContainer>
          </div>
        );
      })}
      {clickEditBtn !== false ? (
        <AnswerContainer>
          <ReplyContainer>
            <ReplyText
              type="text"
              value={clickCotent}
              onChange={inputHandler}
            ></ReplyText>
            <ButtonContainer>
              <Button onClick={submitEditAnswer}>수정하기</Button>
              <Button>취소</Button>
            </ButtonContainer>
          </ReplyContainer>
        </AnswerContainer>
      ) : null}
      <div>##########################################</div>
    </>
  );
};

export default ViewMyAnswer;
