import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import profileimg from "../images/제경모.jpg";
import Button from "./button";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 25px;
  background: #cccccc;
  height: 60vw;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 25px;
  background: #ffffff;
  height: 60vw;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
  width: 25vw;
  height: 25vw;
`;
const Profileimg = styled.img.attrs({
  src: `${profileimg}`,
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 20vw;
  height: 20vw;
  border-radius: 99px;
  padding: 0 0 5px 0;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4vw;
  width: 30vw;
  height: 14vw;
  padding: 0 0 18vw;

  .btn {
    font-size: 3vw;
    width: 24vw;
  }
  .btn2 {
    font-size: 3vw;
    width: 12vw;
  }
`;
const EditBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
`;
const InputBox = styled.input`
  width: 27vw;
  height: 5.5vw;
  font-size: 3vw;
  border: 2px;
  border-radius: 10px;
  padding: 5px 7px;
  cursor: pointer;
  background: #cccccc;
  text-align: center;
`;
//해야 할 꺼 --> 로그인 상태를 기준으로 닉네임 받아와서 이름 삽입 .
//onclick 달기, usestate 상태 주기 .?
//닉네임 수정  -->
//비밀번호 수정  -->
//사진 수정 ==>
// 모달? 컴포넌트 추가?
//isEditPw
const Myprofile = () => {
  const [isEditnickname, editNickname] = useState(false);
  const [password, editPw] = useState("a123456");
  const [isEditPw,setEditPw] =useState(false)
  const [isEditPicture, EditPicture] = useState(false);
  const [nickname,setNickname] =useState("");
  const editNicknameBtn = () => {
    console.log("닉네임수정");
    editNickname(!isEditnickname);
    console.log(isEditnickname);
  };
  const editPwBtn = () => {
    console.log("비밀번호수정");
    setEditPw(!isEditPw);
    console.log("비밀번호수정");
    console.log(password);
  };
  const editPictureBtn = () => {
    console.log("사진수정");
    EditPicture(true);
    console.log(isEditPicture);
  };
  const nickNameHandler =(e)=>{
    setNickname(e.target.value)
  }
const sendEditNickname =()=>{
  console.log(nickname)
  axios.patch("http://localhost:3500/user/nickname/edit",{
    nickname,
    password
  })
}
//localhost3500/user/password/edit

  return (
    <>
      <Container>
        <ProfileContainer>
          <Profileimg />
          <div>서양범고래</div>
        </ProfileContainer>
        <BtnContainer>
          <Button className="btn" onClick={editNicknameBtn}>
            닉네임 수정
          </Button>
          <Button className="btn" onClick={editPwBtn}>
            비밀번호 수정
          </Button>
          <Button className="btn" onClick={editPictureBtn}>
            사진 수정
          </Button>
        </BtnContainer>
      </Container>
      {isEditnickname !== false ? (
        <Container2>
          <BtnContainer>
            <InputBox 
            value ={nickname}
            placeholder="닉네임을 입력하세요"
            onChange={nickNameHandler}
             />
            <EditBtnContainer>
              <Button className="btn2" onClick={sendEditNickname}>수정</Button>
              <Button className="btn2" onClick={editNicknameBtn}>취소</Button>
            </EditBtnContainer>
          </BtnContainer>
        </Container2>
      ) : null}
      {isEditPw !== false ? (
        <Container2>
          <BtnContainer>
            <InputBox placeholder="새 비밀번호" type="password" />
            <InputBox placeholder="새 비밀번호 확인" type="password" />
            <EditBtnContainer>
              <Button className="btn2">수정</Button>
              <Button className="btn2">취소</Button>
            </EditBtnContainer>
          </BtnContainer>
        </Container2>
      ) : null}
      {isEditPicture !== false ? <Container>와꾸 바꾸기</Container> : null}
    </>
  );
};
export default Myprofile;
