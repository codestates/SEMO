import styled from "styled-components";
import Button from "./button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStoreTemp, useUserinfo } from "../zustand/store";
import { Link } from "react-router-dom";

const OutContainer = styled.div`
  /* border: 5px solid green; */
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadWrapper = styled.div`
  /* border: 1px solid red; */
  width: 263px;
  padding: 11px;
  font-size: 19px;
  border-top: 2px solid #7a57d1;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 70vw;
    padding: 3vw;
    font-size: 5vw;
  }

  @media screen and (min-width: 1001px) {
    width: 700px;
    padding: 30px;
    font-size: 50px;
  }
`;

const ImgContentBox = styled.div`
  /* border: 5px green solid; */
  width: 263px;
  height: 188px;
  padding: 11px;
  font-size: 15px;
  background: #cccccc;
  border-radius: 0 0 11px 11px;
  border-top: 2px solid #7a57d1;

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
    font-size: 40px;
  }
`;

const Profileimg = styled.img`
  display: block;
  margin: 0 auto;
  width: 170px;
  height: 170px;
  padding: 8px 0;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 45vw;
    height: 45vw;
    padding: 2vw 0;
  }

  @media screen and (min-width: 1001px) {
    width: 450px;
    height: 450px;
    padding: 20px 0;
  }
`;

const TextContainer = styled.div`
  /* border: 1px solid purple; */
  width: 263px;
  padding: 11px;
  font-size: 15px;
  border-top: 2px solid #7a57d1;
  border-bottom: 2px solid #7a57d1;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 70vw;
    padding: 3vw;
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    width: 700px;
    padding: 30px;
    font-size: 40px;
  }
`;

const ReplyText = styled.textarea`
  width: 263px;
  height: 150px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 70vw;
    height: 40vw;
  }

  @media screen and (min-width: 1001px) {
    width: 700px;
    height: 400px;
  }
`;

const ButtonContainer = styled.div`
  border: 1px solid purple;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 38px;
  margin-top: 5px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    gap: 10vw;
    margin-top: 1vw;
  }

  @media screen and (min-width: 1001px) {
    gap: 100px;
    margin-top: 10px;
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
    <OutContainer>
      <HeadWrapper>{clickTitle}</HeadWrapper>
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
    </OutContainer>
  );
};

export default Answer;
