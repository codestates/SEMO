import styled from "styled-components";
import Button from "./button";
import { useState } from "react";
import axios from "axios";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
import { useNavigate } from "react-router";
const ContainQuestion = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const InputTitleBox = styled.input`
  width: 300px;
  height: 8px;
  margin: 4px 0;
  background: white;
  border-radius: 8px;
  border: 1px solid gray;
  padding: 11px;
  font-size: 15px;
  box-shadow: 3px 3px 3px 3px #999;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 80vw;
    height: 2vw;
    margin: 1vw 0;
    border-radius: 2vw;
    padding: 3vw;
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    width: 800px;
    height: 20px;
    margin: 10px 0;
    border-radius: 20px;
    padding: 30px;
    font-size: 40px;
  }
`;
const InputTextBox = styled.textarea`
  width: 300px;
  height: 188px;
  margin: 4px;
  background: white;
  vertical-align: middle;
  border-radius: 8px;
  padding: 11px;
  font-size: 15px;
  box-shadow: 3px 3px 3px 3px #999;
  resize: none;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 80vw;
    height: 50vw;
    margin: 1vw;
    border-radius: 2vw;
    padding: 3vw;
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    width: 800px;
    height: 500px;
    margin: 10px;
    border-radius: 20px;
    padding: 30px;
    font-size: 40px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const WritingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 11px;
  padding: 10px 0;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    gap: 3vw;
    padding: 2.6vw 0;
  }

  @media screen and (min-width: 1001px) {
    gap: 30px;
    padding: 26px 0;
  }

  .btn {
    font-size: 9px;
    width: 56px;

    @media screen and (min-width: 401px) and (max-width: 1000px) {
      font-size: 2.5vw;
      width: 15vw;
    }

    @media screen and (min-width: 1001px) {
      font-size: 25px;
      width: 150px;
    }
  }
`;

const ImageTest = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  padding: 0 35px;
  display: flex;
  flex-direction: row;

  > .deletebutton {
    font-size: 8px;
    height: 23px;
    width: 38px;

    @media screen and (min-width: 401px) and (max-width: 1000px) {
      font-size: 2vw;
      height: 6vw;
      width: 10vw;
    }

    @media screen and (min-width: 1001px) {
      font-size: 20px;
      width: 60px;
      height: 100px;
    }
  }
`;

const WriteQuestionComponenet = () => {
  const { title, text, setTitle, setText } = useStoreTemp();
  const { nickname, user_id } = useUserinfo();
  const { school, grade, subject, selectSchool, selectGrade, selectsubject } =
    useStore();
  const navigate = useNavigate();
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const textHandler = (e) => {
    setText(e.target.value);
  };

  const [fileImg, setfileImg] = useState("");
  const saveFileImg = (e) => {
    const file = e.target.files[0];

    setfileImg(file);
  };

  const testFn = async () => {
    let formData = new FormData();
    formData.append("file", fileImg);

    if (fileImg !== "") {
      const axios2 = await axios.post(
        "http://localhost:3500/uploads3",
        formData
      );
      if (axios2.data) {
        selectSchool("");
        selectGrade("");
        selectsubject("");
        alert("okay");
        navigate("/noticeboard");
      } else {
        alert("no");
      }
      return axios.post("http://localhost:3500/question", {
        nickname: nickname,
        user_id,
        title,
        content: text,
        school,
        grade,
        subject,
        image: axios2.data,
      });
    } else {
      axios.post("http://localhost:3500/question", {
        nickname: nickname,
        user_id,
        title,
        content: text,
        school,
        grade,
        subject,
      });
      alert("등록 되었습니다.");
      navigate("/noticeboard");
    }

    //사진 없이 글 올리는 경우  -> image"" 공백이나 false? 이런거 넣게 하기 ? " or 그냥 안넣어도 되는지?
    // 사진 있게 올리는 경우  ==> axops2 를하고, swerver 에서 오는 응답 req 를 넣기.
  };

  const deleteFileImg = () => {
    URL.revokeObjectURL(fileImg);
    setfileImg("");
  };

  return (
    <>
      <ContainQuestion>
        <TitleContainer>
          <InputTitleBox
            placeholder="제목"
            value={undefined}
            onChange={titleHandler}
          />
        </TitleContainer>
        <ImageTest>
          <div>
            {fileImg && <img alt="exam" src={fileImg} />}
            <input
              name="imgUp"
              type="file"
              accept="image/*"
              onChange={saveFileImg}
            />
          </div>
          <Button className="deletebutton" onClick={() => deleteFileImg()}>
            삭제
          </Button>
        </ImageTest>
        <WritingContainer>
          <InputTextBox
            placeholder="내용을 입력하세요"
            value={undefined}
            onChange={textHandler}
          ></InputTextBox>
        </WritingContainer>
        <BtnContainer>
          <Button className="btn" onClick={testFn}>
            질문하기
          </Button>
          <Button className="btn">취소</Button>
        </BtnContainer>
        {/* 아래는 사진 업로드 기능인데, db로 보내기랑 css수정해야함 */}
      </ContainQuestion>
    </>
  );
};

export default WriteQuestionComponenet;
