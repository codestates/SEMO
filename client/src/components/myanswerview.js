import styled from "styled-components";
import Button from "./button";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
import { Link } from "react-router-dom";
const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ReplyContainer = styled.div``;
const AnswerTitle = styled.div`
  display: flex;
  width: 80vw;
  background: #cccccc;
  border-radius: 2vw;
  padding: 3vw;
`;

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
  .headerBtn {
    font-size: 3vw;
    width: 17vw;
  }
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
//@@@@@@@@@@@추가
const Container = styled.div``;
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
const QContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Writer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 3vw;
  justify-content: space-between;
`;
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
const ImageTest = styled.div`
  width: 80vw;
  display: block;
  border-top: 3px solid #7a57d1;
  margin: 0 auto;
`;
const ImgInput = styled.input`
  display: block;
  margin: 0 auto;
`;
const AnswerInputText = styled.textarea`
  padding: 0px;
  width: 75vw;
  display: flex;
`;
const AddAnswerContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 75vw;
  height: 30vw;
`;
const RepContainer = styled.div``;
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

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
    clickCreatedAt,
  } = useStoreTemp();
  const { user_id, nickname } = useUserinfo();
  const [clickEditBtn, isClickEditBtn] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [a, b] = useState([]);
  //@@ 테스트
  const [reply, setReply] = useState("");
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
    alert("수정되었습니다.");
    isClickEditBtn(!clickEditBtn);
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

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
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
        <button onClick={executeScroll}> Click to scroll </button>
        <QHeader>질문 {question.id}</QHeader>
        {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <QContainer>
          <HeadWrapper>
            <Title>{question.title}</Title>

            <QueWriter>작성자 : {question.nickname}</QueWriter>
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
          <ContentBox>{question.content}</ContentBox>
        </QContainer>
      </Container>
      <RepContainer>
        {answer.map((item) => {
          return (
            <QContainer>
              <div key={item.id} item={item}>
                <HeadWrapper>
                  <Writer> 작성일 : {item.createdAt.slice(0, 10)}</Writer>
                </HeadWrapper>

                <ContentContainer>
                  <Profileimg
                    src={`img/${item.createdAt.slice(0, 19)}_.jpg`}
                    onError={(event) => (event.target.style.display = "none")}
                    alt="1"
                  />
                  {item.content}
                </ContentContainer>
                <ButtonContainer>
                  <Button
                    className="headerBtn"
                    onClick={() => {
                      editBtnHandler(item.id, item.content);
                      executeScroll();
                    }}
                  >
                    수정
                  </Button>

                  {/* 화살표 함수로, item.title? item.content값 넘겨주기 .edit 기능 테스트하기  */}
                  {deleteModal !== true ? (
                    <Button
                      className="headerBtn"
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
            </QContainer>
          );
        })}
      </RepContainer>

      {clickEditBtn !== false ? (
        <AnswerContainer>
          <ReplyContainer>
            <ReplyText
              type="text"
              value={clickCotent}
              onChange={inputHandler}
            ></ReplyText>
            <ButtonContainer>
              <Button className="headerBtn" onClick={submitEditAnswer}>
                수정하기
              </Button>
              <Button
                ref={myRef}
                onClick={() => {
                  isClickEditBtn(!clickEditBtn);
                }}
              >
                취소
              </Button>
            </ButtonContainer>
          </ReplyContainer>
        </AnswerContainer>
      ) : null}

      <ImageTest ref={myRef}>
        <ImgInput
          name="imgUp"
          type="file"
          accept="image/*"
          onChange={saveFileImg}
        />
      </ImageTest>
      <AddAnswerContainer>
        <AnswerInputText
          type="text"
          placeholder="답변을 입력하세요"
          value={reply}
          onChange={replyHandler}
        >
          {" "}
        </AnswerInputText>
        <ButtonContainer>
          <Button onClick={submitAnswer}>답변추가</Button>
          <Link to="/">
            <Button>나가기</Button>
          </Link>
        </ButtonContainer>
      </AddAnswerContainer>
      {/* <div ref={myRef}>1</div> */}
    </>
  );
};

export default ViewMyAnswer;
