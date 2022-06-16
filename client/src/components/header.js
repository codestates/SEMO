import styled from "styled-components";
import logo from "../images/logo.png";
import Button from "../components/button.js";
import { useStore, useStoreTemp, useUserinfo } from "../zustand/store";
import { Link } from "react-router-dom";

const HeadDiv = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  width: 100vw;
`;

const Logoimage = styled.img.attrs({
  src: `${logo}`,
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 17vw;
  height: 17vw;
`;
const MyProFileImg = styled.img`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10vw;
  height: 10vw;
  border-radius: 99px;
  padding: 0 0 0 0px;
`;
const UserNickName = styled.span`
  font-size: 4vw;
  font-weight: 900;
`;
const RightContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  gap: 2px;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
`;

const MyprofileContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  flex-direction: flex-start;
  gap: 5vw;
  padding-left: 1vw;
`;
const Btndiv = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 2vw;

  .headerBtn {
    font-size: 3vw;
    width: 17vw;
  }
  .link {
    text-decoration: none;
  }

  .logout {
    font-size: 3vw;
    font-weight: 600;
  }

  .mypage {
    font-size: 3vw;
    font-weight: 600;
  }
`;

const Header = (props) => {
  const { openLoginModal, openSignupModal, islogin } = useStore();
  const { nickname, profile2 } = useUserinfo();
  const { clickMyPage, setClickMypage, setOffMypage, setSignOutModal } =
    useStoreTemp();
  // onError={(i) => (i.target.src = "img/githublogo.png")}

  const errHandler = (i) => {
    i.target.src = "img/githublogo.png";
  };

  return (
    <>
      {islogin === false ? (
        <HeadDiv>
          <Link to="/">
            <Logoimage />
          </Link>
          <RightContainer>
            <Btndiv>
              <Button className="headerBtn" onClick={openLoginModal}>
                로그인
              </Button>
              <Button className="headerBtn" onClick={openSignupModal}>
                회원가입
              </Button>
            </Btndiv>
          </RightContainer>
        </HeadDiv>
      ) : (
        <HeadDiv>
          <Link to="/">
            <Logoimage onClick={setOffMypage} />
          </Link>
          <RightContainer>
            <MyprofileContainer>
              <MyProFileImg src={`${profile2}`} onError={errHandler} alt="1" />
              <UserNickName>{nickname}</UserNickName>
            </MyprofileContainer>
            <Btndiv>
              <Button className="logout" onClick={props.openModalHandler}>
                로그아웃
              </Button>
              {clickMyPage === false ? (
                <Link className="link" to="/mypage" onClick={setClickMypage}>
                  <Button className="mypage">마이페이지</Button>
                </Link>
              ) : (
                <Button className="headerBtn" onClick={setSignOutModal}>
                  회원 탈퇴
                </Button>
              )}
            </Btndiv>
          </RightContainer>
        </HeadDiv>
      )}
    </>
  );
};

export default Header;
