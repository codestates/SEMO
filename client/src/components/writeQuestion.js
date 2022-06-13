import styled from "styled-components";
import Button from "./button";
import { useState } from "react";
import axios from "axios";
import { useStoreTemp } from "../zustand/store";
const ContainQuestion = styled.div`
  display: flex;
`;
const InputTitleBox = styled.input`
  width: 80vw;
  height: 2vw;
  margin: 5vw 0 2vw 0;
  background: #cccccc;
  border-radius: 2vw;
  padding: 3vw;
  font-size: 5vw;
`;
const InputTextBox = styled.textarea`
  width: 80vw;
  height: 50vw;
  margin: 5vw;
  background: #cccccc;
  vertical-align: middle;
  border-radius: 2vw;
  padding: 3vw;
  font-size: 4vw;
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
  gap: 3vw;
  .btn {
    font-size: 2.5vw;
    width: 15vw;
  }
`;

const ImageTest = styled.div``;
const WriteQuestionComponenet = () => {
  // const [title,setTitle]=useState("");
  // const [text,setText]=useState("");
  const { title, text, setTitle, setText } = useStoreTemp();
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const textHandler = (e) => {
    setText(e.target.value);
  };

  const [fileImg, setfileImg] = useState("");
  const saveFileImg = (e) => {
    const file = (e.target.files[0])

    setfileImg(file);
  };
  const testFn = async () => {
    let formData = new FormData();
    formData.append('file', fileImg)
    const axios1 = await axios.post("http://localhost:3500/question", {
      title,
      content: text,
    })
    const axios2 = await axios.post('http://localhost:3500/uploads', formData)
    if (axios2.data.success) {
      alert ("okay")
    }
    else {
      alert ("no")
    }   
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
            value={title}
            onChange={titleHandler}
          />
        </TitleContainer>

        <WritingContainer>
          <InputTextBox
            placeholder="내용을 입력하세요"
            value={text}
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
        <ImageTest>
          <div>사진 업로드 </div>
          <div>image</div>
          <div>
            {fileImg && <img alt="exam" src={fileImg} />}
            <input
              name="imgUp"
              type="file"
              accept="image/*"
              onChange={saveFileImg}
            />
            <Button onClick={() => deleteFileImg()}>삭제</Button>
          </div>
        </ImageTest>
      </ContainQuestion>
    </>
  );
};

export default WriteQuestionComponenet;
