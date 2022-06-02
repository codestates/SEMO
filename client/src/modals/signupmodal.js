import styled from "styled-components";
import Button from "../components/button";
import { useState, useHistory } from "react";
import axios from "axios";

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

const ModalContainer = styled.div`
  text-align: center;
  margin: 120px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  border-radius: 30px;
  background-color: #a573ff;
  border: 1px solid #7a57d1;
  box-sizing: border-box;
  width: 234px;
  height: 275px;
`;

const Closebutton = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  color: white;
  font-size: 20px;
  width: 234px;

  > div {
    cursor: pointer;
    padding: 10px 15px 0 0;
  }
`;

const Title = styled.div`
  /* border: 1px solid blue; */
  color: white;
  font-size: 30px;
`;

const Login = styled.div`
  color: white;
  font-size: 15px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;

const Signupform = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 0 25px;
  gap: 2px;

  > div {
    color: white;
    font-size: 13px;
  }

  > div.idtext {
    /* background-color: black; */
    gap: 15px;
    display: flex;
  }

  > button {
    font-size: 10px;
  }
`;

const Inputbox = styled.input`
  width: 119px;
  height: 20px;
  background-color: #d9d9d9;
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Signupbox1 = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  > button.text {
    font-size: 1vh;
    height: 2.5vh;
  }
`;

const Text = styled.div`
  /* border: 1px solid green; */
`;

const Signupbutton = styled.div`
  padding: 7px 0 0 8vw;
`;
const Signupmodal = (props) => {
  const [user_id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkpw, setCheckpw] = useState("");

  const idHandler = (e) => {
    setId(e.target.value);
  };
  const nickNameHandler = (e) => {
    setNickname(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const checkpwHandler = (e) => {
    setCheckpw(e.target.value);
  };
  const signupHandler = () => {
    console.log(user_id, nickname, password, checkpw);
    if (user_id && nickname && password && checkpw) {
      if (password !== checkpw) {
        alert("비밀번호가 일치하지 않습니다.");
      } else {
        axios.post("http://localhost:3500/signup", {
          user_id,
          nickname,
          password,
        });
      }
    } else {
      alert("모든 항목은 필수입니다.");
    }
  };

  const modalout = () => {
    props.openSignup();
    props.openModalHandler();
  };
  return (
    <>
      <ModalContainer>
        {props.isOpen === true ? (
          <ModalBackdrop onClick={modalout}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <Closebutton>
                <div onClick={modalout}>&times;</div>
              </Closebutton>
              <Title>회원가입</Title>
              <Signupform>
                <Text>아이디</Text>
                <Signupbox1>
                  <Inputbox
                    name="user_id"
                    value={user_id}
                    onChange={idHandler}
                  />
                  <Button className="text">중복검사</Button>
                </Signupbox1>

                <Text>닉네임</Text>
                <Signupbox1>
                  <Inputbox value={nickname} onChange={nickNameHandler} />
                  <Button className="text">중복검사</Button>
                </Signupbox1>

                <Text>비밀번호</Text>
                <Inputbox
                  type="password"
                  value={password}
                  onChange={passwordHandler}
                />

                <Text>비밀번호 확인</Text>
                <Inputbox
                  type="password"
                  value={checkpw}
                  onChange={checkpwHandler}
                />
                <Signupbutton>
                  <Button onClick={signupHandler}>회원가입</Button>
                </Signupbutton>
              </Signupform>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export default Signupmodal;
