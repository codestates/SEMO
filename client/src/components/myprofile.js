import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import profileimg from "../images/제경모.jpg";
import { useStoreTemp, useUserinfo } from "../zustand/store";
import Button from "./button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  /* border: 1px solid red; */
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cccccc;
  height: 60vw;
  .btn {
    font-size: 3vw;
    width: 17vw;
  }
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
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 113px;
  height: 113px;
  gap: 5px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 30vw;
    height: 30vw;
  }

  @media screen and (min-width: 1001px) {
    width: 300px;
    height: 300px;
  }
`;
const Profileimg = styled.img`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 75px;
  height: 75px;
  border-radius: 100%;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 20vw;
    height: 20vw;
  }

  @media screen and (min-width: 1001px) {
    width: 200px;
    height: 200px;
  }
`;
const BtnContainer = styled.div`
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  width: 113px;
  height: 113px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    width: 30vw;
    height: 30vw;
  }

  @media screen and (min-width: 1001px) {
    width: 300px;
    height: 300px;
  }

  .btn {
    font-size: 11px;
    width: 94px;

    @media screen and (min-width: 401px) and (max-width: 1000px) {
      font-size: 3vw;
      width: 25vw;
    }

    @media screen and (min-width: 1001px) {
      font-size: 30px;
      width: 250px;
    }
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

const NicknameText = styled.div`
  /* border: 1px solid pink; */
  font-size: 15px;

  @media screen and (min-width: 401px) and (max-width: 1000px) {
    font-size: 4vw;
  }

  @media screen and (min-width: 1001px) {
    font-size: 40px;
  }
`;

const Myprofile = () => {
  const {
    isEditnickname,
    editNicknameBtn,
    isEditPw,
    editPwBtn,
    cancelEditNicknameBtn,
    nickname,
    setNickname,
    setInputPw,
    setConfrimInputPw,
    inputPw,
    confirmInputPw,
    cancelEditPwBtn,
  } = useStoreTemp(); //zustand
  const {
    edPw,
    user_id,
    nickname2,
    profile2,
    setUserNickname,
    setUserProfile,
  } = useUserinfo();
  const [isEditPicture, EditPicture] = useState(false);
  const editPictureBtn = () => {
    console.log("사진수정");
    EditPicture(!isEditPicture);
    console.log(isEditPicture);
  };

  //사진 파일

  const deleteFileImg = () => {
    URL.revokeObjectURL(fileImg);
    setfileImg("");
  };

  const [fileImg, setfileImg] = useState("");
  const saveFileImg = (e) => {
    const file = e.target.files[0];

    setfileImg(file);
  };
  let date = new Date().toISOString();
  let profile = `img/${date.slice(0, 16)}_.jpg`;

  const testFn = async () => {
    console.log("id", user_id, "123", nickname);
    let formData = new FormData();
    formData.append("file", fileImg);

    const axios2 = await axios.post(
      "http://52.78.130.4:3500/uploadsss",
      formData
    );
    if (axios2.data.success) {
      alert("okay");
    } else {
      alert("no");
    }
    const axios1 = await axios.patch(
      "http://52.78.130.4:3500/user/profile/edit",
      {
        // 패치 데이터 . 예정
        user_id,

        profile,
      }
    );
    setUserProfile(date);
  };
  const profileDelete = async () => {
    const axios1 = await axios.patch(
      "http://52.78.130.4:3500/user/profile/edit",
      {
        // 패치 데이터 . 예정
        user_id,

        profile: "3",
      }
    );
    if (axios1.data) {
      alert("삭제되었습니다.");
    }
  };

  const nickNameHandler = (e) => {
    setNickname(e.target.value);
  };

  const sendEditNickname = () => {
    axios
      .patch("http://52.78.130.4:3500/user/nickname/edit", {
        nickname,
        user_id,
      })
      .then((res) => {
        if (res.data === "info edited") {
          cancelEditNicknameBtn();
          alert("닉네임 변경 성공");
          setUserNickname(nickname);
        } else {
          alert("실패");
        }
      });
  };

  const inputPwHandler = (e) => {
    setInputPw(e.target.value);
  };

  const confirmPwHandler = (e) => {
    setConfrimInputPw(e.target.value);
  };

  const editPwHandler = () => {
    if (inputPw !== confirmInputPw) {
      console.log("둘이다름");
    } else {
      console.log("굳");
      axios
        .patch("http://52.78.130.4:3500/user/password/edit", {
          user_id, //user_id 를 어케 지정해줄지 구현해야함
          password: inputPw,
        })
        .then((res) => {
          if (res.data === "info edited") {
            cancelEditPwBtn();
            alert("비밀번호 변경 성공");
          } else {
            alert("실패");
          }
        });
      //axios 자리
    }
  };
  return (
    <>
      <Container>
        <ProfileContainer>
          <Profileimg
            src={`${profile2}`}
            onError={(i) => (i.target.src = "img/githublogo.png")}
            alt="1"
          />
          <NicknameText>{nickname2}</NicknameText>
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
              value={nickname}
              placeholder="닉네임을 입력하세요"
              onChange={nickNameHandler}
            />
            <EditBtnContainer>
              <Button className="btn2" onClick={sendEditNickname}>
                수정
              </Button>
              <Button className="btn2" onClick={cancelEditNicknameBtn}>
                취소
              </Button>
            </EditBtnContainer>
          </BtnContainer>
        </Container2>
      ) : null}
      {isEditPw !== false ? (
        <Container2>
          <BtnContainer>
            <InputBox
              placeholder="새 비밀번호"
              value={inputPw}
              type="password"
              onChange={inputPwHandler}
            />
            <InputBox
              placeholder="새 비밀번호 확인"
              value={confirmInputPw}
              type="password"
              onChange={confirmPwHandler}
            />
            <EditBtnContainer>
              <Button className="btn2" onClick={editPwHandler}>
                수정
              </Button>
              <Button className="btn2" onClick={cancelEditPwBtn}>
                취소
              </Button>
            </EditBtnContainer>
          </BtnContainer>
        </Container2>
      ) : null}
      {isEditPicture !== false ? (
        <Container>
          <div>
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
          </div>
          <Button className="btn" onClick={testFn}>
            수정
          </Button>
          <Button className="btn" onClick={profileDelete}>
            프로필 삭제
          </Button>
          <Button className="btn" onClick={editPictureBtn}>
            취소
          </Button>
        </Container>
      ) : null}
    </>
  );
};
export default Myprofile;
