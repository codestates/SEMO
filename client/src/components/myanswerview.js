import styled from "styled-components";
import Button from "./button";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useStoreTemp, useUserinfo } from "../zustand/store";
import { Link } from "react-router-dom";

const Container = styled.div`
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
  /* border: 1px solid blue; */
  background: #cccccc;
  width: 263px;
  height: 188px;
  border-radius: 0px 0px 15px 15px;
  padding: 11px;
  font-size: 15px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 70vw;
    height: 50vw;
    border-radius: 0 0 4vw 4vw;
    padding: 3vw;
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    width: 700px;
    height: 500px;
    border-radius: 0 0 40px 40px;
    padding: 30px;
    font-size: 40px;
  }
`;

const RepContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    gap: 1.3vw;
  }

  @media screen and (min-width: 1001px) {
    gap: 13px;
  }
`;

const ContentContainer = styled.div`
  /* border: 2px solid blue; */
  width: 263px;
  border-radius: 5px;
  padding: 11px;
  font-size: 15px;
  background: #cccccc;
  word-break: break-word;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 70vw;
    border-radius: 1.3vw;
    padding: 3vw;
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    width: 700px;
    border-radius: 13px;
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

const Writer = styled.div`
  /* border: 1px solid skyblue; */
  font-size: 11px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    font-size: 3vw;
  }

  @media screen and (min-width: 1001px) {
    font-size: 30px;
  }
`;

const ReplyText = styled.textarea`
  background: #cccccc;
  width: 300px;
  height: 188px;
  margin: 19px;
  border-radius: 8px;
  padding: 11px;
  font-size: 15px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 80v;
    height: 50vw;
    margin: 5vw;
    border-radius: 2vw;
    padding: 3vw;
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    width: 800px;
    height: 500px;
    margin: 50px;
    border-radius: 20px;
    padding: 30px;
    font-size: 40px;
  }
`;
const ButtonContainer = styled.div`
  /* border: 1px black solid; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 38px;
  padding: 5px 0;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    gap: 10vw;
    padding: 1.3vw 0;
  }

  @media screen and (min-width: 1001px) {
    gap: 100px;
    padding: 13px 0;
  }

  .headerBtn {
    font-size: 11px;
    width: 64px;

    @media screen and (min-width: 401px) and (max-width: 1000px) {
      font-size: 3vw;
      width: 17vw;
    }

    @media screen and (min-width: 1001px) {
      font-size: 30px;
      width: 170px;
    }
  }
`;
const ImageTest = styled.div`
  width: 300px;
  border-top: 3px solid #7a57d1;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 80vw;
  }

  @media screen and (min-width: 1001px) {
    width: 800px;
  }
`;

const ImgInput = styled.input`
  display: block;
  margin: 0 auto;
`;

const AnswerInputText = styled.textarea`
  border: 1px solid blue;
  width: 281px;
  height: 70px;
  display: flex;
  resize: none;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 75vw;
    height: 19vw;
  }

  @media screen and (min-width: 1001px) {
    margin: 0 auto;
    width: 750px;
    height: 190px;
  }
`;
const AddAnswerContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 75vw;
  height: 30vw;
`;
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const ViewMyAnswer = () => {
  const [question, setQustion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const {
    clickTitle,
    clickCotent,
    editAnswerId,
    setEditAnswerId,
    setClickContent,
  } = useStoreTemp();
  const { user_id, nickname } = useUserinfo();
  const [clickEditBtn, isClickEditBtn] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [a, b] = useState([]);
  //@@ 테스트
  const [reply, setReply] = useState("");
  const replyHandler = (e) => {
    setReply(e.target.value);
  };

  const submitAnswer = async () => {
    let formData = new FormData();
    formData.append("file", fileImg);

    const axios2 = await axios.post("http://localhost:3500/uploads3", formData);
    if (axios2.data) {
      alert("okay");
    } else {
      alert("no");
    }

    const axios1 = await axios.post("http://localhost:3500/answer", {
      content: reply,
      title: clickTitle,
      user_id: user_id,
      nickname,
      image: axios2.data,
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
  //++++++++++++++++++++++++++++위에 question 에 달린 내 대답 보기

  const getAnswer = async () => {
    try {
      const res = await axios.post("http://localhost:3500/answer/one", {
        title: clickTitle,
        user_id,
      });
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
    // console.log("입력값 변화 ");

    setClickContent(e.target.value);
  };
  const submitEditAnswer = () => {
    // console.log("수정하기 버튼 눌림 ");
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
    // console.log("삭제버튼 클릭");
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
        <QHeader>No. {question.id}</QHeader>
        <HeadWrapper>{question.title}</HeadWrapper>
        <QueWriter>{question.nickname}</QueWriter>
        <ImgContentBox>
          {question.createdAt !== undefined ? (
            <div>
              {" "}
              <Profileimg
                src={question.image ? question.image : null}
                onError={(i) => (i.target.src = "img/githublogo.png")}
                alt="1"
              />
            </div>
          ) : null}
        </ImgContentBox>
        <ContentBox>{question.content}</ContentBox>
      </Container>
      <RepContainer>
        {answer.map((item) => {
          return (
            <div key={item.id} item={item}>
              <HeadWrapper>
                <Writer> 작성일 : {item.createdAt.slice(0, 10)}</Writer>
              </HeadWrapper>

              <ContentContainer>
                <Profileimg
                  src={`${item.image ? item.image : null}`}
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
          );
        })}
      </RepContainer>

      {clickEditBtn !== false ? (
        <>
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
        </>
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
          <Button className="headerBtn" onClick={submitAnswer}>
            답변추가
          </Button>
          <Link to="/">
            <Button className="headerBtn">나가기</Button>
          </Link>
        </ButtonContainer>
      </AddAnswerContainer>
      {/* <div ref={myRef}>1</div> */}
    </>
  );
};

export default ViewMyAnswer;
