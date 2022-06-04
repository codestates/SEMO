import styled from "styled-components";
import Button from "./button";
import kakaologo from "../images/kakaologo.png";
import { KAKAO_AUTH_URL } from "../oauth";
import KakaoRedirectHandler from "../KakaoRedirectHandeler";

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

const Loginform = styled.form`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-top: 5px;

  > div {
    color: white;
    font-size: 13px;
  }

  > div.idtext {
    /* background-color: black; */
    gap: 15px;
    display: flex;
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

const Kakaologbtn = styled.img`
  /* border: 1px solid blue; */
  padding-top: 15px;
`;
const Loginmodal = (props) => {
  return (
    <>
      <ModalContainer>
        {props.isOpen === true ? (
          <ModalBackdrop onClick={props.openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <Closebutton>
                <div onClick={props.openModalHandler}>&times;</div>
              </Closebutton>
              <Title>로그인</Title>
              <Login>
                회원이 아니신가요?
                <Button onClick={props.openSignup}>회원가입</Button>
              </Login>
              <Loginform>
                <div className="idtext">
                  아이디
                  <Inputbox />
                </div>
                <div className="passwordtext">
                  비밀번호 <Inputbox type="password" />
                </div>
                <Button>로그인</Button>
              </Loginform>
              <a href={KAKAO_AUTH_URL}>
                <Kakaologbtn src={kakaologo} alt="" />
              </a>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export default Loginmodal;
